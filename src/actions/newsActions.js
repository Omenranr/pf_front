import axios from 'axios'
import { 
    NEWS_LOADED, 
} from "./types";

export const getPopularNews = (query) => (dispatch, getState) => {
    axios.get("http://newsapi.org/v2/top-headlines?"+query)
    .then(result => {
        console.log(result.data)
        let articles = result.data.articles.filter(ar => ar.urlToImage !== null)
        dispatch({type: NEWS_LOADED, payload: articles})
    })
}