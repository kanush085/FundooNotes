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
            return  callback(null, result);
        }
    });
}