const Client = require("../models/client.js");

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single client by ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new client
exports.createClient = async (req, res) => {
  const {
    clientName,
    category,
    representative,
    address,
    email,
    phone,
    bankAccount,
  } = req.body;
  try {
    const client = new Client({
      clientName,
      category,
      representative,
      address,
      email,
      phone,
      bankAccount,
    });
    await client.save();
    res
      .status(201)
      .json({ message: "Client saved successfully", client: client });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a client
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      Object.assign(client, req.body);
      const updatedClient = await client.save();
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a client
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      await client.remove();
      res.json({ message: "Client deleted" });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
