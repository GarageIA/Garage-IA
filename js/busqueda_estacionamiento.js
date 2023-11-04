let btn_escanear=document.getElementById("btn_escanear");
let list_resul=document.getElementById("list_resul");


btn_escanear.addEventListener("click",(e)=>{
    list_resul.style.display="block";

    e.preventDefault();
    list_resul.scrollIntoView({
        behavior:"smooth"
    });
});
