const url = "https://restcountries.eu/rest/v2/all";
export const getAll = () => {
    return fetch(url);
};
