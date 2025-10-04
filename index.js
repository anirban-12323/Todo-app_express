const express=require("express")
const app=express()
app.use(express.json())

let todos=[

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

app.delete("/todos/:id",(req,res)=>{
  // console.log(req.body)
  try {
    // console.log(req.params.id)
    
    todos.splice(Number(req.params.id) + 1,1)
    return res.status(200).json({message:"Todo delete successfully"})
    
  } catch (error) {
    return res.status(500).json({"message":"Please try again"})
    
  }
})


app.listen(3000,()=>{
  console.log("server started")
})