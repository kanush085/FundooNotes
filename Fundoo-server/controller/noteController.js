const noteService = require('../services/noteService');
/**
 * @description:it handles the creating note data
 * @param {*request from frontend} req 
 * @param {*response from backend} res 
 */
exports.createNote = (req, res) => {
    try {
        console.log("In controller=====>");

        req.checkBody('title', 'Title should not be empty').not().isEmpty();
        req.checkBody('description', 'Description should not be empty').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            // var obj = { title: req.body.title, description: req.body.description }
            noteService.createNote(req, (err, result) => {
                if (err) {
                    return res.status(500).send({
                        message: err
                    });
                } else {
                    var userNote = {
                        note: result,
                    }
                    response.status = true;
                    response.message = "Note created";
                    response.data = userNote;
                    res.status(200).send(response);
                }
            })
        }
    } catch (err) {
        res.send(err);
    }
}


exports.getNotes = (req, res) => {
    // console.log("============================"+req.body);

    try {
        var response = {}
        // console.log("in ctrl===========>",req);
        // var obj={userId:req.body}
        noteService.getNotes(req, (err, result) => {


            if (err) {
                response.status = false;
                response.error = errors;
                response.message = "not able to get notes"
                return res.status(500).send(response);
            }
            else {
                response.status = true;
                response.message = "List of notes";
                response.data = result;
                res.status(200).send(response);
            }
        })
    } catch (error) {

    }
}