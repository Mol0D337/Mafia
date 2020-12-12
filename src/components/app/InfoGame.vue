<template>
  <div>
    <div class="bcg">
      <div class="wrapper">
        <div class="wrapper__top">
          Для того чтобы играть просто зарегистрируйтесь.
        </div>
        <div class="button-container">
          <router-link
                  tag="a"
                  to="/profile"
          >
            Зарегистрироваться
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "InfoGame"
  }
</script>

<style scoped>
  .wrapper {
    margin: 0 auto;
    width: 1000px;
  }

  .wrapper__top {
    padding-top: 100px;
    margin-bottom: 50px;
    text-align: center;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 30px;
    color: #5b5d67;
  }
  .bcg {
    background-color: #f4f4f5;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    outline: none;
    display: inline-block;
    margin: 10px 20px;
    padding: 10px 30px;
    position: relative;
    border: 2px solid #679d69;
    color: #679d69;
    font-family: 'Montserrat', sans-serif;
    transition: .4s;
  }
  a:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0,0,0,0);
    transition: .4s;
  }
  .button-container a:hover:after {
    border-color: #679d69;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
  .button-container {
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
  }
</style>
