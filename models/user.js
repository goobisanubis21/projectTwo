module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
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
            allowNull: false
        },
        highestScore: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, { freezeTableName: true });

    // all of the users scores will be deleted with them
    User.associate = function(models){
        User.hasMany(models.Score, {
            onDelete: "cascade"
        });
    };

    return User

};