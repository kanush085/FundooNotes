
const noteModel=require('../model/noteModel')
exports.note = (data, callBack) => {
    userModel.note(data, (err, result) => {
        if (err) {
            console.log("service error");
            return callBack(err)

        }
        else {
            console.log("In service", result);
            return callBack(null, result);
        }
    })
}