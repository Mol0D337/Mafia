<template>
    <div class="bcg">
        <loader class="loader" v-if="loading"/>

        <div v-else>
            <Header/>
            <p>{{name}}</p>
            <p>{{email}}</p>
            <a href="#" @click.prevent="logout">
                Выход
            </a>
            <Footer/>
        </div>

    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        data: () => ({
            loading: true,
            currency: null
        }),
        methods: {
          async logout() {
              await this.$store.dispatch('logout')
              this.$router.push('/entry')
              localStorage.setItem('userAuth', 'no');
          }
        },

        computed: {
            name() {
                return this.$store.getters.info.name
            },
            email() {
                return this.$store.getters.info.email
            }
        },
        async mounted() {
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo')
            }
            this.loading = false
        },
        name: "Profile",
        components: {Footer,Header}
    }
</script>

<style scoped>
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
    .bcg {
        background-color: #f4f4f5;
        width: 100vw;
        height: 100vh;
    }
</style>
