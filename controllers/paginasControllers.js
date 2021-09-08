import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {

    //consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push(await Viaje.findAll({limit: 3}))
    promiseDB.push(await Testimonial.findAll({limit: 3}))

    try {
        const resultado = await Promise.all(promiseDB);
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.error(error)
    }
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    //Consultar BBDD
    const viajes = await Viaje.findAll();

    console.log(viajes)

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimonios',
            testimoniales
        });
    } catch (error) {
        console.error(error);
    }

}

//Muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where: { slug }});

        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (error) {
        console.error(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}