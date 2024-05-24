import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBMovie} from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { FullMovie } from "../../entities/movie.entity";



export const getMovieByIdUseCase = async (fetcher:HttpAdapter, movieId: number):Promise<FullMovie> => {


    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        const FullMovie = MovieMapper.fromMovieDBToEntity(movie);
        return FullMovie;
    } catch (error) {
        throw new Error('Cannot get movie by Id') 
    }

}