const AdviseId = document.querySelector(".advice-id");
const AdvisePragraph = document.querySelector(".advice-paragraph");
const AdviseDice = document.querySelector(".dice");

// const fetchData = async () => {
//   const res = await fetch("https://api.adviceslip.com/advice");
//   const data = await res.json();
//   const { slip } = data;
//   AdviseId.innerHTML = `Advice #${slip.id}`;
//   AdvisePragraph.innerHTML = slip.advice;
// };

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      AdviseId.innerHTML = `ADVICE #${data.slip.id}`;
      AdvisePragraph.innerHTML = `${data.slip.advice}`;
    });
};
getAdvice();
AdviseDice.addEventListener("click", getAdvice);
