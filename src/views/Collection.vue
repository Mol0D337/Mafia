<template>

  <loader class="loader" v-if="loading"/>

  <div v-else>
  <div class="bgc">
    <Header/>
    <div class="wrapper">
      <div class="friends">
        <router-link
                class="router-link"
                to="/profile"
                active-class="active"
        >
          <div class="user__name"
               v-for="c of categories"
          >
            {{c.name}}
          </div>
        </router-link>
        <div class="arrow"><i class="fas fa-caret-right"></i></div>
        <div class="friend__text">Инвентарь</div>
        <div class="friend__sum">{{list.length}}</div>
        <router-link
          to="/trades"
        >
          <button class="btn">Предложения обмена</button>
        </router-link>
      </div>

      <div class="search">
        <div class="friend__search">
          <input type="text" id="elastic"
                 v-model="search"
                 class="friend__search-input"
                 placeholder="Введите слова для поиска предметов">
          <input class="input" type="text">
          <input class="input" type="text">
        </div>
      </div>

      <div class="kek">

        <div
                class="Item _q1 _inventory _clickable"
                v-for="(item, i) in filteredItems"
                :key="i"
        >
          <div class="Item-image">
            <div class="img">
              <img src="../../public/img/case.png" alt="">
            </div>
          </div>
          <div class="Item-name">{{item}}</div>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
  </div>
</template>

<script>
  import Header from "../components/app/Header";
  import Footer from "../components/app/Footer";
  export default {
    name: "Collection",
    components: {Footer, Header},
    data() {
      return {
        search: '',
        loading: true,
        list: [
          'Кейс' ,
          'Кейс' ,
          'Кейс',
          "a",
          'b',
        ],
        categories: [],
      };
    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');
      this.loading = false
    },

    computed: {
      filteredItems () {
        return this.list.filter(item => item.includes(this.search))
      },
    },
  }
</script>

<style scoped>

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .bgc{
    background-color: #f4f4f5;
    width: 100%;
    height: 100%;
  }
  .wrapper {
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
  .user__name {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 30px;
    color: #3bafda;
  }
  .user__name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .router-link {
    text-decoration: none;
  }
  .fa-caret-right {
    padding-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 24px;
  }
  .friends {
    padding: 20px 40px;
    display: flex;
  }
  .friend__text {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 30px;
    color: #5b5d67;
  }
  .friend__sum {
    margin-top: 5px;
    margin-left: 15px;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 25px;
    color: #679d69;
    margin-right: 375px;
  }
  .search {
    margin: 0 0 20px 40px;
    display: flex;
    align-items: center;

  }
  .friend__search-input{
    text-decoration: none;
    font-size: 16px;
    padding: 6px 14px;
    width: 500px;
  }
  .input {
    margin-left: 15px;
    font-size: 16px;
    padding: 6px 14px;
    width: 195px;
  }


  /*=======================*/

  .kek {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    margin: 15px 40px;
  }
  .inventory .inventory-items .Item {
    width: 100%;
  }
  .Item._inventory {
    width: 220px;
    height: 220px;
  }

  .Item._clickable {
    cursor: pointer;
  }
  .Item {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 5px;
    width: 150px;
    height: 150px;
  }
  .Item-image {
    flex: 1 0 1px;
    border: 1px solid #e9eaec;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    padding: 0 20px;
    height: 1px;
    transform: scale(1);
  }
  .Item-image:hover {
    background-color: #f1f1f1;
  }
  .img img{
    width: 100%;
    height: 100%;
    background: center/contain no-repeat;
  }
  .Item._inventory .Item-name {
    height: 38px;
  }
  .Item._q1 .Item-name {
    background: linear-gradient(30deg,#59bbe0,#269ecb);
  }
  .Item-name {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 5px 5px;
    padding: 0 10px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    line-height: 15px;
  }











  /*================-======*/
  .li a {
    text-decoration: none;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 20px;
    color: #5b5d67;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }

  .avatar img {
    border-radius: 99px;
    width: 60px;
    height: 60px;
  }
  .li:hover a {
    display: none;
  }
  .li button{
    display: none;
  }
  .li:hover button {
    display: block;
  }



  .btn {

    width: 210px;
    height: 40px;
    border: none!important;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: background-color .25s,color .25s;
    background-color: #9146ff;
    text-decoration: none;
    font-family: "IBM Plex Sans", sans-serif;
  }
  .btn:hover {
    background-color: #8cc152;
  }





</style>
