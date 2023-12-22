import axios from "axios";

const key = '3d469e5bc8b04bc5b537e0c444835d73';

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api"
});

const getGenresList = () => axiosInstance.get('/genres?key=' + key);
const getGames = () => axiosInstance.get('/games?key=' + key);
const getGameListByGenreId = (id) => axiosInstance.get('/games?key=' + key + '&genres=' + id);

export default {
    getGenresList,
    getGames,
    getGameListByGenreId
};
