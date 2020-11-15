<template>
    <div>
        <HeaderMainPage/>
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



</style>
