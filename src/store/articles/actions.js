export async function fetchArticles({ commit }) {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(json => {
      commit('setArticles', json);
    });
}

export function likeArticle({ commit }, id) {
  commit('likeArticle', id);
}

export default {
  fetchArticles,
  likeArticle,
};
