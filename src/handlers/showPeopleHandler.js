
import PersonModel from '../models/personModel.js';


export const showPeopleHandler = async (event) => {
  try {
     
    const person = await PersonModel.showPersons();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Show Persons',
        data: { person },
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
