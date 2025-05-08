const Restaurant = require("../models/restaurant.js");

exports.createRestaurant = async (req, res) => {
  const { name, address, phone, bankAccount } = req.body;
  try {
    const restaurant = new Restaurant({
      name,
      address,
      phone,
      bankAccount,
      ownerId: req.user.userId,
    });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
