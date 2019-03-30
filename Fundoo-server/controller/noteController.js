const exp = require('express-validator')
const noteService=require('../services/noteService')
exports.note=(req,res)=>{
    req.checkBody('noteTitle',"Note title cannot be empty")
    req.checkBody('noteContent',"Content cannot be empty")

    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    }else{

        noteService.note(req.body,(err,result)=>{
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: err
                })
            }
            else {
                return res.status(200).send({
                    message: "Note saved sucessfully"
                });
            }
        })

    }



}