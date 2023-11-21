var lista_chat_output=document.querySelector(".lista-chat-output");
var txt_comentario=document.querySelector("#txt_comentario");

function Enviar(){
    if(txt_comentario.value.trim()!=""){
        lista_chat_output.innerHTML+='<div class="chat-output">'+
                                '   <div class="chat-output-foto-cont">'+
                                '       <img src="assets/images/perfil.png" alt="" srcset=""/>'+
                                '   </div>'+
                                '   <div class="chat-output-info">'+
                                '       <h3>@Jeremy Doku ⭐⭐⭐⭐⭐</h3>'+
                                '       <div class="chat-cont-txt">'+
                                '       <p>'+txt_comentario.value+' </p>'+
                                '   </div>'+
                                '</div>'
                                ;
    }
}
