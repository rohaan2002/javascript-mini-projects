const item = document.getElementById("item")
const todoBox = document.getElementById("to-do-list")
const mainbox= document.getElementById("box")
let cnt=0;


const addToDo=(content)=>{
    // cross.addEventListener
        const listItem= document.createElement("li")
        
        // const line= document.createElement("br")
        listItem.innerHTML=`${content}<i class="fas fa-times"></i>` 
        todoBox.appendChild(listItem)
        cnt+=1;

        // HOW DO EVENT LISTNER GETS TRIGGERED WHEN ITS INSIDE addToDo and addToDo is only called when "keyup" is dono on input(i.e, "item")  
        // todoBox.appendChild(line)
        // todoBox.appendChild(line)
        listItem.addEventListener(
            "click",
            function(){
                this.classList.toggle("done")
            }
        )




        listItem.querySelector("i").addEventListener(
            "click",
            function(){
                listItem.remove();
            }
        )
}

item.addEventListener(
    "keyup",
    function(event){
        console.log(event);
        if(event.key=="Enter"){
            console.log(this.value)  // 'this' refers to the "item"
            const cross= document.querySelectorAll("fas fa-times")
      
            addToDo(this.value);
            this.value=""

        }
    }
)

// if(cnt==0){
//     todoBox.innerHTML=`<h1 id="cool">Add the To-Do items by writing and pressing Enter !</h1>`
// }
// else{
//     getElementById("cool").remove
    
// }
