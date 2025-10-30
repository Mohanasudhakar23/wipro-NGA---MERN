const instituteName = "Tech Valley Institute"; // fixed value
let courseName = "Web Development Bootcamp"; // changeable

//spread operator
const coreSubjects = ["HTML", "CSS", "JavaScript"];
const advancedSubjects = ["React", "Node.js", "MongoDB"];
const allSubjects = [...coreSubjects, ...advancedSubjects];

//Arrow Function 
const greet = (name) => `Welcome, ${name}! Ready to start learning at ${instituteName}?`;

class Student {
  constructor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }

  display() {
    return `
      <p><strong>Name:</strong> ${this.name}</p>
      <p><strong>Age:</strong> ${this.age}</p>
      <p><strong>Skills:</strong> ${this.skills.join(", ")}</p>
    `;
  }
}

//Creating Student Objects 
const student1 = new Student("Alice Johnson", 21, ["HTML", "CSS", "JavaScript"]);
const student2 = new Student("Bob Smith", 22, ["JavaScript", "React", "Node.js"]);

const studentGrades = new Map([
  ["Alice Johnson", "A"],
  ["Bob Smith", "B+"],
]);

const skillsSet = new Set([...student1.skills, ...student2.skills]);

// Dynamic Output Function
function runDemo() {
  const output = document.getElementById("output");

  output.innerHTML = `
    <h2>Course Details</h2>
    <p><strong>Institute:</strong> ${instituteName}</p>
    <p><strong>Course:</strong> ${courseName}</p>

    <h2>Subjects (Using Spread Operator)</h2>
    <p>${allSubjects.join(", ")}</p>

    <h2>Greeting (Arrow Function)</h2>
    <p>${greet(student1.name)}</p>

    <h2>Student Details (Using Class)</h2>
    ${student1.display()}
    <br>
    ${student2.display()}

    <h2>Student Grades (Using Map)</h2>
    <ul>
      ${Array.from(studentGrades.entries())
        .map(([name, grade]) => `<li>${name}: <strong>${grade}</strong></li>`)
        .join("")}
    </ul>

    <h2>Unique Skills (Using Set)</h2>
    <p>${Array.from(skillsSet).join(", ")}</p>
  `;

  // Add animation
  output.classList.remove("hidden");
  setTimeout(() => output.classList.add("visible"), 100);
}

//Event listener
document.getElementById("runDemo").addEventListener("click", runDemo);
