import axios from "axios";

const API = "https://raw.githubusercontent.com/AbhishekID01/products.json/refs/heads/main/products.json";

export const fetchProducts = async () => {
    const res = await axios.get(API);
    return res.data;
}