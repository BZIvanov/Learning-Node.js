const apiUrl = 'https://swapi.co/api/people/';

export const getPeople = () => {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error));
};
