import {useState, useEffect} from 'react';
import * as useCases from '../../core/use-cases'
import type { FullMovie } from "../../core/entities/movie.entity"
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter'

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();

    useEffect(()=> {
        loadMovie()
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);

        const fullMovie = await useCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        setMovie(fullMovie);
        setIsLoading(false);
        console.log({fullMovie})
    }



    return {
        isLoading,
        movie,
        
    }
}