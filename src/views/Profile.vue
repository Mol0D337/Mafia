<template>
    <div>
        <Header/>
        <loader v-if="loading"/>

        <div v-else>
            <p>{{name}}</p>
            <p>{{email}}</p>
            <a href="#" @click.prevent="logout">
                11111
            </a></div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Sign from "../components/app/Sign";
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
    div {
        background-color: #f4f4f5;
    }
</style>
