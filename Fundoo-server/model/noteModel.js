const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var noteSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, "User_id required"],
        // ref: 'Note'
    }, 
    title: {
        type: String,
        required: [true, "Title required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    reminder: {
        type: String
    },
    color: {
        type: String,
    },
    image: {
        type: String
    },
    archive: {
        type: Boolean
    },
    pinned: {
        type: Boolean
    },
    trash: {
        type: Boolean
    },
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
    // let object={
    //     "title":objectNote.title,
    //     "description":objectNote.description
    // }
    const noteModel = new note(objectNote.body);
     console.log("data==================>", objectNote.body);
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



/**
 * @description:it will get the notes using userId and find the notes with data
 * @param {*request from frontend} id 
 * @param {*response to backend} callback 
 */
noteModel.prototype.getNotes = (id, callback) => {
    // console.log("---------------------",id.decoded.payload.user_id);
    // console.log(id);
    
    note.find({
        userId:id.decoded.payload.user_id

    },(err, result) => {
        
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    })
}
module.exports = new noteModel();
