const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event) => {event.preventDefault();
    const input = document.querySelector('input#searchByID')
    // the value of the input data by user
    console.log(input.value)

    //console.log(event.target.children[1].value) - This one helps to find the location of where the data would go.

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');

    title.innerText = data.title;
    summary.innerText = data.summary

    })
  })
 
  

}

document.addEventListener('DOMContentLoaded', init);