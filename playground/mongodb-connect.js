const {MongoClient,ObjectID}=require('mongodb')

// var user={name:'Alireza',age:28}
// var {name}=user //در اکما اسکریپ شش ما می توانیم به پروپرتی  نیم از ابجکت یوزر دسترسی پیدا کنیم
// console.log(name); 

//CRUD
//Create ->Insert : Insert data to database
//Read ->Fetch (or (find)) :fetch data from database
//Update -> Update :update data from database
//Delete -> Delete :Delete data from database




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{

        if(err){
           return console.log("unable connect to MongoDB")
           //return gozashtim ke dige age error dasht chizi barnagrdone 
        }
        console.log("Connected to MongoDB")
        const db = client.db('TodoApp');
        // db.collection('Todo').insertOne({
        //     text:"somthing to do ",
        //     completed:false,
        // },(err,result)=>{
        //     if(err){
        //         return console.log('Unable to insert todo ',err)
        //     }
        //     console.log(JSON.stringify(result.ops,undefined,2))
        // })
        //result.ops :baes mishe hame data to khroji namayesh bede
        db.collection('Users').insertOne({
            name:"Alireza",
            age:28,
            location:'Tehran'
        },(err,result)=>{
            if(err){
                return console.log('Unable to insert Users ',err)
            }
            console.log(result.ops[0]._id.getTimestamp())
            //baraye inke bebinim key method ijad shode 
        })
        client.close();

})  