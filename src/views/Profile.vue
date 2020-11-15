<template>
    <div>
        <Header/>
            <p>profile</p>
            <a href="#" @click.prevent="logout">
                11111
            </a>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Sign from "../components/app/Sign";
    import Footer from "../components/app/Footer";
    export default {
        methods: {
          logout() {
              console.log('logout')
              this.$router.push('/entry')
          }
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
