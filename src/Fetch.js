
import { API_KEY } from "./const";

async function fetchResponce(url) {
    const responce = await fetch(url);
    return responce.ok
        ? await responce.json()
        :Promise.reject(new Error('not found') )
}

export function fetchHomePage() {
    return fetchResponce(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`) 
}

export function fetchHomeNextPage(page) {
    return fetchResponce(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
}

export function fetchMovePage(page, serch) {
    return fetchResponce(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${serch}&page=${page}&include_adult=false`)
}

export function fetchMoveDetails(movieId) {
    return fetchResponce(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
}

export function fetchCast(movieId) {
    return fetchResponce(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
}

export function fetchRewiews(movieId) {
    return fetchResponce(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}

