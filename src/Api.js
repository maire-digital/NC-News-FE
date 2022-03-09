import axios from "axios";

const NCNewsApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-5.herokuapp.com/api",
});

// Articles - GET all articles
export function getArticles() {
  return NCNewsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}

// Topics - GET all topics

export function getTopics() {
  return NCNewsApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
}

// Articles - GET articles by topic

export function getSortedArticles(topic) {
  return NCNewsApi.get(`/articles?topic=${topic}`).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
}

// Articles - GET single article by id

export function getSingleArticle(article_id) {
  return NCNewsApi.get(`/articles/${article_id}`).then(
    ({ data: { article } }) => {
      return article;
    }
  );
}

// Articles - PATCH single article votes by id

export function updateArticleVotes(article_id) {
  return NCNewsApi.patch(`/articles/${article_id}`, { inc_votes: 1 }).then(
    ({ data: { article } }) => {
      return article;
    }
  );
}
