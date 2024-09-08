
import { fetchPeople } from '../services/starWarsService.js'
import { peopleDictionary } from '../utils/dictionarys.js'
import { translateObject } from '../helpers/helpers.js';

export const getPeopleHandler = async (event) => {
    const allowedKeys = Object.keys(peopleDictionary);

    try {
        const data = await fetchPeople();
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Get people',
              data: translateObject({ allowedKeys, results: data.results, 
                dictionary: peopleDictionary }),
            }),
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
              message: 'Error fetching data',
              error: error.message,
            }),
          };
    }
}



