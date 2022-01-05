module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.INTEGER(10).UNSIGNED,
        genreId: dataTypes.INTEGER(10).UNSIGNED
    };
    let config = {
        tableName: "movies"
    }
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreingKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreingKey: "genre_id",
        })
    }




    return Movie
};