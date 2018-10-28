

const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{

        if(err){
           return console.log("unable connect to MongoDB")
           //return gozashtim ke dige age error dasht chizi barnagrdone 
        }
        console.log("Connected to MongoDB")
        const db = client.db('TodoApp');
            // db.collection('Todo').findOneAndUpdate({
            //     _id:new ObjectID("5bd0de80455f3ebe3f28f869")
            // },{
            //     $set:{
            //         completed:false
            //     }
            // },{
            //     returnOriginal:false
            // }).then((result)=>{
            //     console.log(result);
            // })
            db.collection('Users').findOneAndUpdate({
                _id:new ObjectID("5bd49e285648423559a64715")
            },{
                $inc:{
                           //yek vahed be object ke dakhel onim ezafe mikone 
                       age:2
                }
            },{
                returnOriginal:false
            }).then((result)=>{
                console.log(JSON.stringify(result,undefined,2));
            })
         client.close();
        

})  