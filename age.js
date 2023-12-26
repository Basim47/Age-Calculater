// const ageCalculate = () => {
//   const today = new Date();

//   const inputDate = new Date(document.getElementById("date-input").value);

//   const birthTime = inputDate.getTime();
//   const currentTime = today.getTime();

//   if (birthTime > currentTime) {
//     alert("Not Born Yet");
//     displayResult("-", "-", "-");
//     return;
//   }

//   const diffTime = currentTime - birthTime;

//   const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
//   const months = Math.floor(
//     (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
//   );
//   const days = Math.floor(
//     (diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
//   );

//   displayResult(days, months, years);
// };

// const displayResult = (days, months, years) => {
//   document.getElementById("years").innerText = years;
//   document.getElementById("months").innerText = months;
//   document.getElementById("days").innerText = days;
// };

// document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);

const getAge = (BirthDate,BirthMonth ,BirthYear) => {
  const date = new Date();
  console.log(`Days : ${date.getDate() + BirthDate} , Months :  ${date.getMonth() + 1 } , Year : ${date.getFullYear() - BirthYear -1 }`);
};


getAge(7,11,2002);
