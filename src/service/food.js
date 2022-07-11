import {BASE_URL} from './index';   

//get all data from the api

export const getAllData = async () => { 
    try {
        const response = await fetch(`${BASE_URL}beers`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

//Get Food from API

// export const getFood = async (searchTerm) => {
//     try {
//     const response = await fetch(`${BASE_URL}beers?food=${searchTerm}`);
//     const data = await response.json();
//     return data;
//     } catch (error) {
//         console.log(error);
//     }
// }