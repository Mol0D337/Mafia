<template>
    <div class="bcg">
        <Header/>
            <div class="">
                <ShopTabs/>
                <CardInfo/>
            </div>
        <Footer/>
    </div>

</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import ShopTabs from "../components/app/ShopTabs";
    import CardInfo from "../components/app/CardInfo";
    export default {
        name: "Shop",
        components: {CardInfo, ShopTabs, Footer, Header}
    }
</script>

<style scoped>
    .bcg {
        background-color: #f4f4f5;
        width: 100%;
        height: 100%;
    }
</style>
