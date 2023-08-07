const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home')
router.get('/', homeController.home);
router.post('/creat_project',homeController.creat_project);
router.get('/project/:id',homeController.bug_home);
router.get('/project/id/creatissue',homeController.form);
router.post('/project/id/formsubmission',homeController.bugform);

router.post('/user/search/:id',homeController.search);
 
module.exports = router; 