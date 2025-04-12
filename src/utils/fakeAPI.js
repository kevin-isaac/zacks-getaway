/*
const seededRandom = seed => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = s * a % m) / m;
};*/

const fetchAPI = date => {
  //random booked dates
  
  let result = [
 

  ];

  let day=1;
  let month=1;
  let year=2025;
  for(year=2025;year<2026;year++){
    for(month=1;month<=12;month++){
      day=1+Math.floor(Math.random()*23);
      let numDays=2+Math.floor(Math.random()*2);
      for(let i=day;i<day+numDays;i++){
        result.push(new Date(year+"-"+month+"-"+i));
      }
    }
  }


  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
