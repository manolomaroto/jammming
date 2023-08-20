
const BASE_URL = 'https://api.spotify.com/v1/search?type=track&q=';
const TOKEN = 'BQDV6wY-XGI3dzUvGJGPScHgY9aNKyPAd7NewUdQ8vYYOxHfocoxSgrPxudn9bp0544_HRh0MNiyHod2r6IwvxiCOtjM05v6FnKRCUZpCy9WBe1g0gQ';
export const fetchSongs = async (search) => {
    try {
        const response = await fetch(`${BASE_URL}${search}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error){
        throw error;
    }
}

/* curl --request GET \
  --url 'https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track' \
  --header 'Authorization: Bearer BQAKpOnETzj0c3TA_hqmPN7f0EtfrNjawsC0cgBpR1JYagvfxz9Ju7eTeQzaIdMBaZFmMc6U4uJtiZbYEpwd0Nr2WxwFwk2vZj-RHn4YV8QE_FW4x38' */