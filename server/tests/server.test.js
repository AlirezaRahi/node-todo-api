const expect =require('expect')
const request=require('supertest')


const {app}=require('./../server')
const {Todo}=require('./../models/todo');
//این بیفور ایچ برای تمام 
beforeEach((done)=>{
    //قبل هر رکوئستی که سیستم میفرسته بیا پاک کن تمام جدول هایی که داره را سپس دان کن   
    Todo.deleteMany({}).then( () => done() )
})

describe("POST /todos",()=>{

    it("should a create a new todo",(done)=>{
        var text="Test todo text ";

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect((res.body.text)).toBe(text)
            })
            .end((err,res)=>{
                if(err){
                    return done(err)
                }
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1)
                    //مورد انتظار ما اینه وقتی  طولش یک درایه صفر دقیقا بربر میشه
                    // با تکستی که تو دیتا بیس که باید برابر شه با   
                   // اولین درایه و تنها داده ای که در جدول ما است
                    //حالا میگیم مقدار تکست این تنها داده باید برابر بشه با مقدار تکستی که بالا تعریف کردیم
                    expect(todos[0].text).toBe(text)
                    done()
                }).catch((err)=>done(err))
            })
    })
    it("should not create todo with invalid body data",(done)=>{
        //done hamishe baraye faaliyat haye ascy bayad bezarim 
        request(app)
            .post("/todos")
            .send({}) //هر چی که ارسال میشه 
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err)
                }
                //قرار بررسی بشه ادرس هایی که می زنه واقعا تو سیستم تودوز ما نباشه
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(0)
                    done()
                }).catch((err)=>done(err))
            })
    })
})