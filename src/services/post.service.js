import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',
};

let axiosInstance = axios.create(config);

const getPostsOfUser = (id) => {
    return axiosInstance.get('/' + id + '/posts');
}

export {getPostsOfUser};