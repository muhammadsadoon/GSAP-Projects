import './style.css'
// import "./counter"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline({});

// tl.to(".container", { top: "120%", left: "40%", height: "200px", scrollTrigger: { trigger: ".page1", start: "10%", end: "100%", scrub: 3,markers:true, } });
// tl.to(".container", { top: "230%", borderRadius: "50%", left: "60%", height: "50%", scrollTrigger: { trigger: ".page2", start: "0%", end: "100%", scrub: 3,markers:true, } },"+=1");
// tl.to(".container", {top:"500%",left:"30%",rotate:"180deg",scrollTrigger:{trigger:".page5",scrub:3,markers:true}}, ">2")


// let lt2 = gsap.timeline();

// lt2.to(".box",{
//     keyframes:{
//         x:[0,100,100,0],
//         y:[0,0,100,100]
//     },
//     rotate: 180,
//     stagger:0.2,
//     ease: "elastic",
//     duration:4
// })

let tl = gsap.timeline();

tl.from(".text-scroll",{left:"100%",top:"20%",rotate:"-7deg",scrollTrigger:{trigger: ".page4",start:"0%",end: "100%",pin:true,scrub:5}})