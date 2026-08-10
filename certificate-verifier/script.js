console.log("Script connected!");
const dummyStudents = {
  "yashrathor1011@gmail.com": {
    name: "Yash Rathor",
    email: "yashrathor1011@gmail.com",
    mobile: "9876543210",
    domain: "AI & ML",
    college: "XYZ Institute",
    start: "15 June 2024",
    duration: "2 Months",
    photo: "https://via.placeholder.com/130",
    assignments: [true, true, true, true],
    certificate: "#"
  },
  "shruti@gmail.com": {
    name: "Shruti Singh",
    email: "shruti@gmail.com",
    mobile: "9012345678",
    domain: "Full Stack",
    college: "Lovely Professional University",
    start: "01 July 2024",
    duration: "1 Month",
    photo: "https://via.placeholder.com/130",
    assignments: [true, false, true, false],
    certificate: "#"
  },
  "rahul@gmail.com": {
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    mobile: "9988776655",
    domain: "Data Science",
    college: "IIT Delhi",
    start: "10 June 2024",
    duration: "1.5 Months",
    photo: "https://via.placeholder.com/130",
    assignments: [true, true, false, true],
    certificate: "#"
  }
};

function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim().toLowerCase();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);

  setTimeout(() => {
    const student = dummyStudents[id];

    if (!student) {
    resultBox.innerHTML = `<p style="color:red;">❌ No student found with that email/ID.</p>`;
      showSpinner(false);
      return;
    }

const html = `
  <div class="card">
    <img src="${student.photo}" alt="Photo" />
    <h3>${student.name}</h3>
    <p>📧 <strong>Email:</strong> ${student.email}</p>
    <p>📱 <strong>Mobile:</strong> ${student.mobile}</p>
    <p>💼 <strong>Domain:</strong> ${student.domain}</p>
    <p>🏫 <strong>College:</strong> ${student.college}</p>
    <p>📅 <strong>Start Date:</strong> ${student.start}</p>
    <p>⏳ <strong>Duration:</strong> ${student.duration}</p>
    <h4>📊 Assignment Status</h4>
    <div class="assignment-status">
      ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
    </div>
    <p style="margin-top:10px;">🎓 <strong>Status:</strong> Completed</p>
    <a href="${student.certificate}" target="_blank" class="cert-btn">🎖 View Certificate</a>
  </div>
`;

    resultBox.innerHTML = html;
    resultBox.scrollIntoView({ behavior: "smooth" }); // Scroll to result
    showSpinner(false);
    showToast(`✅ Data loaded for ${student.name}`);
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}