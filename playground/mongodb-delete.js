const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{

        if(err){
           return console.log("unable connect to MongoDB")
           //return gozashtim ke dige age error dasht chizi barnagrdone 
        }
        console.log("Connected to MongoDB")
        const db = client.db('TodoApp');
            // db.collection('Todo').deleteMany({Text:'Eat lunch'}).then((result,err)=>{
            //     console.log(result)
            // }).catch(err=>{
            //     console.log('not found',err)
            // })
            // db.collection('Todo').deleteOne({Text:'Eat Lunch'}).then((result,err)=>{
            //     console.log(result)
            // }).catch(err=>{
            //     console.log('not found',err)
            // })
            // db.collection('Todo').findOneAndDelete({completed:false}).then((result)=>{
            //     console.log(result)
            // }).catch(err=>{
            //     console.log('not found',err)
            // })

            // db.collection('Users').deleteMany({name:'Alireza'}).then((result)=>{
            //     console.log(result)
            // }).catch(err=>{
            //     console.log('not found',err)
            // })
            
            db.collection('Users').findOneAndDelete({_id :new ObjectID("5bd49e3b5648423559a64717")}).then((result)=>{
                console.log(result)
            }).catch(err=>{
                console.log('not found',err)
            })
            
        
         client.close();

})    