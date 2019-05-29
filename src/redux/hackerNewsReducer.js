import axios from 'axios'
const initialState = {
    loading: false,
    articles: []
}
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export function requestArticles(){
    let articles = axios.get('/api/hacker-news')
    .then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

function hackerNewsReducer(state = initialState, action){
    return state
}

export default hackerNewsReducer