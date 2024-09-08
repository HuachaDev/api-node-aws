
import { fetchFilms } from '../services/starWarsService.js'
import { dictionaryMovies } from '../utils/dictionarys.js'
import { translateObject } from '../helpers/helpers.js';

export const getFimlsHandler = async (event) => {
    const allowedKeys = Object.keys(dictionaryMovies);

    try {
        const data = await fetchFilms();
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Get people',
              data: translateObject({ allowedKeys, results: data.results, 
                dictionary: dictionaryMovies }),
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


