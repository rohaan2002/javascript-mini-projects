let submitter= document.getElementById('btn')
let result = document.getElementById('res')


const getLang = async(eng)=>{
    const url = `https://api.funtranslations.com/translate/minion.json?text=${eng}`
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        console.log(data.contents.translated);
        result.value= data.contents.translated
    }
    catch{
        document.getElementById('res').value= 'Check Your Internet⚠️'
    }
}
submitter.addEventListener("click",
(event)=>{
    let textval= document.getElementById('texter').value
    getLang(textval);
    // event.preventDefault();
    // console.log('hi')
    // console.log(textval)
    // result.value=textval;

})