<template>
    <div class="bcg">
        <Header/>
            <Sign/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Sign from "../components/app/Sign";
    import Footer from "../components/app/Footer";
    export default {
        name: "ProfileLogin",
        components: {Footer, Sign, Header},

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
