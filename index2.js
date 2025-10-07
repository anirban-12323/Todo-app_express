//async function getTodo(){
//   let res=await fetch("http://localhost:3000/todos",{
//     method:"GET",
//     headers: {
//       "Content-Type": "application/json",  // ✅ this line is essential
//     },
//     body:JSON.stringify({
//       title:"from frontend",
//       desc:"desc"
//     })
//   })
//   let json=await res.json()
//   console.log(json)
// }
// getTodo()

async function getTodo(){
  let body={
    method:"GET",
    headers: {
      "Content-Type": "application/json",  // ✅ this line is essential
     }
  }
  let res=await fetch("http://localhost:3000/todos",body)
  let json=await res.json()
  console.log(json)
  
}
getTodo()