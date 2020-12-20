module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        winStreak: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        combineScore: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        currWinStreak: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        currCombineScore: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        freezeTableName: true
    });

    Score.associate = function (models) {
        Score.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    };

    return Score;
};