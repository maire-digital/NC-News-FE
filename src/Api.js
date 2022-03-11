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

export function getArticlesByTopic(topic) {
  return NCNewsApi.get(`/articles?topic=${topic}`).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
}

// Articles - GET articles by sort property

export function getSortedArticles(sort_by, order, topic) {
  return NCNewsApi.get(`/articles`, { params: { sort_by, order, topic } }).then(
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

// change vote count

export function updateArticleVotes(article_id, change) {
  return NCNewsApi.patch(`/articles/${article_id}`, { inc_votes: change }).then(
    ({ data: { article } }) => {
      return article;
    }
  );
}

// Comments - GET comments by article id

export function getComments(article_id) {
  return NCNewsApi.get(`/articles/${article_id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
}

// Comments - POST comment to article

export function postComment(article_id, bodyToPost) {
  return NCNewsApi.post(`/articles/${article_id}/comments`, {
    body: bodyToPost,
    username: "grumpy19",
  }).then(({ data: { comments } }) => {});
}

// Comments - DELETE comment by comment id

export function deleteComment(comment_id) {
  return NCNewsApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
}

// make user dynamic
