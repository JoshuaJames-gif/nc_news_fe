import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://git.heroku.com/js-nc-news.git/api",
});

export const getTopics = () => {
  axiosInstance.get('/articles').then((topics) => {
    return topics.data.topics
  })
}