const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
  window.location.href = 'login.html';
}
const shapka=document.getElementById("textname");
shapka.textContent=currentUser.name;

const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = currentUser.name;
const email = document.getElementById("email");
email.textContent = currentUser.email;

const Name = document.getElementById("name");
Name.innerHTML = currentUser.name;

const country=document.getElementById("country");
country.innerHTML=currentUser.country;

const birthday=document.getElementById("birthday");
birthday.innerHTML=currentUser.birthday;

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'register.html';
});



