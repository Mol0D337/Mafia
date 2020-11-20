<template>

  <div class="bgc">
    <Header/>
    <div class="wrapper">
      <div class="op">
        <img src="../../public/img/oops.png" alt="">
      </div>
      <div class="massage">Вам Необходимо
        <router-link
                class="link"
                to="/entry"
                active-class="active"
        >
          Авторизироваться/Зарегестрироваться
        </router-link>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
  import Header from "../components/app/Header";
  import Footer from "../components/app/Footer";
  export default {
    name: "UserNotLogin",
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
  .massage {
    margin-top: 20px;
    margin-bottom: 65px;
    font-family: "IBM Plex Sans", sans-serif;
    color: #5b5d67;
    font-weight: 600;
    font-size: 25px;
  }
  .link {
    text-decoration: none;
    list-style: none;
    color: #3bafda;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>
