import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://js-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const getAllArticles = (sort_by, topic_slug) => {
  return axiosInstance
    .get("/articles", { params: { topic: topic_slug, sort_by } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}/comments`).then((res) => {
    console.log(res.data);
    return res.data.comments;
  });
};

export const patchVotes = (id, inc_votes, type) => {
  return axiosInstance.patch(`/${type}/${id}`, { inc_votes: inc_votes }).then(({ data }) => {
    return data.article;
  });
};

export const postComment = (body, username, id) => {
  return axiosInstance
    .post(`/articles/${id}/comments`, { body, username })
    .then(({ data: { comment } }) => {
      console.log(comment)
      return comment
    });
};
