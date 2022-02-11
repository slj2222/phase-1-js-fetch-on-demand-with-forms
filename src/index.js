// const init = () => {
//   const inputForm = document.querySelector('form');
  
//   inputForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = document.querySelector('input#searchByID');
    
//     console.log(input.value);

//     fetch("http://localhost:3000/movies")
//     .then(res => res.json())
//     .then(data => console.log(data));


//   });
// }

// document.addEventListener('DOMContentLoaded', init);
////////////////////////////////////////////////

// Add event listeners to capture form data and override a form's default behavior
// - Fetch data based on what the user types into that form
// - Display that data on the page

document.addEventListener('DOMContentLoaded', () => {

  const movieUrl = ' http://localhost:3000/movies'
  const submitForm = document.querySelector('form')

  fetch(movieUrl)
    .then(res => res.json())
    .then(data => renderMovieData(data))

  


  function renderMovieData(dataArray) {
    
      submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputField = e.target['searchByID'].value
        
        movieIdSelector(dataArray, inputField)
        submitForm.reset();
      })
  }  

  function movieIdSelector(movieArray, inputField) {
    inputFieldParsed = parseInt(inputField, 10)
    movieArray.forEach(movieObj => {
            if (movieObj.id === inputFieldParsed) {
              appendMovieInformaiton(movieObj)
            }
    })    
  }
  function appendMovieInformaiton(movieObj) {
    let title = document.querySelector('h4')
    title.textContent = movieObj.title;
    let summary = document.querySelector('p')
    summary.textContent = movieObj.summary
  }
//  X retrieve the api data
// iterate through the array = forEach()
// set up submit form to grab input from the id field - addEventListener on form
// use conditionals to get the specific movie id information
// display specific information on the page 
})