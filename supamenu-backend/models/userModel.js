const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        unique: true,
        minlength: [2, 'First name must be at least 2 characters'],
        maxlength: [50, 'First name cannot exceed 50 characters']
    },
    lastName: {
        type: String,
        minlength: [2, 'Last name must be at least 2 characters'],
        maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\d{10,15}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Should be between 10-15 digits.`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    }
});


module.exports = mongoose.model("User", userSchema);
