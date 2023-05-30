export const setArticles = (state, articles) => {
  state.articles = articles;
};

export const likeArticle = (state, id) => {
  state.articles.find(item => item.id === id).likes += 1;
};

export default {
  setArticles,
  likeArticle,
};
