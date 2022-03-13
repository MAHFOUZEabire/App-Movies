import * as axios from "axios";
import { Movie } from '../features/movies/models/movie';

export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODZiMzRiMzEyN2MwNDVhZmUxMTJlNTJlMDRjOTUwOSIsInN1YiI6IjYyMjlkNTM1ZDZjMzAwMDAxYjFkYTMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hNn_bhqpUKQ-M5lkJ0F2q7I3mc1G5y5cnUo9MI4iHzQ';

export const urlApiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 4000
});

urlApiMovie.interceptors.request.use(req => {
  req.headers['Authorization'] = 'Bearer ' + API_TOKEN;
  return req;
});

export const mapMovies = movies => 
  movies.map(m => new Movie(
    m.id,
    m.title,
    'https://image.tmdb.org/t/p/w500' + m.poster_path,
    `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    m.overview
  )
);