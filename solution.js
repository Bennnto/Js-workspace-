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
    if (!Array.isArray(data.country) || data.country.length === 0)
    {
       return null;
    }
    return data.country.country_id;   
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
    return `Could not get products: Error: ${error.message}`
  }
}
/*==================================================================================== */
async function searchStorePrice(product_name) {
  const APi = `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`
  try
  {
    const resp = await fetch(APi);
    if (!resp.ok)
    {
      throw new Error(`HTTP Error: = ${resp.status}`);
    }
    const data = await resp.json();
    if (!Array.isArray(data) || data.length == 0)
    {
      return null;
    }
    const itemname = String(product_name).toLowerCase();
    const match = data.find(item => item.name === itemname);
    return match.price;
  }
  catch (error)
  {
    return `Could not get products: Error: ${error.message}`
  }  
}
/* ======  Export your functions ===================================================== */
export {
  getRandomNumber, 
  getNationality, 
  fetchProducts, 
  searchStorePrice
  // add your other functions, comma separated
}
