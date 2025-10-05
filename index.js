const express=require("express")
const app=express()
app.use(express.json())

let todos=[
  {
    "title":"1",
    "description":"1",
    "isChecked":false,
    "id":1
  },
   {
    "title":"2",
    "description":"2",
    "isChecked":false,
    "id":2
  },
   {
    "title":"3",
    "description":"3",
    "isChecked":true,
    "id":3
  },
   {
    "title":"4",
    "description":"4",
    "isChecked":false,
    "id":4
  }

]

app.post("/todos",(req,res)=>{
  try {
   const{title,description}=req.body
   todos.push({...req.body,isChecked:false,id:todos.length + 1})
   return res.status(200).json({message:"todo added/created successfully"})
  } catch (error) {
    return res.status(500).json({"message":"Please try again"})
    
  }
})



app.get("/todos",(req,res)=>{
  try {
    return res.status(200).json({todos})
    
  } catch (error) {
    return res.status(500).json({"message":"Please try again"})
  }
  
})

// app.get("/",(req,res)=>{
//   res.status(200).json({"message":"kya hal hei vai ke"})
// })

// app.delete("/todos/:id",(req,res)=>{
//   // console.log(req.body)
//   try {
//     // console.log(req.params.id)
    
//     todos.splice(Number(req.params.id) + 1,1)
//     return res.status(200).json({message:"Todo delete successfully"})
    
//   } catch (error) {
//     return res.status(500).json({"message":"Please try again"})
    
//   }
// })

app.delete("/todos/:id",(req,res)=>{
  try {
    const id=Number(req.params.id)
     todos=todos.filter(todo=>todo.id!==id)
    return res.status(200).json({message:"Todo deleted successfullly"})
    
  } catch (error) {
    return res.status(500).json({message:"Please try again"})
    
  }
})


app.listen(3000,()=>{
  console.log("server started")
})