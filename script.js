let app=document.querySelector("#app");
let btnDownload=document.querySelector("#btnDownload");
let quoteInput=document.querySelector("[name=quote]");
let quoteText=document.querySelector("#quote");
let btnBackground=document.querySelector("#btnBackground");
let authorInput=document.querySelector("[name=author]");
let authorText=document.querySelector("#author");

let colors = ["#FF0000","#FF7F50","#FF6347","#F0E68C","#32CD32","#ADFF2F","#E0FFFF","#AFEEEE","#66CDAA","#008080","#FFC0CB","#DB7093","#F5FFFA","#D3D3D3","#708090"]
btnBackground.addEventListener("click",function(e){
   let index=Math.floor(Math.random()*colors.length)
   let randomColor=colors[index];
   app.style.background =randomColor;
})

quoteInput.addEventListener("keyup",function(e){
    quoteText.innerText=e.currentTarget.value;
})
authorInput.addEventListener("keyup",function(e){
    authorText.innerText=e.currentTarget.value;
})

btnDownload.addEventListener("click",function(){
    html2canvas(app).then(canvas => {
    let a =document.createElement("a");
    a.download=Math.floor(Math.random()*5000) +".png";
    a.href=canvas.toDataURL();
    a.click();
    });
})

