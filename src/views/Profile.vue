<template>
    <div class="bcg">
        <loader class="loader" v-if="loading"/>

        <div v-else>
            <Header/>
            <UserProfile/>

            <div class="button-container">
                <a href="#" @click.prevent="logout">Выход</a>
            </div>

            <Footer/>
        </div>

    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import UserProfile from "../components/app/UserProfile";
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


        async mounted() {
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo')
            }
            this.loading = false
        },
        name: "Profile",
        components: {UserProfile, Footer,Header}
    }
</script>

<style scoped>

    a {
        text-decoration: none;
        outline: none;
        display: inline-block;
        margin: 10px 20px;
        padding: 10px 30px;
        position: relative;
        border: 2px solid #679d69;
        color: #679d69;
        font-family: 'Montserrat', sans-serif;
        transition: .4s;
    }
    a:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        border: 2px solid rgba(0,0,0,0);
        transition: .4s;
    }
    .button-container a:hover:after {
        border-color: #679d69;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
    }
    .button-container {
        display: flex;
        justify-content: center;
    }


    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
    .bcg {
        background-color: #f4f4f5;
        width: 100%;
        height: 100%;
    }
</style>
