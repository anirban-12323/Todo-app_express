const express=require("express")
const fs=require("fs")
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
  //  const{title,description}=req.body
  // // console.log(req.body)
  //  
  //  
  fs.readFile(__dirname+"/todos.json",{encoding:"utf-8"},(error,todos)=>{
    todos=todos?JSON.parse(todos):[]
    todos.push({...req.body,isChecked:false,id:todos.length + 1})
    fs.writeFile(__dirname+"/todos.json",JSON.stringify(todos),{encoding:"utf-8"},(err)=>{
      if(err){
        return res.status(500).json({"message":"Please try again"})
    
      }else{
        return res.status(200).json({message:"todo added/created successfully"})

      }
    })


  })
  } catch (error) {
    return res.status(500).json({"message":"Please try again"})
    
  }
})



app.get("/todos",(req,res)=>{
  try {
    fs.readFile(__dirname+"/todos.json",{encoding:"utf-8"},(error,todos)=>{
      todos=todos?JSON.parse(todos):[]

      return  res.status(200).json({todos})
    })
    
  } catch (error) {
    return res.status(500).json({"message":"Please try again"})
  }
  
})




app.delete("/todos/:id",(req,res)=>{
  try {
    fs.readFile(__dirname+"/todos.json",{encoding:"utf-8"},(error,todos)=>{
    todos=todos?JSON.parse(todos):[]
    const id=Number(req.params.id)
     todos=todos.filter(todo=>todo.id!==id)
    fs.writeFile(__dirname+"/todos.json",JSON.stringify(todos),{encoding:"utf-8"},(err)=>{
      if(err){
        return res.status(500).json({"message":"Please try again"})
    
      }else{
         return res.status(200).json({message:"Todo deleted successfullly"})

      }
    })


  })
    
   
    
  } catch (error) {
    return res.status(500).json({message:"Please try again"})
    
  }
})

app.put("/todos/:id",(req,res)=>{
  try {
     fs.readFile(__dirname+"/todos.json",{encoding:"utf-8"},(error,todos)=>{
    todos=todos?JSON.parse(todos):[]
    const index=todos.findIndex(todo=>todo.id==req.params.id)
    todos[index]={...todos[index],...req.body}
    
    fs.writeFile(__dirname+"/todos.json",JSON.stringify(todos),{encoding:"utf-8"},(err)=>{
      if(err){
        return res.status(500).json({"message":"Please try again"})
    
      }else{
         return res.status(200).json({message:"Todo update successfully"})

      }
    })


  })
    
    
   
    
  } catch (error) {
    return res.status(500).json({message:"Please try again"})
    
  }
})


app.listen(3000,()=>{
  console.log("server started")
})