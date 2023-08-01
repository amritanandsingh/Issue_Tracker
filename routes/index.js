const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home')
router.get('/', homeController.home);
router.post('/creat_project',homeController.creat_project);
router.get('/user/:id',homeController.bug_home);
router.get('/creatissue',homeController.form);
router.post('/bugform',homeController.bugform);
//router.get('/search',homeController.search);

module.exports = router; 