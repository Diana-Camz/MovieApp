import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesPopularUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {


    try {
        const nowPlaying = await fetcher.get<MovieDBResponse>('/popular');
        return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));

    } catch (error) {
        throw new Error('Error fetching movies-Popular')
    }
}