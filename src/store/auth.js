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
                    name: nickName
                })
            } catch (e) {
                throw e
            }
        },
        async getuid() {
            const user = await firebase.auth().currentUser
            console.log(user, "user");
            return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()
        }
    }
}
