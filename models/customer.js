module.exports = function (sequelize, DataTypes) {
    var customer = sequelize.define("customer", {
        customer_name: DataTypes.STRING,
        burger_name: DataTypes.STRING
    },
        {
            timestamps: false
        });
    return customer;
}