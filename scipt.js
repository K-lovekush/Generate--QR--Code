let QR_text=document.querySelector(".QR-text");
let QR_code=document.querySelector(".QR-code");
let btn=document.querySelector("button");
let QR_image=document.querySelector(".QR-image");
let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
btn.addEventListener("click",function(){
    if(QR_text.value!=""){
         qr();
    }
    else{
        alert("Enter something");
    }
  
    })

function qr(){
    QR_code.classList.add("..QR-code1");
    QR_image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QR_text.value;
    
}