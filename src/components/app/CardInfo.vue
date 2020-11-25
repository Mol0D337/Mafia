<template>
  <div class="container">
    <div class="left">
      <h1 class="text-center">Карта банка</h1>
      <ul style="font-size: 16px; margin: 20px; line-height: 150%;">
        <li>402312</li>
        <li>402531</li>
        <li>535946</li>
        <li>540616</li>
      </ul>
      <div class="card-wrapper">
        <div class="card-back">
          <div class="card-back-line"></div>
          <input type="text" id="cvv">
        </div>
        <div class="card-front" ref="front">
          <div
                  class="cardimage"
               ref="cardimage"></div>
          <img src=""
                  class="cardlogo"
               ref="cardlogo">

          <input type="text" id="card-number" v-model="cardNum" @input="cardValidate">
          <input type="text" id="card-to-month">
          <input type="text" id="card-to-year">
        </div>
      </div>



    </div>
  </div>
</template>

<script >
  import CardInfo from 'card-info';
  export default {
    name: "CardInfo",
    data () {
      return {
        cardNum: '',
      };
    },
    methods: {
      cardValidate () {
        if (this.cardNum.trim().length > 5) {
          let cardInfo = new CardInfo(this.cardNum.trim(), {
            banksLogosPath: '../../../node_modules/card-info/dist/banks-logos/',
            brandsLogosPath: '../../../node_modules/card-info/dist/brands-logos/',
          });
          console.log(cardInfo.bankName);
          console.log(cardInfo.bankLogo);
          console.log(cardInfo.brandLogo);
          console.log(cardInfo.backgroundColor);


          this.$refs.cardimage.src = cardInfo.bankLogo;
          this.$refs.cardlogo.src = cardInfo.brandLogo;
          this.$refs.front.style.backgroundColor = cardInfo.backgroundColor;
        }
      }
    },
  }
</script>

<style scoped>

  * {
    margin: 0;
    box-sizing: border-box;

  }
  .container {
    font-family: 'IBM Plex Sans', sans-serif;
    max-width: 800px;
    margin: 50px auto;

  }
  .left {
    padding: 25px;
    font-family: 'IBM Plex Sans', sans-serif;
    border-radius: 5px;
    background-color: #fff;
    border-bottom: 2px solid #e6e6e6;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
  }
  .text-center {
    text-align: center;
  }
  h1 {
    margin-bottom: 40px;
  }
  .card-wrapper {
    width: 751px;
    height: 381px;
    /* border: 1px solid grey; */
    position: relative;
  }
  .card-back {
    right: 0;
    bottom: 0;
    background: #ececec;
  }
  .card-back, .card-front {
    width: 535px;
    height: 343px;
    border: 1px solid grey;
    border-radius: 15px;
    position: absolute;
  }
  .card-back-line {
    width: 100%;
    height: 80px;
    background: #c0c0c0;
    position: absolute;
    top: 50px;
  }
  #cvv {
    position: absolute;
    right: 40px;
    bottom: 112px;
    width: 100px;
    padding: 5px;
    font-size: 40px;
    text-align: center;
  }
  .card-front {
    background: #fff;
    /* background: #de1612; */
  }
  .card-back, .card-front {
    width: 535px;
    height: 343px;
    border: 1px solid grey;
    border-radius: 15px;
    position: absolute;
  }
  .cardimage {
    background: url('../../../node_modules/card-info/dist/banks-logos/ru-otp.svg');
    height: 60px;
    width: 400px;
    position: absolute;
    left: 30px;
    top: 40px;
  }
  .cardlogo {
    position: absolute;
    bottom: 40px;
    right: 30px;
    background-size: 78px 50px;
    width: 78px;
    height: 50px;
  }
  #card-number {
    position: absolute;
    width: 90%;
    margin: 0 5%;
    background: #f1f1f1;
    font-size: 40px;
    padding: 5px;
    border: none;
    top: 145px;
    outline: none;
  }
  #card-to-year, #card-to-month {
    position: absolute;
    background: #f1f1f1;
    font-size: 40px;
    padding: 5px;
    outline: none;
    border: none;
    width: 60px;
    text-align: center;
    bottom: 40px;
    left: 5%;
  }
  #card-to-year {
    left: 20%;
  }
  #card-to-year, #card-to-month {
    position: absolute;
    background: #f1f1f1;
    font-size: 40px;
    padding: 5px;
    outline: none;
    border: none;
    width: 60px;
    text-align: center;
    bottom: 40px;
  }

</style>
