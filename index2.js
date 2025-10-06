async function addTodo(){
  let res=await fetch("http://localhost:3000/todos",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",  // ✅ this line is essential
    },
    body:JSON.stringify({
      title:"from frontend",
      desc:"desc"
    })
  })
  let json=await res.json()
  console.log(json)
}
addTodo()