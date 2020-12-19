module.exports = function(sequelize, DataTypes) {
    var Status = sequelize.define("Status", {
    
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1,240]
        }
      },
    
    },{
        freezeTableName: true
    });

    Status.associate = function(models){
        Status.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Status;
  };