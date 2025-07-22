
const materias = [
  { codigo: 'CALCULO1', nombre: 'Cálculo', semestre: 1, prerequisitos: [] },
  { codigo: 'ALGEBRA', nombre: 'Álgebra', semestre: 1, prerequisitos: [] },
  { codigo: 'CALCULO2', nombre: 'Cálculo Integral', semestre: 2, prerequisitos: ['CALCULO1'] },
  { codigo: 'LINEAL', nombre: 'Álgebra Lineal', semestre: 2, prerequisitos: ['ALGEBRA'] },
  { codigo: 'ECUDIF', nombre: 'Ecuaciones Diferenciales', semestre: 3, prerequisitos: ['CALCULO2'] },
  { codigo: 'MULTIVAR', nombre: 'Cálculo Multivariable', semestre: 3, prerequisitos: ['CALCULO2'] },
  { codigo: 'ELECTIVO1', nombre: 'Electivo 1', semestre: 9, prerequisitos: [], tipo: 'electivo' },
];
