const asignaturas = [
  {
    "id": "quimica",
    "nombre": "Química aplicada a la ingeniería",
    "semestre": 1,
    "linea": "cs"
  },
  {
    "id": "algebra",
    "nombre": "Álgebra",
    "semestre": 1,
    "linea": "cs"
  },
  {
    "id": "calculo",
    "nombre": "Cálculo",
    "semestre": 1,
    "linea": "cs"
  },
  {
    "id": "pensamiento",
    "nombre": "Pensamiento computacional",
    "semestre": 1,
    "linea": "data"
  },
  {
    "id": "estadistica",
    "nombre": "Estadística",
    "semestre": 2,
    "linea": "cs"
  },
  {
    "id": "calculo_int",
    "nombre": "Cálculo integral",
    "semestre": 2,
    "linea": "cs",
    "prereq": ["calculo"]
  },
  {
    "id": "fisica",
    "nombre": "Física",
    "semestre": 2,
    "linea": "cs"
  },
  {
    "id": "intro_adm",
    "nombre": "Introducción a la administración de proyectos",
    "semestre": 2,
    "linea": "proyectos"
  },
  {
    "id": "inferencia",
    "nombre": "Inferencia",
    "semestre": 3,
    "linea": "cs",
    "prereq": ["estadistica"]
  },
  {
    "id": "algebra_lineal",
    "nombre": "Álgebra lineal",
    "semestre": 3,
    "linea": "cs",
    "prereq": ["algebra"]
  },
  {
    "id": "ecuaciones",
    "nombre": "Ecuaciones diferenciales",
    "semestre": 3,
    "linea": "cs",
    "prereq": ["calculo_int"]
  },
  {
    "id": "prog_datos",
    "nombre": "Programación aplicada en análisis de datos",
    "semestre": 3,
    "linea": "data",
    "prereq": ["pensamiento"]
  },
  {
    "id": "calculo_mult",
    "nombre": "Cálculo multivariable",
    "semestre": 4,
    "linea": "cs",
    "prereq": ["calculo_int"]
  },
  {
    "id": "mecanica",
    "nombre": "Mecánica",
    "semestre": 4,
    "linea": "cs",
    "prereq": ["fisica"]
  },
  {
    "id": "modelos_negocio",
    "nombre": "Modelos de negocios",
    "semestre": 4,
    "linea": "gestion"
  },
  {
    "id": "marketing",
    "nombre": "Marketing estratégico",
    "semestre": 4,
    "linea": "gestion"
  },
  {
    "id": "resistencia",
    "nombre": "Resistencia y ciencia de los materiales",
    "semestre": 5,
    "linea": "cs",
    "prereq": ["mecanica"]
  },
  {
    "id": "analisis_numerico",
    "nombre": "Análisis numérico",
    "semestre": 5,
    "linea": "cs",
    "prereq": ["ecuaciones"]
  },
  {
    "id": "procesos",
    "nombre": "Simulación de procesos",
    "semestre": 5,
    "linea": "operaciones"
  },
  {
    "id": "contabilidad",
    "nombre": "Contabilidad y control de gestión",
    "semestre": 5,
    "linea": "gestion"
  },
  {
    "id": "econometria",
    "nombre": "Econometría",
    "semestre": 6,
    "linea": "economia",
    "prereq": ["inferencia", "analisis_numerico"]
  },
  {
    "id": "macro",
    "nombre": "Macroeconomía",
    "semestre": 6,
    "linea": "economia"
  },
  {
    "id": "iot",
    "nombre": "Programación aplicada en microcontroladores",
    "semestre": 6,
    "linea": "data"
  },
  {
    "id": "gestion_estrategica",
    "nombre": "Gestión estratégica",
    "semestre": 6,
    "linea": "gestion"
  }
];
