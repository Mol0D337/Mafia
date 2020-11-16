<template>
    <div class="bcg">
        <Header/>
            <ShopTabs/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import ShopTabs from "../components/app/ShopTabs";
    export default {
        name: "Collection",
        components: {ShopTabs, Footer, Header}
    }
</script>

<style scoped>
    .bcg {
        background-color: #f4f4f5;
        width: 100%;
        height: 100%;
    }
</style>
