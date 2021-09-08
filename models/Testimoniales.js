import Sequelice from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelice.STRING,
    },
    correo: {
        type: Sequelice.STRING,
    },
    mensaje: {
        type: Sequelice.STRING,
    }
});