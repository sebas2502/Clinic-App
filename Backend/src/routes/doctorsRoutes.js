const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctor.js');

router.get('/',doctorController.getDoctors);
router.get('/:id',doctorController.getDoctor);
router.post('/',doctorController.insertDoctor);
router.delete('/delete/:id',doctorController.deleteDoctor);
router.put('/edit/:id',doctorController.updateDoctor);





module.exports = router;

