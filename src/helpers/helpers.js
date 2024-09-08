import { v4 as uuidv4 } from 'uuid';

export const translateObject = (({ allowedKeys, results, dictionary }) => {
    return results.map(res => {
      return allowedKeys.reduce((newObj, key) => {
        if (res[key] !== undefined) {
          const translation = dictionary[key];
          newObj[translation] = res[key];
        }
        return newObj;
      }, {});
    })
  })

export const generateUUID = () => {
    return uuidv4();
}

export const validatePerson = (person) => {
  const validators = {
    name: {
      validate: (value) => (typeof value === 'string' && value.trim() !== ''),
      message: 'Name must be a non-empty string.'
    },
    height: {
      validate: (value) => (typeof value === 'string' && !isNaN(Number(value)) && Number(value) > 0),
      message: 'Height must be a string representing a positive number.' 
    },
    mass: {
      validate: (value) => (typeof value === 'string' && !isNaN(Number(value)) && Number(value) > 0),
      message: 'Mass must be a string representing a positive number.'
    },
    hair_color: {
      validate: (value) => (typeof value === 'string'),
      message: 'Hair color must be a string.' 
    },
    skin_color: {
      validate: (value) => (typeof value === 'string'),
      message: 'Skin color must be a string.' 
    },
    eye_color: {
      validate: (value) => (typeof value === 'string'),
      message: 'Eye color must be a string.' 
    },
    gender: {
      validate: (value) => (typeof value === 'string' && ['male', 'female'].includes(value)),
      message: 'Gender must be "male" or "female".' 
    }
  };
  const errors = [];
  for (const [key, { validate, message }] of Object.entries(validators)) {
    if (!validate(person[key])) {
      errors.push(`Error en el campo ${key}: ${message}`);
    }
  }
  return errors.length > 0 ? { valid: false, errors } : { valid: true, errors: null };
}
