
const mongoose = require('mongoose');

const OptionsSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true,        
    },
    votes : {
        type : Number,
        required : true
    },
    link_to_vote : {
        type : String,        
        unique : true
    },
    question : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
    }    
},{
    timestamps : true
});

const Options = mongoose.model('Options',OptionsSchema);

module.exports  = Options;