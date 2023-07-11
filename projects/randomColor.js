const getColor=()=>{
    const nxtColor= `rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)})`
    console.log(nxtColor)
    // document.body.style.backgroundColor=randColor
    document.body.style.backgroundColor=nxtColor

    document.getElementById("name").innerText=nxtColor
    
}
console.log(document.querySelector("info"))

document.getElementById("btn").addEventListener("click",
getColor
)

//initial call so that a color is already there in the bg instead of being white
getColor();

