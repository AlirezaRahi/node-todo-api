const mongoose=require('mongoose')

var Todo=mongoose.model('Todo',{
    Text:{
            type:String,
            required:true,
            minLength:1,
            trim:true //space ha ro miyad barresi mikone  dar vaghe space ezafi saro tahesho bar midare 
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        //in hamon zamane zakhire sazi system
        default:null
    }
})
module.exports={Todo}