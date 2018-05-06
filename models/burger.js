// var orm = require("../config/orm");

// var burger ={
//     all: function(cb){
//         orm.selectAll("burgers", function(res){
//             cb(res);
//         });
//     },
//     create: function(cols, vals, cb){
//         orm.create("burgers", cols, vals, function(res){
//             cb(res);
//         });
//     },
//     update: function(objColVals, condition, cb){
//         orm.update("burgers", objColVals, condition, function(res){
//             cb(res);
//         });
//     }
// };

// module.exports = burger;

module.exports = function(sequelize, DataTypes){
    var burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
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