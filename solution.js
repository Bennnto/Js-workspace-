"use strict";


// You can delete this example function (and the corresponding export)
function getRandomNumber() {
  const Random = Math.floor(Math.random()*5)+1
  setTimeout(() => {
      console.log(Random)
  }, 500);
}
/*====================================================================================*/
function getNationality(name) {
  fetch(`https://api.nationalize.io/?name=${name}`)
      .then(response => response.json())
      .then((data) => {console.log(`Nationality: ${name}`,data)})
      .catch(error => {console.error(`fetch API error`, error)})
}

/* ======  Export your functions ===================================================== */
export {
  getRandonNumber, getNationality
  // add your other functions, comma separated
}
