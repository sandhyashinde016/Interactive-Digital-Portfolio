// Optional: Use GSAP if included
// Example: Animate sections on scroll
if(typeof gsap !== 'undefined'){
  gsap.from('.about-content', {opacity:0, y:50, duration:1});
  gsap.from('.skills-grid .skill', {opacity:0, y:50, duration:1, stagger:0.2});
  gsap.from('.projects-grid .project-card', {opacity:0, y:50, duration:1, stagger:0.2});
  gsap.from('.edu-grid .edu-card', {opacity:0, y:50, duration:1, stagger:0.2});
  gsap.from('.cert-grid .cert-card', {opacity:0, y:50, duration:1, stagger:0.2});
}
