<template>
    <div class="bcg">
        <Header/>
            <div class="">
                <ShopTabs/>
                <BankCard
                        :form-data="formData"
                        @input-card-number="updateCardNumber"
                        @input-card-name="updateCardName"
                        @input-card-month="updateCardMonth"
                        @input-card-year="updateCardYear"
                        @input-card-cvv="updateCardCvv"
                />
            </div>
        <Footer/>
    </div>

</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    import ShopTabs from "../components/app/ShopTabs";
    import CardInfo from "../components/app/CardInfo";
    import BankCard from "../components/app/BankCard";
    export default {
      name: "Shop",
      components: {BankCard, CardInfo, ShopTabs, Footer, Header},
        data () {
            return {
                formData: {
                    cardName: '',
                    cardNumber: '',
                    cardMonth: '',
                    cardYear: '',
                    cardCvv: ''
                }
            }
        },
        methods: {
            updateCardNumber (val) {
            },
            updateCardName (val) {
            },
            updateCardMonth (val) {
            },
            updateCardYear (val) {
            },
            updateCardCvv (val) {
            }
        },
    }

</script>

<style scoped >

    .bcg {
        background-color: #f4f4f5;
        width: 100%;
        height: 100%;
    }
</style>
