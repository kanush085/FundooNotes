const noteModel = require('../model/noteModel');
/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
exports.createNote = (data, callback) => {
    console.log("In service=====>");

    noteModel.addNotes(data, (err, result) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            // console.log("In service", result);
            return callback(null, result);
        }
    });
}

exports.getNotes = (data, callback) => {
    console.log("In service=====>");
    noteModel.getNotes(data, (err, result) => {
        // console.log("dddddddddddddddddddd",data);

        if (err) {
            console.log("service error");
            return callback(err);
        }
        else {
            return callback(null, result);
        }
    })
}