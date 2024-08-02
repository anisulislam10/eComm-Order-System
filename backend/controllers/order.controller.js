const db = require('../models');
const Order = db.orders;
const OrderDetail = db.orderDetails; // Assuming there's an OrderDetail model

// Get all orders
exports.getAllOrders = (req, res) => {
  Order.findAll({ include: [OrderDetail] })
    .then(orders => {
      res.status(200).send(orders);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Create a new order
exports.createOrder = (req, res) => {
  const { clientId, status, orderDetails } = req.body;

  Order.create({
    clientId,
    status,
    orderDetails
  }, {
    include: [OrderDetail]
  })
    .then(order => {
      res.status(201).send(order);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Get order by ID
exports.getOrderById = (req, res) => {
  const orderId = req.params.orderId;

  Order.findByPk(orderId, { include: [OrderDetail] })
    .then(order => {
      if (!order) {
        return res.status(404).send({ message: "Order not found." });
      }
      res.status(200).send(order);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Update order
exports.updateOrder = (req, res) => {
  const orderId = req.params.orderId;

  Order.update(req.body, {
    where: { id: orderId }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Order was updated successfully." });
      } else {
        res.send({ message: `Cannot update Order with id=${orderId}. Maybe Order was not found or req.body is empty!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Delete order
exports.deleteOrder = (req, res) => {
  const orderId = req.params.orderId;

  Order.destroy({
    where: { id: orderId }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Order was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Order with id=${orderId}. Maybe Order was not found!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
