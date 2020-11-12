<template>
    <div>
        <Header/>
            <p>Career</p>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        name: "Career",
        components: {Footer, Header}
    }
</script>

<style scoped>
    div {
        max-width: ;
        background-color: #eeeeee;
    }
    p {
        margin: 100px;
        font-size: 60px;
    }
</style>
