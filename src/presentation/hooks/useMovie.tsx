import {useState, useEffect} from 'react';
import * as useCases from '../../core/use-cases'
import type { FullMovie } from "../../core/entities/movie.entity"
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter'
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(()=> {
        loadMovie()
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);

        const fullMoviePromise = useCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        const castPromise = useCases.getMovieCastUseCase(movieDBFetcher, movieId);

        const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

        setMovie(fullMovie);
        setCast(cast)
        setIsLoading(false);
    }



    return {
        isLoading,
        movie,
        cast,
    }
}