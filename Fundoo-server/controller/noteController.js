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
    console.log("coming from frontend");

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


exports.isArchived = (req, res) => {
    // console.log("controller",req);

    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        // req.checkBody('archive', 'archive required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            archive = req.body.archive;
            // console.log(archive)
            noteService.isArchived(noteID, archive, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}


exports.isTrashed = (req, res) => {
    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            trash = req.body.trash;

            noteService.isTrashed(noteID, trash, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}

exports.deletNote = (req, res) => {
    try {
        console.log("*****came to ctrl**")
        req.checkBody("noteID", "noteID is required").not().isEmpty();
        var errors = req.validationErrors();
        var response = {}
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response)
        } else {
            var responseResult = {};
            noteID = req.body.noteID;     
            noteService.deleteNote(noteID, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult)
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}