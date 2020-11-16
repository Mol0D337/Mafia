import firebase from 'firebase/app'

export default {
    actions: {
        async login({dispatch, commit}, {email,password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw e
            }
        },
        async register({dispatch}, {email, password, nickName}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword( email, password,)
                const uid = await dispatch('getuid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name: nickName,
                    email,
                    password
                })
            } catch (e) {
                throw e
            }
        },
        getuid() {
            const user = firebase.auth().currentUser
            console.log(user, "user");
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        },
    }
}
