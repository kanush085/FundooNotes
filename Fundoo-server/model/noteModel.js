const mongoose = require('mongoose');


var noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    }
}, {
        timestamps: true
    });
var note = mongoose.model('Note', noteSchema);
function noteModel() { }
/**
 * @description:it will add the notes data using note schema and save the data into the database
 * @param {*request from frontend} objectNote 
 * @param {*response to backend} callback 
 */
noteModel.prototype.addNotes = (objectNote, callback) => {
    // console.log("data====>", objectNote.body);
    let object={
        "title":objectNote.title,
        "description":objectNote.description
    }
    const noteModel = new note(object);
    //To save the data in dbs
    noteModel.save((err, result) => {
        if (err) {
            console.log("Model not found");
            callback(err);
        } else {
            console.log("Note added Successfully");
            callback(null, result);
        }
    })
}
module.exports = new noteModel();
