import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter ({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ca82967ddc878052bec5b93623362be7'
}})