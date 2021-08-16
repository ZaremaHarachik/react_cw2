import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
};

let axiosInstance = axios.create(config);

const getCommentsOfPost = (postId) => {
    return axiosInstance.get('/' + postId + '/comments' );
}

export {getCommentsOfPost};