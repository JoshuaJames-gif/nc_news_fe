import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://js-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get('/topics').then((topics) => {
    return topics.data.topics
  })
}

export const getAllArticles = () => {
  return axiosInstance.get('/articles').then((res) => {
    console.log('getArticles', res.data.articles)
    return res.data.articles
  });
};