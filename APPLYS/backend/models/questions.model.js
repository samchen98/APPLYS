const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const surveySchema = new Schema({
    id:{type: Number},
    question:{type:String},
    answers: {type: Array},
    correctanswer: {type: Number},
    feedback: {type: String},
});


const Question = mongoose.model('Question', surveySchema);

module.exports = Question;