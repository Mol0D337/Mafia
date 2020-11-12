<template>
    <div>
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
        name: "Profile",
        components: {Footer, Sign, Header}
    }
</script>

<style scoped>
    div {
        background-color: #f4f4f5;
    }
</style>
