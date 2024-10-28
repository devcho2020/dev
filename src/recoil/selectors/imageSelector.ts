import {selector} from "recoil";
import axios from "axios";
import {searchState} from "../atoms/searchState.ts";
import {pageState} from "../atoms/pageState.ts";


const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const PER_PAGE = 30;

export const imageData = selector({
    key: 'imageData',
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);

        // API 호출
        try {
            const res = await axios.get(`${API_URL}?client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}&query=${searchValue}`);
            return res.data.results;
        } catch (e) {
            console.error(e);
        }
    }
})