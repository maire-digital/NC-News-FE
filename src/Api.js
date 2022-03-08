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
