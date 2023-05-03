
var navrightbutton = document.querySelector("#navright button")
var navrightbuttonh4 = document.querySelector("#navright button h4")
var ho = document.querySelector("#ho")
navrightbutton.addEventListener("mousemove",function(){
    ho.style.height = "100%"
    // navrightbutton.style.backgroundColor = "black"
    navrightbuttonh4.style.color = "white"
})
navrightbutton.addEventListener("mouseleave",function(){
    ho.style.height = "0%"
    // navrightbutton.style.backgroundColor = "yellow"
    navrightbuttonh4.style.color = "black"

})
var box3button = document.querySelector("#box3 button")
var box3buttonh4 = document.querySelector("#box3 button h4")
var ho1 = document.querySelector("#ho1")
box3button.addEventListener("mousemove",function(){
    ho1.style.height = "100%"
    box3buttonh4.style.color = "black"
})
box3button.addEventListener("mouseleave",function(){
    ho1.style.height = "0%"
    box3buttonh4.style.color = "white"

})

// document.querySelectorAll("#b9righta")
// .forEach(function(toy){
//     toy.addEventListener("mouseover",function(){
//         document.querySelector("#ho2").style.height = "100%"
//         document.querySelector("#b9righta h1").style.color = "black"
//     })
//     toy.addEventListener("mouseleave",function(){
//         document.querySelector("#ho2").style.height = "0%"
//         document.querySelector("#b9righta h1").style.color = "white"
    
//     })
// })




var circle = document.querySelector("#circle1")
var video1 = document.querySelector("#video1 video")
video1.addEventListener("mousemove",function(dets){
    circle.style.scale = 1
    circle.style.opacity = 1
    video1.style.cursor = "none"
    circle.style.left = `${dets.clientX}px`
    circle.style.top = `${dets.clientY}px`
})
video1.addEventListener("mouseleave",function(dets){
    circle.style.scale = 0
    circle.style.opacity = 0

})


var box5a = document.querySelector("#box5a")
var box5ah1 = document.querySelector("#box5a h1")
var arowcircle = document.querySelector("#arowcircle i")
var lo = document.querySelector("#lo")
var v1 = document.querySelector("#v1")
box5a.addEventListener("mousemove",function(){
    lo.style.width = "100%"
    v1.style.width = "100%"
    arowcircle.style.rotate = "-30deg"
    box5ah1.style.color = "black"
})
box5a.addEventListener("mouseleave",function(){
    lo.style.width = "0%"
    v1.style.width = "0%"
    arowcircle.style.rotate = "0deg"
    box5ah1.style.color = "white"

})
var box5b = document.querySelector("#box5b")
var box5bh1 = document.querySelector("#box5b h1")
var arowcircle1 = document.querySelector("#arowcircle1 i")
var lo1 = document.querySelector("#lo1")
var v2 = document.querySelector("#v2")
box5b.addEventListener("mousemove",function(){
    lo1.style.width = "100%"
    v2.style.width = "100%"
    arowcircle1.style.rotate = "-30deg"
    box5bh1.style.color = "black"
})
box5b.addEventListener("mouseleave",function(){
    lo1.style.width = "0%"
    v2.style.width = "0%"
    arowcircle1.style.rotate = "0deg"
    box5bh1.style.color = "white"

})
var box5c = document.querySelector("#box5c")
var box5ch1 = document.querySelector("#box5c h1")
var arowcircle2 = document.querySelector("#arowcircle2 i")
var lo2 = document.querySelector("#lo2")
var v3 = document.querySelector("#v3")
box5c.addEventListener("mousemove",function(){
    lo2.style.width = "100%"
    v3.style.width = "100%"
    arowcircle2.style.rotate = "-30deg"
    box5ch1.style.color = "black"
})
box5c.addEventListener("mouseleave",function(){
    lo2.style.width = "0%"
    v3.style.width = "0%"
    arowcircle2.style.rotate = "0deg"
    box5ch1.style.color = "white"

})

