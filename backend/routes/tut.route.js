const express = require("express");
const router = express.Router();
const tutCtrl = require("../controllers/tut.controller");

router.get('/tutoriales', tutCtrl.getTutoriales);
router.get('/tutorial/:id', tutCtrl.getTutorial);
router.post('/tutorial', tutCtrl.addTutorial);
router.put('/tutorial/:id', tutCtrl.updateTutorial);
router.delete('/tutorial/:id', tutCtrl.deleteTutorial);
router.get('/dificultad/:dificultad', tutCtrl.getDificultad);
module.exports = router;
