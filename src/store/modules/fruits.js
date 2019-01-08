export default {
    state: {
        fruits: ['banan'],
    },
    getters: {
        fruits: state => state.fruits,

    },
    actions: {
        addFruit({ commit }, newFruit) {
            commit('addNewFruit', newFruit)
        },
    },
    mutations: {
        addNewFruit(state, newFruit) {
            state.fruits.push(newFruit)
        }
    }

}