import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qO72ekR08rKg5kpzS_cn2KQTqEbgqLxAuhmYwzNYt60",
  },
});
