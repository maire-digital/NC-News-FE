import axios from "axios";

const NCApi = axios.create({
  baseURL: "https://nc-news-example-seminar-2-5.herokuapp.com/api",
});

// Articles - GET all articles
export function getArticles() {
  return NCApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
}
