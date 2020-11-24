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
        <div class="card-front">
          <img src="" alt="" class="card-image">
          <img src="" alt="" class="card-logo">
          <input type="text" id="card-number">
          <input type="text" id="card-to-month">
          <input type="text" id="card-to-year">
        </div>
      </div>



    </div>
  </div>
</template>

<script>
  export default {
    name: "CardInfo"
  }
</script>

<style scoped>

  * {
    margin: 0;
    box-sizing: border-box;
  }
  .container {
    max-width: 1200px;
    margin: 40px auto;
    font-family: "IBM Plex Sans" sans-serif;
  }
  .left {
    width: 70%;
    float: left;
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
  .card-image {
    height: 60px;
    position: absolute;
    left: 30px;
    top: 40px;
  }
  .card-logo {
    height: 50px;
    position: absolute;
    bottom: 40px;
    right: 30px;
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
    left: 5%;
  }

</style>
