<template>
    <div>
        <div class="bcg">
            <HeaderMainPage/>
        </div>
        <Sign/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import Sign from "../components/app/Sign";
    import HeaderMainPage from "../components/app/HeaderMainPage";
    export default {
        name: "Menu",
        components: {HeaderMainPage, Sign, Footer, Header}
    }
</script>

<style scoped>

    .bcg {
        width: 100vw;
        height: 100vh;
        background: url("../../public/img/8.png") no-repeat center center;
        background-size: cover;
    }

</style>
