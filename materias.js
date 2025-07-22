
const materias = [
  // Semestre 1
  { codigo: 'QUIMICA', nombre: 'Química aplicada a la ingeniería', semestre: 1, prerequisitos: [] },
  { codigo: 'ALGEBRA', nombre: 'Álgebra', semestre: 1, prerequisitos: [] },
  { codigo: 'CALCULO1', nombre: 'Cálculo', semestre: 1, prerequisitos: [] },
  { codigo: 'ESTADISTICA', nombre: 'Estadística', semestre: 1, prerequisitos: [] },
  { codigo: 'FISICA', nombre: 'Física', semestre: 1, prerequisitos: [] },

  // Semestre 2
  { codigo: 'CALCULO2', nombre: 'Cálculo Integral', semestre: 2, prerequisitos: ['CALCULO1'] },
  { codigo: 'INFERENCIA', nombre: 'Inferencia', semestre: 2, prerequisitos: ['ESTADISTICA'] },
  { codigo: 'ALGEBRA_LINEAL', nombre: 'Álgebra Lineal', semestre: 2, prerequisitos: ['ALGEBRA'] },

  // Semestre 3
  { codigo: 'ECUACIONES_DIF', nombre: 'Ecuaciones Diferenciales', semestre: 3, prerequisitos: ['CALCULO2'] },
  { codigo: 'MULTIVARIABLE', nombre: 'Cálculo Multivariable', semestre: 3, prerequisitos: ['CALCULO2'] },
  { codigo: 'MECANICA', nombre: 'Mecánica', semestre: 3, prerequisitos: ['FISICA'] },

  // Semestre 4 (ejemplo)
  { codigo: 'ANALISIS_NUM', nombre: 'Análisis Numérico', semestre: 4, prerequisitos: ['ECUACIONES_DIF'] },
  { codigo: 'ELECTROMAG', nombre: 'Electromagnetismo', semestre: 4, prerequisitos: ['FISICA'] },
  { codigo: 'MICRO', nombre: 'Microeconomía', semestre: 4, prerequisitos: [] },

  // Electivo de muestra
  { codigo: 'ELECTIVO1', nombre: 'Electivo 1', semestre: 9, prerequisitos: [], tipo: 'electivo' },
];
