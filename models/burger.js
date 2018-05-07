

module.exports = function(sequelize, DataTypes){
    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1, 140]}
        }, 
        devoured: DataTypes.BOOLEAN
    });

    burger.associate = function(models) {
        // Associating burger with customers
        // When an burger is deleted, also delete any associated customer
        burger.hasMany(models.customer, {
          onDelete: "cascade"
        });
    
      };
    return burger;
}