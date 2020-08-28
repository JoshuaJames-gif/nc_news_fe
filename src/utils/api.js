import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://js-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  axiosInstance.get('/topics').then((topics) => {
    return topics.data.topics
  })
}