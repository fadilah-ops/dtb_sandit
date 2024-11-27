import db from "./config.js";
import { Sequelize } from "sequelize";

const{ DataTypes } = Sequelize;

export const data = db.define('data_mahasiswa', {
    Nama: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Harga: {
        type: DataTypes.INTEGER(6),
        allowNull: false
    },
    Type: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    Brand: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    nama_foto: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Rating: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});
// type: DataTypes.INTEGER(3)