export default {
    state: {
        names: ['Sanya'],
    },
    getters: {
        names: state => state.names,

    },
    actions: {
        addName({ commit }, newName) {
            commit('addNewName', newName)
        },
    },
    mutations: {
        addNewName(state, newName) {
            state.names.push(newName)
        }
    }

}