document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    window.location.href = 'login.html';
  }

  document.querySelector('.content h1').innerText = `Welcome ${user.firstName} ${user.lastName}`;

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.href = 'login.html';
    });
  }

  const btn1 = document.getElementById('btn1');
  if (btn1 && user.dashboardLinks && user.dashboardLinks.finalResult) {
    btn1.href = user.dashboardLinks.finalResult;
  }
});
