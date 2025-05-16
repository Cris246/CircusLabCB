const Tutoriales = require('../models/tut.model');
const tutCtrl = {};

// Función que devuelve todos los tutoriales
tutCtrl.getTutoriales = async (req, res) => {
    const tutoriales = await Tutoriales.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve un tutorial por ID
tutCtrl.getTutorial = async (req, res) => {
    const tutorial = await Tutoriales.findById(req.params.id)
        .then((data) => {
            if (data != null) res.status(200).json(data);
            else res.status(404).json({ status: 'Tutorial not found' });
        })
        .catch((err) => console.error(err));
};

// Función que actualiza un tutorial
tutCtrl.updateTutorial = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Tutoriales.findByIdAndUpdate(id, req.body, { new: true });
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ status: 'Tutorial no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error actualizando el tutorial' });
    }
};

// Función que borra un tutorial
tutCtrl.deleteTutorial = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tutoriales.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ status: 'Tutorial borrado satisfactoriamente' });
        } else {
            res.status(404).json({ status: 'Tutorial no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error borrando el tutorial' });
    }
};

// Función para añadir un nuevo tutorial
tutCtrl.addTutorial = async (req, res) => {
    const tutorial = new Tutoriales(req.body);
    await tutorial.save()
        .then(() => {
            res.status(201).json({ status: 'Successfully added' });
        })
        .catch(err => {
            res.send(err.message);
            console.error(err);
        });

    // Función que devuelve los tutoriales por dificultad

};
tutCtrl.getDificultad = async (req, res) => {
    try {
        const { dificultad } = req.params;
        const dificultadNormalizada = dificultad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // quita tildes
        const dificultadesValidas = ['principiante', 'media', 'dificil'];

        if (!dificultadesValidas.includes(dificultadNormalizada)) {
            return res.status(400).json({
                status: 'Dificultad no válida',
                mensaje: `Las opciones válidas son: principiante, media, difícil`
            });
        }

        const tutoriales = await Tutoriales.find({ dificultad: dificultadNormalizada });

        if (tutoriales.length > 0) {
            res.status(200).json(tutoriales);
        } else {
            res.status(404).json({ status: 'No se encontraron tutoriales con esa dificultad' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error al obtener los tutoriales por dificultad' });
    }
};

module.exports = tutCtrl;