var circle2 = document.querySelector("#circle2")
var box7 = document.querySelector("#box7")
box7.addEventListener("mousemove",function(dets){
    circle2.style.scale = 1
    circle2.style.opacity = 1
    box7.style.cursor = "none"
    circle2.style.left = `${dets.clientX}px`
    circle2.style.top = `${dets.clientY}px`
})
box7.addEventListener("mouseleave",function(dets){
    circle2.style.scale = 0
    circle2.style.opacity = 0

})

gsap.to("#scrollimg",{
    scrollTrigger:{
        trigger:"#scrollpage",
        start:"top top",
        scrub:4,
        // markers:true,
        pin:true
    },
    y:"-200%"
    })
    
    document.querySelectorAll("#scrollimg img")
    .forEach(function(elem){
        elem.addEventListener("mouseover",function(){
            document.querySelector("#scrollpage h1").style.filter = `blur(5px)`
            document.querySelector("#scrollpage h1").style.opacity = .1
            
        })
        elem.addEventListener("mouseleave",function(){
            document.querySelector("#scrollpage h1 ").style.filter = `blur(0px)`
            document.querySelector("#scrollpage h1").style.opacity = 1

        })
    })






var hula = 0
document.querySelector("#circle").addEventListener("click",function(){
    if(hula==0){
        gsap.fromTo("#pic,#b9righta",{
            opacity:0,
            y:"-10%"
        },{
            opacity:1,
            y:"0%",
            duration:1,
            stagger:.1,
            delay:.1
        })
    document.querySelector("#menu").style.transform="translatey(0%)"
    document.querySelector("#menu").style.opacity=1
    document.querySelector("#rocket").style.transform="translatey(0%)"
    document.querySelector("#rocket").style.opacity=1
    
    hula=1

    }else{
    document.querySelector("#menu").style.transform="translatey(-50%)"
    document.querySelector("#menu").style.opacity=0
    document.querySelector("#rocket").style.transform="translatey(-100%)"
    document.querySelector("#rocket").style.opacity=0



    hula=0


    }
})




gsap.fromTo("#box h1,#box h6,#nav,#line,#video1,#sup",{
    opacity:0,
    y:"10%"

},{
    opacity:1,
    y:"0",
    delay:1,
    duration:1,
    stagger:.2
})

var bo = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        start:"top 40%",
        end:"top 30%",
        scrub:4,
        // pin:true,
        // markers:true
    }
})

bo.fromTo("#box2content h1",{
    y:"50%",
    opacity:0
},{
    y:"0%",
    duration:1,
    opacity:1
})

var co = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2content2",
        start:"top 90%",
        end:"top 90%",
        scrub:4,
        // pin:true,
        // markers:true
    }
})
co.fromTo("#box2content2 h1",{
    y:"50%",
    opacity:0
},{
    y:"0%",
    duration:1,
    opacity:1
})
co.fromTo("#line2",{
    width:"0%"
},{
    width:"85%"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box3",
        start:"top 70%",
        end:"top 70%",
        scrub:4,
        // pin:true,
        // markers:true
    }
})

tl3.fromTo("#box3 h1",{
    y:"50%",
    opacity:0
},{
    y:"0%",
    stagger:1,
    // duration:1,
    opacity:1
})

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box5",
        start:"top 70%",
        end:"top 70%",
        scrub:4,
        // pin:true,
        // markers:true
    }
})
tl4.fromTo("#box5",{
    opacity:0,
    width:"40%"
},{
    opacity:1,
    width:"100%",
})
var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        start:"top 30%",
        end:"top 30%",
        scrub:4,
        // pin:true,
        // markers:true
    }
})
tl5.fromTo("#box6 h1",{
    y:"20%",
    opacity:0
},{
    y:"0%",
    stagger:1,
    // duration:1,
    opacity:1
})

var time = gsap.timeline({
    scrollTrigger:{
        trigger:"#box8",
        start:"top ",
        scrub:4,
        backgroundColor:"black",
        // markers:true,
        pin:true,
    }
}
)
time.to("#allwork",{
    top:"0%",
})
time.to("#alw",{
    color:"black",
    backgroundColor:"yellow"
})
time.to("#box8,#box9",{
    backgroundColor:"black"
},"-=.1")
time.to("#box8",{
    color:"white"
},"-=.1")
time.to("#b8line",{
    backgroundColor:"white"
    
},"-=.1")
