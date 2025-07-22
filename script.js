const subjects = [
  { id: "algebra", name: "Álgebra", semester: 1 },
  { id: "estadistica", name: "Estadística", semester: 2 },
  { id: "infer", name: "Inferencia", semester: 3 },
  { id: "calculo", name: "Cálculo", semester: 1 },
  { id: "calculo_int", name: "Cálculo integral", semester: 2, prereq: ["calculo"] },
  { id: "calculo_mult", name: "Cálculo multivariable", semester: 3, prereq: ["calculo_int"] },
  { id: "ecuaciones", name: "Ecuaciones diferenciales", semester: 4, prereq: ["calculo_int"] },
  { id: "analisis", name: "Análisis numérico", semester: 5, prereq: ["ecuaciones"] },
  { id: "econometria", name: "Econometría", semester: 6, prereq: ["estadistica", "analisis"] },
  { id: "micro", name: "Microeconomía", semester: 4 },
  { id: "macro", name: "Macroeconomía", semester: 5, prereq: ["micro"] },
  { id: "gestion_estrategica", name: "Gestión estratégica", semester: 7 },
];

const container = document.getElementById("malla-container");

function renderSubjects() {
  container.innerHTML = "";
  for (let sem = 1; sem <= 11; sem++) {
    const semSubjects = subjects.filter(s => s.semester === sem);
    semSubjects.forEach(subj => {
      const div = document.createElement("div");
      div.className = "subject";
      div.dataset.id = subj.id;
      div.innerText = subj.name;

      if (subj.prereq && !subj.prereq.every(id => subjects.find(s => s.id === id)?.completed)) {
        div.classList.add("locked");
      } else if (subj.completed) {
        div.classList.add("completed");
      }

      div.addEventListener("click", () => toggleComplete(subj.id));
      container.appendChild(div);
    });
  }
}

function toggleComplete(id) {
  const subj = subjects.find(s => s.id === id);
  subj.completed = !subj.completed;
  renderSubjects();
}

renderSubjects();