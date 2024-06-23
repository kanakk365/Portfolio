let timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function circleShape() {
  xscale = 1;
  yscale = 1;

  xprev = 0;
  yprev = 0;
  window.addEventListener("mousemove", (event) => {
    clearTimeout(timeout);
    xdiff = event.clientX - xprev;
    ydiff = event.clientY - yprev;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprev = event.clientX;
    yprev = event.clientY;

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(() => {
      document.querySelector(
        ".minicircle"
      ).style.transform = `translate(${event.clientX}px,${event.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function firstPageAnim() {
  let tl = gsap.timeline();

  tl.from(".navbar", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingElem-1", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".firstpageFooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", (event) => {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${event.clientX}px,${event.clientY}px) scale(${xscale},${yscale})`;
  });
}

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      
        
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
    
    
  });

  document.querySelectorAll(".elem").forEach((elem) => {
    elem.addEventListener("mouseover", (event) => {
        const h1 = elem.querySelector("h1");
        const h5 = elem.querySelector("h5");
        if (h1) {
            h1.style.opacity = "0.3";
            h1.style.paddingLeft = "3vw";
        }
        if (h5) {
            h5.style.opacity = "0.3";
        }
    });
    elem.addEventListener("mouseleave", (event) => {
        const h1 = elem.querySelector("h1");
        const h5 = elem.querySelector("h5");
        if (h1) {
            h1.style.opacity = "0.65";
            h1.style.paddingLeft = "0";
        }
        if (h5) {
            h5.style.opacity = "1";
        }
    });
});
circleShape();
firstPageAnim();
