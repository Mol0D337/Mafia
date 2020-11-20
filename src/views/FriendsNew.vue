<template>
  <div class="bgc">
    <Header/>
    <div class="wrapper">
      <div class="friends">
        <router-link
          class="router-link"
          to="/friends"
          active-class="active"
        >
          <i class="fas fa-arrow-circle-left"></i>
        </router-link>
        <div class="friend__text">Поиск Игроков</div>
      </div>

      <div class="search">
        <div class="friend__search">
          <input type="text" id="elastic"
                 v-model="search"
                 class="friend__search-input" placeholder="Найти Игрока">
        </div>
      </div>
      <ul class="ul">
        <li
                class="li"
                v-for="(user, u) in filteredUsers"
                :key="u"
        >
          <div class="avatar">
            <img src="../../public/img/avatar.jpg" alt="">
          </div>
          <a href="#">{{user}}</a>
          <div class="lol"><button class="btn">Добавить</button></div>

        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/app/Header";
  import Footer from "../components/app/Footer";
  export default {
    name: "FriendsNew",
    components: {Footer, Header},
      data() {
    return {
      search: '',
      list: [
        'MUCTEP_3OM6U',
        'Dogda',
        'У любβи нﻉт глаз',
        'ПУТИН',
        'weltkind',
        'Good_Joker',
        'cheK^',
        'Гомик в Деревне',
        'Hardwell',
        'FoXy',
        'Твой Mr.PropeR',
        '+Yeb@shu_v_k@shu+',
        'FuRRRoR',
        'BOND 007',
        'DragonX',
        'Your Die',
        'Lolikill',
        'Печень Сталина',
        '-Turbo_Bot-',
        'Эрагон',
        'ВЫЛЫСЫПЫДЫСТ ',
        '๏̯͡๏ ищу ♥ теЂя ๏̯͡๏',
        '_ХиТросТь_',
        'без трусиков',
        'MUCTEP_3OM6U',
        'Dogda',
        'У любβи нﻉт глаз',
        'ПУТИН',
        'weltkind',
        'Good_Joker',
        'cheK^',
        'Гомик в Деревне',
        'Hardwell',
        'FoXy',
        'Твой Mr.PropeR',
        '+Yeb@shu_v_k@shu+',
        'FuRRRoR',
        'BOND 007',
        'DragonX',
        'Your Die',
        'Lolikill',
        'Печень Сталина',
        '-Turbo_Bot-',
        'Эрагон',
        'ВЫЛЫСЫПЫДЫСТ ',
        '๏̯͡๏ ищу ♥ теЂя ๏̯͡๏',
        '_ХиТросТь_',
        'без трусиков',
      ],
    };
  },

  computed: {
    filteredUsers () {
      return this.list.filter(user => user.includes(this.search))
    },
  },
  }
</script>

<style scoped>
.bcg {
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
.friends {
  padding: 20px 40px;
  display: flex;
  align-items: center;
}
.router-link {
  text-decoration: none;
  margin-right: 15px;
}
.fa-arrow-circle-left {
  font-size: 34px;
  color: #5b5d67;
}
.friend__text {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 30px;
  color: #5b5d67;
}
.search {
  margin: 0 0 20px 40px;
  display: flex;
  align-items: center;

}
.friend__search-input{
  font-size: 16px;
  padding: 6px 14px;
  width: 300px;
}
.ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
.lol {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}

.btn {
  width: 110px;
  height: 30px;
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
  background-color: #6b99ce;
  text-decoration: none;
  font-family: "IBM Plex Sans", sans-serif;
}
.btn:hover {
  background-color: #679d69;
}


.li {
  padding: 10px 15px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  color: #5b5d67;
  list-style: none;
  display: flex;
}
.li:hover {
  background-color: #f1f1f1;
}
.li a {
  text-decoration: none;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  color: #5b5d67;
  padding-left: 15px;
  display: flex;
  align-items: center;
}
.li a.hide {
  display: none;
}
.avatar {
  display: flex;
}
.avatar img {
  border-radius: 99px;
  width: 60px;
  height: 60px;
}

</style>
