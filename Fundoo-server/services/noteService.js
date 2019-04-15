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


exports.isArchived = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.isArchived(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}


exports.isTrashed = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.isTrashed(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}


exports.deleteNote = (noteID, callback) => {
    console.log("came to delete note service");
    noteModel.deleteNote(noteID, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })

}


exports.updateColor = (noteID, color, callback) => {
    console.log("came to updateColor note service");
    noteModel.updateColor(noteID, color, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })

}


exports.editTitle = (noteID, updateTitle, callback) => {
    console.log("came to editTitle note service");
    noteModel.editTitle(noteID, updateTitle, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })

}

exports.editDescription = (noteID, updateDescription, callback) => {
    console.log("came to editTitle note service");
    noteModel.editDescription(noteID, updateDescription, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })

}


exports.doPinned = (noteID, doPinned, callback) => {
    console.log("came to pinned note service");
    noteModel.doPinned(noteID, doPinned, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })

}

