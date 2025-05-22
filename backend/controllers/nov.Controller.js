const Novedades = require('../models/nov.model');
const novCtrl = {};

// función devuelve todas las novedades
novCtrl.getNovedades = async (req, res) => {
    try {
        const novedades = await Novedades.find();
        res.status(200).json(novedades);
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error obteniendo novedades' });
    }
};

// función que devuelve una novedad dada su id y suma 1 a visitas
novCtrl.getNovedad = async (req, res) => {
    try {
        const novedad = await Novedades.findById(req.params.id);
        if (novedad) {
            // Incrementar visitas
            novedad.visitas = (novedad.visitas || 0) + 1;
            await novedad.save();
            res.status(200).json(novedad);
        } else {
            res.status(404).json({ status: 'Novedad not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error obteniendo la novedad' });
    }
};

// función que actualiza una novedad
novCtrl.updateNovedades = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Novedades.findByIdAndUpdate(id, req.body, { new: true });
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ status: 'Novedad no encontrada' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error actualizando la novedad' });
    }
};

// función que borra una novedad
novCtrl.deleteNovedades = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Novedades.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ status: 'Novedad borrada satisfactoriamente' });
        } else {
            res.status(404).json({ status: 'Novedad no encontrada' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error borrando la novedad' });
    }
};

// añadir novedad
novCtrl.addNovedad = async (req, res) => {
    const novedad = new Novedades(req.body);
    try {
        await novedad.save();
        res.status(201).json({ status: 'Successfully added' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error añadiendo la novedad' });
    }
};

module.exports = novCtrl;
