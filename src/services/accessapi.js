import { token } from './token';

const BASE_URL = 'https://api.spotify.com/v1/search?type=track&q=';

export const fetchSongs = async (search) => {
    try {
        const response = await fetch(`${BASE_URL}${search}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error){
        throw error;
    }
}
