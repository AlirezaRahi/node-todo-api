const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{

        if(err){
           return console.log("unable connect to MongoDB")
           //return gozashtim ke dige age error dasht chizi barnagrdone 
        }
        console.log("Connected to MongoDB")
        const db = client.db('TodoApp');
            // db.collection('Todo').find({_id:new ObjectID('5bd0a5aa92bf9911641998f0')}).toArray().then((docs)=>{
            //     console.log('Todo');
            //     console.log(JSON.stringify(docs,undefined,2))
            // },(err)=>{
            //     console.log('Unable fetch todos',err)
            // })

            // db.collection('Users').find().count().then((count)=>{
            //     console.log(`Users Count ${count}`);
            //     console.log(JSON.stringify(count,undefined,2))
            // },(err)=>{
            //     console.log('Unable fetch Users',err)
            // })

            //===================================================================
            // db.collection('Users').fin ().toArray().then((docs)=>{
            //         console.log('Users')
            //         console.log(JSON.stringify(docs,undefined,2))
            // },(err)=>{
            //     console.log('Unable to fetch users',err)
            // })
             //===================================================================

            db.collection('Users').find({name:'Sadaf'}).toArray().then((docs)=>{
                    console.log('Users')
                    console.log(JSON.stringify(docs,undefined,2))
                },(err)=>{
                    console.log('Unable to fetch users',err)
                })
        
         client.close();

})  