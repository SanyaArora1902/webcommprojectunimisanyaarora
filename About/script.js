// reservation form
var form = document.getElementById('reserveForm');
var message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var guests = document.getElementById('guests').value;

  if (name === '' || email === '' || date === '' || guests === '') {
    message.innerHTML = "<span style='color:red'>Please fill all fields</span>";
  } else {
    message.innerHTML = "<span style='color:green'>Reservation successful</span>";
    form.reset();
  }
});

// newsletter
var newsForm = document.getElementById('newsForm');

newsForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for subscribing');
  newsForm.reset();
});

// cookies
function acceptCookies() {
  document.getElementById('cookieBox').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = function () {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBox').style.display = 'block';
  }
};