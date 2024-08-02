module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return OrderDetail;
  };
  