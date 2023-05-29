export async function fetchArticles({ commit }) {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(json => {
      commit('setArticles', json);
    });
}

export default {
  fetchArticles,
};
