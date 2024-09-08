
import PersonModel from '../models/personModel.js';
import { validatePerson } from '../helpers/helpers.js';

export const addPeopleHandler = async (event) => {

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Error fetching data',
        error: 'Send payload',
      }),
    };
  }

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender
  } = JSON.parse(event.body);

  try {
     
    const validationResult = validatePerson({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      gender
    });

    if (!validationResult.valid) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Error fields',
          error: validationResult.errors,
        }),
      };
    }

    const person = await PersonModel.create({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      gender
    });


    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Created Person',
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
