const questions=[
    {
    'que':'Which of these is a markup language?',
    'a':'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
    {
    'que':'Why do you miss her eyes?',
    'a':'I dont',
    'b':'Wont say',
    'c':'I saw myself in them',
    'd':'They meant the world to me',
    'correct':'d'
},
    {
    'que':'Why did she left you?',
    'a':'No reason at all',
    'b':'Past Trauma',
    'c':'You were not enough',
    'd':'All of the above',
    'correct':'c'
}
]

let index=0
const quesBox=document.getElementById("quesBox");
const optionFeed= document.querySelectorAll(".optionn")
const press= document.getElementById("btn")
let right=0;
let wrong=0;
const loadFunc=()=>{
    reset()
    const data = questions[index]
    quesBox.innerText=`${index+1})${data.que}`

    optionFeed[0].nextElementSibling.innerText=data.a

    optionFeed[1].nextElementSibling.innerText=data.b

    optionFeed[2].nextElementSibling.innerText=data.c

    optionFeed[3].nextElementSibling.innerText=data.d


    // if(index<questions.length){

    // 888888888888888888888888888888888
//     press.addEventListener("click", nextQue=()=>{
//         // if(index<questions.length){
//     //    console.log(index)
//     console.log(index)
//     index=index+1;
//     if(index<=questions.length){
//     console.log(index)
//     loadFunc()
//     if(getAns==questions[index].correct){
//         right=right+1
//     }
//     else{
//         wrong=wrong+1
//     }
//         }
//         else{
//             document.getElementById("box").innerHTML="<h2>Thanks for taking this Quiz!</h2><br>"
//             document.getElementById("box").innerText="Correct: "+right+" Wrong: "+wrong
//             return
//         }
//     // }
// }
// )
// 88888888888888888888888



    // const getAns=()=>{
    //     optionFeed.forEach(
    //         (input)=>{
    //             if(input.checked){
    //                 console.log(input.value)
    //                 return input.value
    //             }
    //         }
    //     )
    // }
}
const getAns = () => {
    for (let i = 0; i < optionFeed.length; i++) {
      const input = optionFeed[i];
      if (input.checked) {
        console.log(input.value);
        console.log(questions[index - 1].correct);
        return input.value;
      }
    }
    return undefined; // Return a default value in case no option is selected
  };

press.addEventListener("click", nextQue=()=>{
    // if(index<questions.length){
//    console.log(index)
console.log(index)
index=index+1;
// const ans=getAns()
if(index<=questions.length){
console.log(index)
if(getAns()==questions[index-1].correct){
    right=right+1
}
else{
    wrong=wrong+1
}
console.log("ans="+getAns()+"correct="+questions[index-1].correct)
if(index<questions.length){
loadFunc()
}
    }
    else{
        document.getElementById("box").innerHTML="<h2>Thanks for taking this Quiz!</h2><br>"
        document.getElementById("box").innerText="Correct: "+right+" Wrong: "+wrong
        return
    }
// }
}
)


// else{
//     index=index-1;
//     document.getElementById("box").innerHTML="Thanks for taking this Quiz!"
// }
// }

const reset=()=>{
    optionFeed.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
if(index==0){

    loadFunc()
}
