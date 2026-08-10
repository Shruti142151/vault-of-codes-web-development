function saveEntry() {
  const title = document.getElementById("entryTitle").value.trim();
  const date = document.getElementById("entryDate").value;
  const text = document.getElementById("entryText").value.trim();

  if (!title || !date || !text) {
    alert("Please fill all fields!");
    return;
  }

  const entry = {
    title,
    date,
    text
  };

  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  entries.unshift(entry);
  localStorage.setItem("diaryEntries", JSON.stringify(entries));

  document.getElementById("entryTitle").value = "";
  document.getElementById("entryDate").value = "";
  document.getElementById("entryText").value = "";

  renderEntries();
}

function renderEntries() {
  const entriesContainer = document.getElementById("entriesContainer");
  entriesContainer.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

  entries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <h3>${entry.title}</h3>
      <p><strong>Date:</strong> ${entry.date}</p>
      <p>${entry.text}</p>
    `;
    entriesContainer.appendChild(div);
  });
}

function newEntry() {
  document.getElementById("entryTitle").value = "";
  document.getElementById("entryDate").value = "";
  document.getElementById("entryText").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleNightMode() {
  document.body.classList.toggle("night");
}

// Render existing entries on load
document.addEventListener("DOMContentLoaded", renderEntries);