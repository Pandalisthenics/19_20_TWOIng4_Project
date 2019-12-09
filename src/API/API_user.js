let axios = require('axios');

const API_URL = "http://localhost:3001/";
const API_KEY_USERS= "users";
const API_KEY_USER= "user";


class API_user {
    constructor() {
    }

    // Request to user API

    // Return all users
    fetchUsers() {
        console.log(`${API_URL}${API_KEY_USERS}/`);
        return axios
            .get(`${API_URL}${API_KEY_USERS}/`);
        console.log("c'est la fête 2");
    }

    // Return user by ID
    fetchUserById(userID) {
        return axios
            .get(`${API_URL}${API_KEY_USER}/${userID}`);
    }
/*
    /// Add a movie to the list by Movie Title
    addMovieByTitle(movieTitle) {
        return axios
            .post(`${API_URL}${API_KEY_USERS}/`, {movieTitle: movieTitle});

    }

    /// Update the rating for a given movie
    updateMovieRatingById(id, newRating) {
        return axios.put(`${API_URL}${API_KEY_USERS}/${id}`, {movieRating: newRating});
    }

    /// Delete all the movies from the list
    deleteMovies() {

        return axios
            .delete(`${API_URL}${API_KEY_USERS}/`);
    }

    deleteMovieById(id) {
        return axios
            .delete(`${API_URL}${API_KEY_USERS}/${id}`);
    }
*/
}

export default API_user;