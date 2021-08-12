// Selection Element
const darkBody = document.getElementsByTagName('body')[0];
const darkNav = document.getElementsByTagName('nav')[0];
const darkProfile = document.getElementsByClassName('profile')[0];
const darkAbout = document.getElementsByClassName('about')[0];
const darkAboutContent = document.getElementsByClassName('about-content')[0];
const darkSkill = document.getElementsByClassName('skill')[0];
const darkPortfolio = document.getElementsByClassName('portfolio')[0];
const darkPort1 = document.getElementsByClassName('port-1')[0];
const darkPort2 = document.getElementsByClassName('port-2')[0];
const darkPort3 = document.getElementsByClassName('port-3')[0];
const darkPort4 = document.getElementsByClassName('port-4')[0];
const darkContact = document.getElementsByClassName('contact')[0];
const darkContactContent = document.getElementsByClassName('contact-content')[0];
const darkBiodata = document.getElementsByClassName('biodata')[0];
const darkButton = document.getElementById('dark-mode');

// Dark Mode
darkButton.addEventListener('click', function () {
  darkButton.classList.toggle('active');
  darkBody.classList.toggle('night');
  darkNav.classList.toggle('night');
  darkProfile.classList.toggle('night');
  darkAbout.classList.toggle('night');
  darkAboutContent.classList.toggle('night');
  darkSkill.classList.toggle('night');
  darkPortfolio.classList.toggle('night');
  darkPort1.classList.toggle('night');
  darkPort2.classList.toggle('night');
  darkPort3.classList.toggle('night');
  darkPort4.classList.toggle('night');
  darkContact.classList.toggle('night');
  darkContactContent.classList.toggle('night');
  darkBiodata.classList.toggle('night');
});
