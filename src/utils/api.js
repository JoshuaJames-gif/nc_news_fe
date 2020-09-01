import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://js-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const getAllArticles = (topic_slug) => {
  return axiosInstance
    .get("/articles", { params: { topic: topic_slug } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}`).then((res) => {
    console.log(res.data);
    return res.data.article;
  });
};
