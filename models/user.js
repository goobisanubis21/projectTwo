var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [4, 10]
      },
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 14]
      },
      allowNull: false,
    }
  }, { freezeTableName: true });

  // all of the users scores will be deleted with them
  User.associate = function(models){
    User.hasMany(models.Score, {
      onDelete: "cascade"
    });

    User.hasMany(models.Status, {
      onDelete: "cascade"
    });
  };

  // if the user deletes their profile then everything in the status table associated with that specific user will be deleted as well
  // User.associate = function(models){
  //   User.hasMany(models.Status, {
  //     onDelete: "cascade"
  //   });
  // }

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};