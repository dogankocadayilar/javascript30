const ENDPOINT =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const cities = [];

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((data) => cities.push(...data))
  .catch((e) => console.error(e));

searchInput.addEventListener("input", displayMatches);

function findMatches(wordToFilter, cities) {
  const regex = new RegExp(wordToFilter, "gi");
  return cities.filter((place) => {
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArr = findMatches(this.value, cities);
  const html = matchArr
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
    })
    .join("");

  suggestions.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
