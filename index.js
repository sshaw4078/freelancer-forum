/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * 
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function generateFreelancer(){
  const name = NAMES[Math.floor(Math.random()* NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random()*OCCUPATIONS.length)];
  const rate = Math.floor(Math.random()*(PRICE_RANGE.max - PRICE_RANGE.min + 1))+ PRICE_RANGE.min;
  
  return { name, occupation, rate };
}

//console.log(generateFreelancer());

//array of freelancer objects
const freelancers = Array.from({length: NUM_FREELANCERS }, generateFreelancer);

//console.log(freelancers);

function getAverageRate(freelancers) {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
    return total / freelancers.length;
}

const averageRate = getAverageRate(freelancers);


function FreelancerCard(freelancer) {
    const {name, occupation, rate} = freelancer;

    const card = document.createElement("div");
    card.classList.add("freelancer-card");
    card.innerHTML = `
    <h3>${name}</h3>
    <p>${occupation}</p>
    <p>$${rate}/hr</p>
    `;

    return card;
}

function FreelancerList(freelancers) {
  const list = document.createElement("article");
  list.classList.add("freelancer-list");

  freelancers.forEach((freelancer) => {
    const card = FreelancerCard(freelancer);
    list.appendChild(card);
  });

  return list;
}
function AverageRateDisplay(averageRate) {
  const display = document.createElement("div");
  display.classList.add("average-rate");
  display.innerHTML = `<h2>Average Rate: $${averageRate.toFixed(2)}/hr</h2>`;

  return display;
}
function render() {
  const app = document.createElement("div");
  app.classList.add("app");

  app.appendChild(AverageRateDisplay(averageRate));
  app.appendChild(FreelancerList(freelancers));

  document.body.appendChild(app);
}

render();