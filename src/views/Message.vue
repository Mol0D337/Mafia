<template>

    <loader class="loader" v-if="loading"/>

    <div v-else>
        <div class="bgc">
            <Header/>
            <div class="wrapper">
                <div class="friends">
                    <router-link
                            class="router-link"
                            to="/profile"
                            active-class="active"
                    >
                        <div class="user__name"
                             v-for="c of categories"
                        >
                            {{c.name}}
                        </div>
                    </router-link>
                    <div class="arrow"><i class="fas fa-caret-right"></i></div>
                    <div class="friend__text">Чаты</div>
                </div>



            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        name: "Career",
        components: {Footer, Header},
        data() {
            return {
                search: '',
                loading: true,
                categories: [],
            };
        },
        async mounted() {
            this.categories = await this.$store.dispatch('fetchCategories');
            this.loading = false
        },
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
    .bgc{
        background-color: #f4f4f5;
        width: 100%;
        height: 100%;
    }
    .wrapper {
        border-radius: 5px;
        margin: 50px auto;
        width: 1000px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom: 2px solid #e6e6e6;
        box-shadow: 0 0 30px rgba(0,0,0,.1);
        font-family: 'IBM Plex Sans', sans-serif;
        color: #5b5d67;
    }
    .user__name {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 30px;
        color: #3bafda;
    }
    .user__name:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .router-link {
        text-decoration: none;
    }
    .fa-caret-right {
        padding-top: 10px;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 24px;
    }
    .friends {
        padding: 20px 40px;
        display: flex;
    }
    .friend__text {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 30px;
        color: #5b5d67;
    }






</style>
