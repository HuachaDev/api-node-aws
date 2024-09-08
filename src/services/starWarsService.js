import fetch from 'node-fetch';

const BASE_URL = 'https://swapi.py4e.com/api/';

const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`Error fetching data from SWAPI: ${response.statusText}`);
    }
    return await response.json();
}

export const fetchPeople = async () => {
    return await fetchData('people');
}

export const fetchFilms = async () => {
    return await fetchData('films');
}
