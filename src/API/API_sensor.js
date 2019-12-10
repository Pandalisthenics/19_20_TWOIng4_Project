let axios = require('axios');

const API_URL = "http://localhost:3001/";
const API_KEY_SENSORS= "sensors";
const API_KEY_SENSOR= "sensor";


class API_sensor {
    constructor() {
    }

    // Return all sensors
    fetchSensors() {
        console.log(`${API_URL}${API_KEY_SENSORS}`);
        return axios
            .get(`${API_URL}${API_KEY_SENSORS}`);
        console.log("c'est la fête 2");
    }

    // Return user by ID
    fetchSensorById(sensorID) {
        return axios
            .get(`${API_URL}${API_KEY_SENSOR}/${sensorID}`);
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

export default API_sensor;