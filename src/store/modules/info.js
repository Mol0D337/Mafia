import firebase from 'firebase/app'

export default {
    state: {
        info: {},
        name: '',
        email: '',
        password: ''
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        },
        SET_NAME (state, name) {
            state.name = name;
        },
        SET_EMAIL (state, email) {
            state.email = email;
        },
        SET_PASSWORD (state, password) {
            state.password = password;
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getuid')
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info)
            } catch (e) {}
        }
    },
    getters: {
        info: s=> s.info,
        getName: s => s.name,
        getEmail: s => s.email,
        getPassword: s => s.password,
    }
}
