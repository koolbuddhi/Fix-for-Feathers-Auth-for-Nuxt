export const state = () => ({
  counter: 5
})

export const getters = {
  getCalculated(state) {
    return state.counter * 5
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  increment(context) {
    context.commit('increment')
  }
}
