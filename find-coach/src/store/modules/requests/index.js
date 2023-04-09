export default {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },
  mutations: {
    addRequest (state, payload) {
      state.requests.push(payload)
    }
  },
  actions: {
    contactCoach (context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message
      }
      context.commit('addRequest', newRequest)
    }
  },
  getters: {
    requests(state, getters, rootState, rootGetters) {
      const coachId = rootGetters.userId;
      console.log(state.requests);
      return state.requests.filter(req => req.coachId === coachId)
    },
    hasRequests(state) {
      return state.requests && state.requests.length > 0
    }
  }
}