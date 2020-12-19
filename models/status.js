module.exports = function(sequelize, DataTypes) {
    var Status = sequelize.define("Status", {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1,240]
        }
      },
      userId: {
        type: DataTypes.Integer,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
      }
    });
    return Status;
  };