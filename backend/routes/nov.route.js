const express=require("express");
const router=express.Router();
const novCtrl=require("../controllers/nov.Controller");
router.get('/',novCtrl.getNovedades);
router.get('/novedad/:id',novCtrl.getNovedad);
router.post('/',novCtrl.addNovedad);
router.put('/:id',novCtrl.updateNovedades);
router.delete('/:id',novCtrl.deleteNovedades);
module.exports = router;