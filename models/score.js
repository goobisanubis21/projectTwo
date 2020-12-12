module.exports = function( sequelize, DataTypes){
    var Score = sequelize.define("Score", {
        score: {
            type: DataTypes.INTEGER
        }

    } ,{
        freezeTableName: true
    });

    Score.associate = function(models){
        Score.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Score;
};