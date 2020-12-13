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
        //     get () {
        //         return () => this.getDataValue('password')
        //     }
        // },
        // salt: {
        //     type: DataTypes.STRING,
        //     get () {
        //         return () => this.getDataValue('salt')
        //     }
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

    //automatic password encryption

    // User.generateSalt = function() {
    //     return crypto.randomBytes(16).toString('base64')
    // }
    // User.encryptPassword = function(plainText, salt) {
    //     return crypto
    //         .createHash('RSA-SHA256')
    //         .update(plainText)
    //         .update(salt)
    //         .digest('hex')
    // }

    // const setSaltAndPassword = user => {
    //     if (user.changed('password')) {
    //         user.salt = User.generateSalt()
    //         user.password = User.encryptPassword(user.password(), user.salt())
    //     }
    // }
    // User.beforeCreate(setSaltAndPassword)
    // User.beforeUpdate(setSaltAndPassword)

    return User;

};