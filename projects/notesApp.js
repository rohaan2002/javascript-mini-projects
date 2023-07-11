const addBtn= document.getElementById("addBtn")
const main= document.getElementById("main")
const del= document.querySelector(".d")
let numOfnotes=0
numOfnotes=localStorage.getItem("written").length
console.log(del)
addBtn.addEventListener(
    "click",
    ()=>{
        addNote()
        numOfnotes++;
        if(localStorage.getItem("numOfnotes")==1){
            location.reload()
        }
    }
)
// if(lsnotes)
if(localStorage.getItem("numOfnotes")==0){
    const initt=document.createElement("div")
    initt.innerHTML=`<h1 id="initt">Click on Add Note<br> to add Stickies!</h1><br><h3 id="mark">&#169 rohann</h3>;`
    main.appendChild(initt)
    // location.reload()
}



function addNote(text=""){

    const note=document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`<div class="tool">
    <div class="red"></div>
    <div class="green"></div>
    <i class="d fa-solid fa-trash"></i>
    <i class="s fa-sharp fa-regular fa-floppy-disk"></i>
   
</div>
<textarea name="" id="texter" >${text}</textarea>`;


note.querySelector(".d").addEventListener(
    "click",
    ()=>{
        note.remove()
        numOfnotes--;
        saveNote()
        if(localStorage.getItem("numOfnotes")==0){
            location.reload()
        }
    }
    )
    
    note.querySelector(".s").addEventListener(
        "click",
        ()=>{
            saveNote()
        }
        )
        main.appendChild(note);
        saveNote()

        // function(){

        // }
        
}


// function remove(){
//     const notee=document.querySelector(".note")
//     console.log(notee);
//     main.removeChild(notee)
//     // note.remove()
// }


function saveNote(){
    const written= document.querySelectorAll(".note textarea")
    console.log(written)
    const saved=[];
    written.forEach(
    (written)=>{
        saved.push(written.value)
    }
    )
    console.log(saved)
    localStorage.setItem("numOfnotes",written.length)
    
    localStorage.setItem("written",JSON.stringify(saved))
}

// this function below is a SELF CALLING FUNCTION.. this one helps to print the saved data in the number of boxes which was already there before saving with the same data
(
    function (){
    // console.log("hey")
        lsnotes= JSON.parse(localStorage.getItem("written"))
        lsnotes.forEach(
            (lsnotes)=>{
                addNote(lsnotes);
            }
        )
        // if(lsnotes.length==0){
        //     localStorage.removeItem("written")
        // }
        // else{
        //     addNote();
        // }
      }

)
()