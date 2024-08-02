module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'In Progress'
    }
  });

  return Order;
};
