"use strict";


// You can delete this example function (and the corresponding export)
function getRandomNumber() {
  const Random = Math.floor(Math.random()*5)+1
  setTimeout(() => {
      console.log(Random)
  }, 500);
}
/*====================================================================================*/
async function getNationality(name) {
  const apis = `https://api.nationalize.io/?name=${name}`
  try {
    const response = await fetch(apis);
    if (!response.ok) {
      throw new Error (`response status = ${response.status}`);
    }
    const data = await response.json()
    if (!data.country || data.country.length === 0) {
      return null;
    }
    return data;
  }
  catch (error) 
  {
    console.error("Fetch APIs Error", error.message);  
    throw error;
    }
  }
/*====================================================================================*/
async function fetchProducts(id) { 
  const api = `https://dummyjson.com/products/${id}`
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP Error: = ${response.status}`);
    }
    const prod = await response.json()
    return prod.title
  }
  catch (error)
  {
    return `Could not get proguce: Error: ${error.message}`
  }
}
  

/* ======  Export your functions ===================================================== */
export {
  getRandomNumber, 
  getNationality, 
  fetchProducts
  // add your other functions, comma separated
}
