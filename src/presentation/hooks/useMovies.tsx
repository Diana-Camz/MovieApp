import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as useCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setpopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setupcoming] = useState<Movie[]>([])

    useEffect(() => {
      initialLoad();
    }, [])
    
    const initialLoad = async() => {
        const nowPlayingPromise =  useCases.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromise =  useCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise =  useCases.moviesTopRatedUseCase(movieDBFetcher)
        const upcomingPromise =  useCases.moviesUpcomingUseCase(movieDBFetcher)
        // console.log(nowPlayingMovies[0])
        // console.log(popularMovies[0])
        // console.log(topRatedMovies[0])
        // console.log(upcomingMovies[0])

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies

        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setpopular(popularMovies);
        setTopRated(topRatedMovies);
        setupcoming(upcomingMovies)
        setIsLoading(false)


        return {
            isLoading, 
            nowPlaying,
            popular,
            topRated,
            upcoming,
        }
    }
}

export default useMovies
