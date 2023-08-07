const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');

// Route for the home page, using the 'homeController.home' function to handle the request.
router.get('/', homeController.home);

// Route to create a new project, handled by 'homeController.creat_project'.
router.post('/creat_project', homeController.creat_project);

// Route to display the bug details for a specific project, handled by 'homeController.bug_home'.
router.get('/project/:id', homeController.bug_home);

// Route to display the form for creating a new issue in a project, handled by 'homeController.form'.
router.get('/project/id/creatissue', homeController.form);

// Route to handle the submission of the bug form for a specific project, handled by 'homeController.bugform'.
router.post('/project/id/formsubmission', homeController.bugform);

// Route to search for users with a given ID, handled by 'homeController.search'.
router.post('/user/search/:id', homeController.search);

module.exports = router;
