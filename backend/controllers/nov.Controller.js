const Novedades=require('../models/nov.model');
const novCtrl={};

//funcion devuelve todas las vovedades

novCtrl.getNovedades = async(req,res)=>{
    const novedades = await Novedades.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => console.error(err));
};
//funcion que devuelve una novedad dada si id
novCtrl.getNovedad=async(req,res)=>{
    const novedad = await Novedades.findById(req.params.id)
        .then((data) => {
            if(data!=null)res.status(200).json(data)
            else res.status(404).json({status:'Novedad not found'})
        })
        .catch((err) => console.error(err));
};


//funcion que actualiza una novedad
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

//funcion que borra una novedad
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
//añadir novedad
novCtrl.addNovedad = async (req, res) => {
   const novedad = new Novedades (req.body);
   await novedad.save()
       .then(()=>{
           res.status(201).json({status: 'Successfully added'})
       })
       .catch(err=>{
           res.send(err.message);
           console.error(err);
       })
};
module.exports = novCtrl;
