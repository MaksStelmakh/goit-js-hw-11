import axios from "axios";

export function getPhoto(searchForm) {
    const BASE_URL = `https://pixabay.com/api/?key=24435694-017d2bab3470121913608c0c0`
    return axios.get(`${BASE_URL}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1&q=${searchForm}`);
}

    