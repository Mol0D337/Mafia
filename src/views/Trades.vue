<template>
  <div class="bgc">
    <Header/>
    <div class="wrapper">
      <div class="op">
        <img src="../../public/img/oops.png" alt="">
      </div>
      <div class="inner">
        <router-link
                class="router-link"
                to="/collection"
                active-class="active"
        >
          <i class="fas fa-arrow-circle-left"></i>
        </router-link>
        <div class="massage">У вас нет активных предложений обмена.</div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/app/Header";
  import Footer from "../components/app/Footer";
  export default {
    name: "Trades",
    components: {Footer, Header}
  }
</script>

<style scoped>
  .bgc{
    background-color: #f4f4f5;
    width: 100%;
    height: 100%;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
    margin: 50px auto;
    width: 1000px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 2px solid #e6e6e6;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
    font-family: 'IBM Plex Sans', sans-serif;
    color: #5b5d67;
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  .massage {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "IBM Plex Sans", sans-serif;
    color: #5b5d67;
    font-weight: 600;
    font-size: 25px;
  }
  .router-link {
    text-decoration: none;
    margin-right: 15px;
  }
  .fa-arrow-circle-left {
    font-size: 34px;
    color: #5b5d67;
  }
  .fa-arrow-circle-left:hover {
    color: #9146ff;
  }
</style>
