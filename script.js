const gene= document.querySelector(".gene")
const template=document.querySelector(".template")
const clonetemplate=template.content.cloneNode(true)
// console.log(clonetemplate)
const fragment=document.createDocumentFragment()  

document.addEventListener("DOMContentLoaded",()=>{
    info()
     
})


const info= async()=>{
    // console.log("casitas") 
    try {
        const data= await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const datas= await data.json();
        const num=alea(0,1154)
        const nombre=datas.results[num].name
        console.log(num)
        console.log(datas.results)
        console.log(nombre)
        // pintarima(datas.results)
        traer(nombre)
    } catch (error) {
        console.log(error)
    }   
}


const traer= async(nombre)=>{
    try {
        const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const resul= await data.json()
        console.log(resul)
        pintarima(resul)
    } catch (error) {
        console.log(error)
    }
}


function alea(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const pintarima=(resul)=>{
  clonetemplate.querySelector(".name").textContent=resul.name  
  if (resul.sprites.other.dream_world.front_default===null) {
    clonetemplate.querySelector(".ima").setAttribute("src",resul.sprites.front_shiny);
  } else {
    clonetemplate.querySelector(".ima").setAttribute("src",resul.sprites.other.dream_world.front_default);
  }
//   clonetemplate.querySelector(".ima").setAttribute("src",resul.sprites.other.dream_world.front_default);
  console.log(resul.sprites.other.dream_world.front_default)
  clonetemplate.querySelector(".perfil").textContent=resul.id+ " id"
  fragment.appendChild(clonetemplate)
  gene.appendChild(fragment)
 
}


