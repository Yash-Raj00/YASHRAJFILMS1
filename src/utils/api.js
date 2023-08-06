import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjllNTYwOGQyMTE0ZDY2ODk0ZjFiZjliZWYzNzgzOCIsInN1YiI6IjY0YmJlNzZjZTlkYTY5MDEwZDQwM2UwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Di1kwbkA6mvITIuuIQe2_XMXp205ZWUl0E6w9rMjImM

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}