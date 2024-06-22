let timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleShape(){
xscale=1;
yscale=1;

xprev=0;
yprev=0;
window.addEventListener("mousemove", (event)=>{
    clearTimeout(timeout);
    xdiff=event.clientX-xprev;
    ydiff=event.clientY-yprev;

    xscale=gsap.utils.clamp(.8,1.2,xdiff);
    yscale=gsap.utils.clamp(.8,1.2,ydiff);
    
    xprev=event.clientX;
    yprev=event.clientY;

   
    circleMouseFollower(xscale,yscale);
    timeout =setTimeout(()=>{
        document.querySelector(".minicircle").style.transform=`translate(${event.clientX}px,${event.clientY}px) scale(1,1)`;
    },100)

})
}

function firstPageAnim(){
    let tl= gsap.timeline();

    tl.from(".navbar",{
        y:'-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut
    })
    .to(".boundingElem-1",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger: .2
    
    })
    .from(".firstpageFooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })

}
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", (event)=>{
        document.querySelector(".minicircle").style.transform=`translate(${event.clientX}px,${event.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleShape();
firstPageAnim();