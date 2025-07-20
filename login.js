document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const passport = document.getElementById('passport').value.trim();
  const caseNo = document.getElementById('case').value.trim();

  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const user = data.find(u =>
        u.firstName === firstName &&
        u.lastName === lastName &&
        u.passport === passport &&
        u.case === caseNo
      );
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html';
      } else {
        alert('مشخصات وارد شده اشتباه است.');
      }
    });
});
