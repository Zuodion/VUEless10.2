export default {
    state: {
        ages: [2],
    },
    getters: {
        ages: state => state.ages,

    },
    actions: {
        addAge({ commit }, newAge) {
            commit('addNewAge', newAge)
        },
    },
    mutations: {
        addNewAge(state, newAge) {
            state.ages.push(newAge)
        }
    }

}