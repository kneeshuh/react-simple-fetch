import axios from "axios";

export default function fetchImages() {
    return axios.get('https://nc-marketplace-sem-1.onrender.com/api/items')
}