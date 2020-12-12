<template>
    <div>
        <HeaderMainPage/>
        <InfoGame/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import Sign from "../components/app/Sign";
    import HeaderMainPage from "../components/app/HeaderMainPage";
    import InfoGame from "../components/app/InfoGame";
    export default {
        name: "Menu",
        components: {InfoGame, HeaderMainPage, Sign, Footer, Header}
    }
</script>

<style scoped>



</style>
