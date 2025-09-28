// Toggle Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close navbar on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('visible');
    }
  });

  // Highlight active navbar link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(scrollPos >= sectionTop){
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-item').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href').includes(current)){
      link.classList.add('active');
    }
  });
});

// Typed Text Effect
const typedText = document.querySelector('.typed-text');
const phrases = ["Motivated Professional", "Data Analytics Enthusiast", "Software Developer", "Web & BI Developer"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let speed = 100;

function type() {
  if (i >= phrases.length) i = 0;
  const fullText = phrases[i];
  if (isDeleting) {
    currentPhrase = fullText.substring(0, j--);
  } else {
    currentPhrase = fullText.substring(0, j++);
  }
  typedText.textContent = currentPhrase;
  
  if (!isDeleting && currentPhrase === fullText) {
    isDeleting = true;
    speed = 50;
  } else if (isDeleting && currentPhrase === '') {
    isDeleting = false;
    i++;
    speed = 100;
    j = 0;
  }
  setTimeout(type, speed);
}

type();

// Animate Skill Progress Bars
const skillsSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  if(sectionPos < window.innerHeight - 100){
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-progress');
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);


