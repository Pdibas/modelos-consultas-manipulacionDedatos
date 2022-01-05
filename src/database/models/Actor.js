module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        favorite_movie_id: dataTypes.INTEGER(10).UNSIGNED
    };
    let config = {
        tableName: "actors"
    }
    const Actor = sequelize.define(alias, cols, config);
    Actor.associate = function(models) {
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie",
            foreingKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }

    return Actor
};