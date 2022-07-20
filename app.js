const  pplList= document.getElementById('pplList');
const searchBar = document.getElementById('searchBar');
let persons = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = persons.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchString) ||
      person.email.toLowerCase().includes(searchString)
    );
});
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      persons = await res.json();
      displayCharacters(persons);
  } catch (err) {
      console.error(err);
  }
};

const displayCharacters = (persons) => {
  const htmlString = persons
      .map((person) => {
          return `
          <li class="character">
              <h2>${person.name}</h2>
              <p>${person.email}</p>
          </li>
      `;
      })
      .join('');
      pplList.innerHTML = htmlString;
};

loadCharacters();


