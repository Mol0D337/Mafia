<template>
    <div>
        <Header/>
            <chat/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import Chat from "../php/chat";
    export default {
        name: "Play",
        components: {Chat, Footer, Header}
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
