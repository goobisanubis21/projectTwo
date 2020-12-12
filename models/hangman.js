module.exports = function( sequelize, DataTypes){
    var Score = sequelize.define("Score", {
        score: {
            type: DataTypes.INTEGER
        }

    } ,{
        freezeTableName: true
    });

    Score.associate = function(models){
        score.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Score;
}