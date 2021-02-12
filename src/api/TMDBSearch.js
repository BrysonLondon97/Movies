import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODVhYjMzNjIwODU4NDg0YzhmZGNiZGUwYzBlZDUzZSIsInN1YiI6IjYwMWI2NmI4Y2EwZTE3MDAzZjRkZTExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UmS9QF4RfMpx9zWD3lKHQFkXRwyHUsLYTZYoo-4XB4s`
    }
});

export default instance;