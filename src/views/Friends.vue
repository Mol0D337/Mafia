<template>
    <div>
        <Header/>
            <p>FRIENDS</p>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        name: "Friends",
        components: {Footer, Header}
    }
</script>

<style scoped>
    div {
        background-color: #f4f4f5;
    }
    p {
        margin: 100px;
        font-size: 60px;
    }
</style>
