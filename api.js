/*
let url = "https://catfact.ninja/fact"
fetch(url)
.then((Response)=>{
    console.log(Response)
   return Response.json();
})
.then((data)=>{
    console.log("data1= ",data.fact)
    return fetch(url)
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log('data2= ',data.fact)
})

.catch((error)=>{
    console.log(error)
})


//////


let url="https://catfact.ninja/fact"

async function car(){
    try{  
   let fact= await fetch(url)
   let data=await fact.json();
   console.log(data.fact)

   let fact1= await fetch(url)
   let data1=await fact1.json();
   console.log(data1.fact)
}


catch(e){
  console.log("error-",e)
}
}

car()


let btn = document.querySelector("button")

btn.addEventListener('click',async ()=>{
    facts()
    let out = await facts()
    console.log(out)
    let p = document.querySelector("#word")
    p.innerHTML=out

})
let url = "https://catfact.ninja/fact"
async function facts(){
    try{
        let res = await axios.get(url)
        return res.data.fact
    }
    catch(error){
        console.log(error)
    }
}
facts()
*/
let url="https://icanhazdadjoke.com/"
 
async function fact(){
    const config={headers:{Accept:"application/json"}};
    let facts= await axios.get(url,config)
    console.log(facts.data.joke)
}
fact()