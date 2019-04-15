/************************************************************
 * @description
 * 
 * @file        :   routes.js
 * @overview    :   To call the API.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   19-03-2019
 * 
 * **********************************************************/
const express = require('express')
const router = express.Router();
const ctrl = require('../controller/userController')
const noteController = require('../controller/noteController')
const middleware = require('../middleware/authentication')
router.post('/login', ctrl.login);
router.post('/register', ctrl.registration);
router.post('/forgotPassword', ctrl.forgotPassword);
router.post('/resetPassword/:token', middleware.auth, ctrl.resetPassword);
router.post('/createNote', middleware.checkTokenAuth, noteController.createNote)
router.get('/getNotes', middleware.checkTokenAuth, noteController.getNotes)
router.put('/isArchived', middleware.checkTokenAuth, noteController.isArchived);
router.put('/isTrashed', middleware.checkTokenAuth, noteController.isTrashed)
router.post('/deleteNote',middleware.checkTokenAuth,noteController.deleteNote)
router.put('/updateColor',middleware.checkTokenAuth,noteController.updateColor)
router.put('/editTitle',middleware.checkTokenAuth,noteController.editTitle)
router.put('/editDescription',middleware.checkTokenAuth,noteController.editDescription)
router.put('/doPinned',middleware.checkTokenAuth,noteController.doPinned)
module.exports = router;