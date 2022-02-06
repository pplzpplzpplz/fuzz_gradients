gsap.fromTo("#imgblue", 
  {
    rotation: 0,
    opacity: .1
  },
  {
    rotation: 360, 
    opacity: 1,
    // transformOrigin: "50% 75%",
    duration: 5, 
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
    duration: 4, 
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
    duration: 6, 
    repeat: -1, 
    ease: "sine"
  }
);

gsap.fromTo("#imgyellow", 
  {rotation: 0},
  {
    rotation: 360, 
    transformOrigin: "50% 50%",
    duration: 7, 
    repeat: -1, 
    ease: "sine"
  }
);