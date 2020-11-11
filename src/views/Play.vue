<template>
    <div>
        <Header/>
            <p>Play</p>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        name: "Play",
        components: {Footer, Header}
    }
</script>

<style scoped>
    p {
        margin: 100px;
        font-size: 60px;
    }
</style>
