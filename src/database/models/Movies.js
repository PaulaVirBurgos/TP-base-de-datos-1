module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
    const cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },

        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            /* 3 cantidad de digitos que puede tener en total, y el 1 cantidad de numeros despues de la coma */
            allowNull: false,
        },

        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },

        release_date: {
            type: dataTypes.DATE,
            allowNull: false,

        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,

        },

        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }
    const config = {
        tableName: "movies",
        timeStamps: true,
        underScored: true,

    }
    const Movie = sequelize.define(alias, cols, config);
    return Movie

} 