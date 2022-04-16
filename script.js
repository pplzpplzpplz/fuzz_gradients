gsap.fromTo("#imgblue", 
  {
    rotation: 0,
    opacity: .6
  },
  {
    rotation: 360, 
    opacity: 1,
    // transformOrigin: "50% 75%",
    duration: 3, 
    repeat: -1, 
    ease: "sine",
    yoyo: true
  }
);

gsap.fromTo("#imgred", 
{
  rotation: 0,
  opacity: 1
},
  {
    rotation: 360, 
    opacity: .75,
    transformOrigin: "50% 50%",
    duration: 2, 
    repeat: -1, 
    ease: "sine",
    yoyo: true
  }
);

gsap.fromTo("#imggreen", 
  {rotation: 0},
  {
    rotation: 360, 
    transformOrigin: "50% 50%",
    duration: 1.25, 
    repeat: -1, 
    ease: "sine"
  }
);

gsap.fromTo("#imgyellow", 
  {rotation: 0},
  {
    rotation: 360, 
    transformOrigin: "50% 50%",
    duration: 1, 
    repeat: -1, 
    ease: "sine"
  }
);