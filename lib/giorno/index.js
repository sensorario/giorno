let today = function () {
  const dt = new Date();
  const anno = dt.getFullYear();
  let mese = 1 + dt.getMonth();
  if (mese < 10) { mese = '0' + mese; }
  let giorno = dt.getDate();
  if (giorno < 10) { giorno = '0' + giorno; }
  return anno + '-' + mese + '-' + giorno;
};

let monday = function () {
  let date  = new Date();
  var day = date.getDay() || 7;  
  if( day !== 1 ) date.setHours(-24 * (day - 1)); 
  const anno = date.getFullYear();
  let mese = 1 + date.getMonth();
  if (mese < 10) { mese = '0' + mese; }
  let giorno = date.getDate();
  if (giorno < 10) { giorno = '0' + giorno; }
  return anno + '-' + mese + '-' + giorno;
};

module.exports = {
  today,
  monday,
};
