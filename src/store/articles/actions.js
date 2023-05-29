export async function fetchArticles({ commit }) {
  fetch('/api/articles')
    .then(res => res.json())
    .then(json => {
      commit('setArticles', json);
    });
}

export default {
  fetchArticles,
};
