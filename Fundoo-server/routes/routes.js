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
const noteController=require('../controller/noteController')
const middleware = require('../middleware/authentication')
router.post('/login', ctrl.login);
router.post('/register', ctrl.registration);
router.post('/forgotPassword', ctrl.forgotPassword);
router.post('/resetPassword/:token', middleware.auth, ctrl.resetPassword);
router.post('/createNote',middleware.checkTokenAuth,noteController.createNote)

module.exports=router;