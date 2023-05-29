const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    options : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Options'
        }
    ]
},{
    timestamps : true
});

const Question = mongoose.model('Question',QuestionSchema);

module.exports  = Question;