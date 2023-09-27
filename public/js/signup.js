document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();


var email = document.getElementById('email').value;
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;


var data = {
  email: email,
  firstName: firstName,
  lastName: lastName
};


axios.post('http://cerebro.homelinux.net:3000/users', data)
  .then(function(response) {
    console.log(response.data);
    // Handle success
  })
  .catch(function(error) {
    console.error(error);
    // Handle error
  });
});