// ========================DARK MODE    AND PAGE SETTING 
// ARROW IN SIDE LEFT
const bdy=document.getElementById('body')
const sun=document.getElementById('btn-daark')
const moon=document.getElementById('moon')
sun.onclick=function(){
    if(bdy.classList.contains('body')){
        bdy.classList='dark-mode';
    }
    else{
        bdy.classList='body';
    }
}
document.querySelector(".btn-daark").addEventListener("click", () => {
    document.querySelector(".btnf").classList.toggle("btnf-show");
});
document.querySelector("#row-setting").addEventListener("click", () => {
    document.querySelector(".setting-box").classList.toggle("boxx-show");
    document.querySelector(".fa-caret-right").classList.toggle("caret-show");

});
// ========================
//WHEN CLICK BTN ABOUT ME 
document.querySelector(".btn2").addEventListener("click", () => {
    aboutBTN.style.zIndex="5"
    aboutBTN.style.opacity="1"
});
document.querySelector("#aboutBTN").addEventListener("click", () => {
    aboutBTN.style.zIndex=""
    aboutBTN.style.opacity=""
});
// WHEN CLICK BTNS IN OFFER PAGE
const product=document.getElementById('product')
document.querySelector("#p1").addEventListener("click", () => {
    product.style.zIndex="5"
    product.style.opacity="1"
});
document.querySelector("#close2").addEventListener("click", () => {
    product.style.zIndex=""
    product.style.opacity=""
});
document.querySelector("#p2").addEventListener("click", () => {
    visual.style.zIndex="5"
    visual.style.opacity="1"
});
document.querySelector("#close3").addEventListener("click", () => {
    visual.style.zIndex=""
    visual.style.opacity=""
});
document.querySelector("#p3").addEventListener("click", () => {
    ui.style.zIndex="5"
    ui.style.opacity="1"
});
document.querySelector("#close4").addEventListener("click", () => {
    ui.style.zIndex=""
    ui.style.opacity=""
});
document.querySelector("#btnWork").addEventListener("click", () => {
    moreWorks.style.zIndex="5"
    moreWorks.style.opacity="1"
});
document.querySelector("#close5").addEventListener("click", () => {
    moreWorks.style.zIndex=""
    moreWorks.style.opacity=""
});
// WHEN SCROLL WHAT HAPPEN
// 1 - HEADER
const header=document.getElementById('header')
const up=document.getElementById('up')

window.onscroll=function(){
    if(scrollY>=330){
        header.style.position="static"
        up.style.display="block"
    }
    else{
        header.style.position=""
        up.style.display=""
    }
}
// ========WHEN CLICK ICON BAR SHOW THE BAR =============================
const bar=document.getElementById("bar-icon")
const closeBar=document.getElementById("close-bar")
document.querySelector("#bar-icon").addEventListener("click", () => {
    document.querySelector(".bar").classList.toggle("bar-show");
    document.querySelector(".close-bar").classList.toggle("close-bar-show");
    bar.style.display="none"
});
document.querySelector("#close-bar").addEventListener("click", () => {
    document.querySelector(".bar").classList.toggle("bar-show");
    document.querySelector(".close-bar").classList.toggle("close-bar-show");
    bar.style.display=""
});
// ========================================================
let i=1;
const mo=document.getElementById('auto');
const autowrite=()=>{
    const title="Mohamed ShalaSh                                 "
    mo.innerText=title.slice(0,i);
    i++;
    if(title.length<i){
        i=1;
    }
};
const stop=setInterval(autowrite,500)
// mssg when hover music
const audio=document.getElementById('audio')
const audioP=document.getElementById('audioo')
audio.addEventListener("mouseover",()=>{
    audioP.style.display="block"
})
audio.addEventListener("mouseout",()=>{
    audioP.style.display=""
})
// are u bot___________
const orange=document.getElementById('orange')
const banana=document.getElementById('banana')
const apple=document.getElementById('apple')
const farwla=document.getElementById('farwla')
const secondPage=document.getElementById('secondPage')
const msg=document.getElementById('msg')

orange.addEventListener("click",()=>{
    orange.style.boxShadow="0 0px 40px red"
    orange.style.border="2px solid red"
    msg.innerHTML="error !"
    msg.style.color="red"
    apple.style="none"
    secondPage.style.display=""
})
banana.addEventListener("click",()=>{
    banana.style.boxShadow="0 0px 40px red"
    banana.style.border="2px solid red"
    msg.innerHTML="error !"
    msg.style.color="red"
    apple.style="none"
    secondPage.style.display=""
})
farwla.addEventListener("click",()=>{
    farwla.style.boxShadow="0 0px 40px red"
    farwla.style.border="2px solid red"
    msg.innerHTML="error !"
    msg.style.color="red"
    apple.style="none"
    secondPage.style.display=""
})
apple.addEventListener("click",()=>{
    apple.style.boxShadow="0 0px 40px green"
    apple.style.border="2px solid green"
    msg.innerHTML="done "
    msg.style.color="rgb(60, 170, 60)"
    orange.style="none"
    farwla.style="none"
    banana.style="none"
    secondPage.style.display="block"
})
// btn when click open page bot
document.querySelector("#tobot").addEventListener("click", () => {
    bot.style.display="block"
});
document.querySelector("#close6").addEventListener("click", () => {
    bot.style.display=""
});
//when hover in div slide
slide.addEventListener("mouseover",()=>{
    Rarrow.style.display="block"
    Larrow.style.display="block"
})
slide.addEventListener("mouseout",()=>{
    Rarrow.style.display=""
    Larrow.style.display=""
})

// ============================================================================================================================
