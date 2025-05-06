const form = document.getElementById('student-form');
const container = document.getElementById('students-container');

const apiUrl = '/api/students';

// CREATE
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const student = {
    name: form.name.value,
    rollNumber: form.rollNumber.value,
    department: form.department.value,
    year: parseInt(form.year.value),
  };

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

  form.reset();
  loadStudents();
});

// READ
async function loadStudents() {
  const res = await fetch(apiUrl);
  const students = await res.json();
  container.innerHTML = '';
  students.forEach(student => {
    const div = document.createElement('div');
    div.className = 'student';
    div.innerHTML = `
      <strong>${student.name}</strong> (${student.rollNumber})<br/>
      ${student.department}, Passing Year ${student.year}<br/>
      <button onclick="deleteStudent('${student._id}')">❌ Delete</button>
    `;
    container.appendChild(div);
  });
}

// DELETE
async function deleteStudent(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  loadStudents();
}

// Load on start
loadStudents();
