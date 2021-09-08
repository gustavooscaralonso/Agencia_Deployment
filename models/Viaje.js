import Sequelice from 'sequelize';
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelice.STRING,
    },
    precio: {
        type: Sequelice.STRING,
    },
    fecha_ida: {
        type: Sequelice.DATE,
    },
    fecha_vuelta: {
        type: Sequelice.DATE,
    },
    imagen: {
        type: Sequelice.STRING,
    },
    descripcion: {
        type: Sequelice.STRING,
    },
    disponibles: {
        type: Sequelice.STRING,
    },
    slug: {
        type: Sequelice.STRING,
    },
});