module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            validate: {
                len: [4, 10]
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [6, 14]
            },
            allowNull: false
        }
    }, { freezeTableName: true });

    return User

};