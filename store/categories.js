export const state = () => ({
  categories: undefined,
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async GET_CATEGORIES({ commit }) {
    // eslint-disable-next-line no-console
    console.log('GET CATEGORIES')
    const categories = await this.$api.categories.get()
    commit('SET_CATEGORIES', categories)
    return categories
  },
}
