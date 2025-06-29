let post =document.getElementById("post")
let inputpost =document.getElementById("inputpost")
let postbtn =document.getElementById("postbtn")


postbtn.addEventListener("click",()=>{
    let text =inputpost.value;
    let para =document.createElement("p")
    para.innerHTML=text;
    post.appendChild(para)
    inputpost.value="";
})

let dtext =document.getElementById("dtext")
let dinput =document.getElementById("dinput")
let dbtn =document.getElementById("dbtn")

dinput.addEventListener("keyup",()=>{
    if (dinput.value=="Delete") {
        dbtn.removeAttribute("disabled")
    }
    else{
        dbtn.setAttribute("disabled",true)
    }
}) 
dbtn.addEventListener("click",()=>{
   dtext.style.display="none";
   post.style.display="none";
   inputpost.style.display="none";
   postbtn.style.display="none";
   dinput.value="";
})
