const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields.");
    return;
  }
  if(!/^\S+@\S+\.\S+$/.test(email)){
    alert("Please enter a valid email.");
    return;
  }
  alert("Thank you! Your message has been sent.");
  this.reset();
});
