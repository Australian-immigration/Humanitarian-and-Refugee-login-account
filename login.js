document.addEventListener('DOMContentLoaded', () => {
  const users = [
    {
      firstName: "User1",
      lastName: "Last1",
      passport: "P00001",
      case: "C001",
      dashboardLinks: {
        finalResult: "https://example.com/user1-final-result",
        uploadPassport: "#",
        uploadPhoto: "#",
        unApproval: "#",
        other: "#"
      }
    },
    {
      firstName: "User2",
      lastName: "Last2",
      passport: "P00002",
      case: "C002",
      dashboardLinks: {
        finalResult: "https://example.com/user2-final-result",
        uploadPassport: "#",
        uploadPhoto: "#",
        unApproval: "#",
        other: "#"
      }
    }
    // بقیه کاربران را همینطور اضافه کن...
  ];

  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const passport = document.getElementById('passport').value.trim();
    const caseNum = document.getElementById('case').value.trim();

    const matchedUser = users.find(user =>
      user.firstName.toLowerCase() === firstName.toLowerCase() &&
      user.lastName.toLowerCase() === lastName.toLowerCase() &&
      user.passport.toLowerCase() === passport.toLowerCase() &&
      user.case.toLowerCase() === caseNum.toLowerCase()
    );

    if (matchedUser) {
      localStorage.setItem('user', JSON.stringify(matchedUser));
      window.location.href = 'index.html';
    } else {
      errorMsg.style.display = 'block';
      errorMsg.textContent = 'Invalid credentials, please try again.';
    }
  });
});
