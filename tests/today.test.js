const g = require('./../lib/giorno')

test('today', () => {

  const dt = new Date();

  const year = dt.getFullYear();

  let month = 1 + dt.getMonth();
  if (month < 10) {
    month = '0' + month;
  }

  let day = dt.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  expect(g.today()).toBe(year + '-' + month + '-' + day)
  
});

test('monday', () => {

  let date  = new Date();
  var day = date.getDay() || 7;  
  if( day !== 1 ) 
    date.setHours(-24 * (day - 1)); 

  const anno = date.getFullYear();
  let mese = 1 + date.getMonth();
  if (mese < 10) { mese = '0' + mese; }
  let giorno = date.getDate();
  if (giorno < 10) { giorno = '0' + giorno; }

  expect(g.monday()).toBe(anno + '-' + mese + '-' + giorno)
  
});
