
let translate=0
let x = 0

function right(){
    if(translate < 300){
        translate += 100
        document.querySelector(".sliderimg").style.transform = `translateX(${-translate}%)`
        document.querySelector(".sliderimg").style.transition=" all 1s"
    }
    
    if(translate>=300){
        translate-=300
        document.querySelector(".sliderimg").style.transform = `translateX(${-translate}%)`
        document.querySelector(".sliderimg").style.transition=" all 0.5s"
    }
    console.log(translate)
}
function left(){
    if(translate > 0){
        translate -= 100
        
        document.querySelector(".sliderimg").style.transform = `translateX(${-translate}%)`
        document.querySelector(".sliderimg").style.transition=" all 1s"
        
    }
    x+=1
    
    if(translate == 0 && x == 1){
        translate+=200
        document.querySelector(".sliderimg").style.transform = `translateX(${-translate}%)`
        document.querySelector(".sliderimg").style.transition=" all 0.5s"
        x = 0
        console.log("z")
        console.log("x")
    }
    
    if(x == 3 && translate == 0){
        translate+=200
        document.querySelector(".sliderimg").style.transform = `translateX(${-translate}%)`
        document.querySelector(".sliderimg").style.transition=" all 0.5s"
        x = 0
        console.log("z")
        console.log("x")
    }
    console.log(translate)
    
}

function rightbtn1(){
    
    document.querySelector(".electronicsimg").style.transform = `translateX(-470px)`
    document.querySelector(".electronicsimg").style.transition=" all 0.5s"
    document.getElementById("rightbtn1").style.display = "none"
    document.getElementById("leftbtn1").style.display = "inline"
}
function leftbtn1(){

document.querySelector(".electronicsimg").style.transform = `translateX(0px)`
document.querySelector(".electronicsimg").style.transition=" all 0.5s"
document.getElementById("leftbtn1").style.display = "none"
document.getElementById("rightbtn1").style.display = "inline"
}
function rightbtn2(){
    
    document.querySelector(".beautyimg").style.transform = `translateX(-240px)`
    document.querySelector(".beautyimg").style.transition=" all 0.5s"
    document.getElementById("rightbtn2").style.display = "none"
    document.getElementById("leftbtn2").style.display = "inline"
}
function leftbtn2(){

    document.querySelector(".beautyimg").style.transform = `translateX(0px)`
    document.querySelector(".beautyimg").style.transition=" all 0.5s"
    document.getElementById("leftbtn2").style.display = "none"
    document.getElementById("rightbtn2").style.display = "inline"
    }
    function rightbtn3(){
    
        document.querySelector(".sportimg").style.transform = `translateX(-240px)`
        document.querySelector(".sportimg").style.transition=" all 0.5s"
        document.getElementById("rightbtn3").style.display = "none"
        document.getElementById("leftbtn3").style.display = "inline"
    }
    function leftbtn3(){
    
        document.querySelector(".sportimg").style.transform = `translateX(0px)`
        document.querySelector(".sportimg").style.transition=" all 0.5s"
        document.getElementById("leftbtn3").style.display = "none"
        document.getElementById("rightbtn3").style.display = "inline"
    }

let a = 0;
let b = 0;
function dotright() {
    if (a < 39) {
        a += 13;
        document.querySelector(".o1").style.transform = `translateX(${a}px)`;
        document.querySelector(".o1").style.transition = " all 1s";
    }

    if (a >= 39) {
        a -= 39;
        document.querySelector(".o1").style.transform = `translateX(${a}px)`;
        document.querySelector(".o1").style.transition = " all 0.5s";
    }
}
function dotleft() {
    if (a > 0) {
        a -= 13;

        document.querySelector(".o1").style.transform = `translateX(${a}px)`;
        document.querySelector(".o1").style.transition = " all 1s";
        
    }
    b += 1;
    if (a == 0 && b == 1) {
        a += 26;
        document.querySelector(".o1").style.transform = `translateX(${a}px)`;
        document.querySelector(".o1").style.transition = " all 0.5s";
        b = 0;
    }

    if (b == 3 && a == 0) {
        a += 26;
        document.querySelector(".o1").style.transform = `translateX(${a}px)`;
        document.querySelector(".o1").style.transition = " all 0.5s";
        b = 0;
    }

}
