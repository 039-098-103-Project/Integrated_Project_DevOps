import axios from "axios";

const API_URL = "http://13.76.186.187/backend";

class ProductDataService {
    getAllProduct() {
        return axios.get(`${API_URL}/products`);
    }
    getProduct(productId) {
        return axios.get(`${API_URL}/products/${productId}`);
    }
    getColors() {
        return axios.get(`${API_URL}/colors`);
    }
    getBagTypes() {
        return axios.get(`${API_URL}/bagtypes`);
    }
    deleteProduct(productId) {
        return axios.delete(`${API_URL}/products/delete/${productId}`);
    }
}

export default new ProductDataService();