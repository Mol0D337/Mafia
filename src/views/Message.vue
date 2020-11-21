<template>
    <div class="bgc">

        <loader class="loader" v-if="loading"/>

        <div v-else>
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
                    <div class="friend__text">Чаты</div>
                </div>
                <div class="inner">
                    <ul class="ul">
                        <div class="scroll"></div>
                        <div class="search">
                            <div class="burger-menu">
                                <div class="menu"></div>
                                <div class="menu"></div>
                                <div class="menu"></div>
                            </div>
                            <div class="friend__search">
                                <input type="text" id="elastic"
                                       v-model="search"
                                       class="friend__search-input" placeholder="Поиск">
                            </div>
                        </div>
                        <li
                                class="li"
                                v-for="(user, u) in filteredUsers"
                                :key="u"
                        >
                            <div class="avatar">
                                <img src="../../public/img/avatar.jpg" alt="">
                            </div>
                            <a href="#">{{user}}</a>
                        </li>
                    </ul>
                    <div class="chat__wrapper">
                        <img src="../../public/img/6f2a3ac93aa49ff3564bbef0db052401.jpg" alt="">
                        <div class="chat__start-message">Please select a chat to start messaging</div>
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
        name: "Career",
        components: {Footer, Header},
        data() {
            return {
                search: '',
                loading: true,
                list: [
                    'MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне',
                    'MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне','MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне','MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне','MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне','MUCTEP_3OM6U',
                    'Dogda',
                    'У любβи нﻉт глаз',
                    'ПУТИН',
                    'weltkind',
                    'Good_Joker',
                    'cheK^',
                    'Гомик в Деревне',




                ],
                categories: [],
            };
        },
        async mounted() {
            this.categories = await this.$store.dispatch('fetchCategories');
            this.loading = false
        },

        computed: {
            filteredUsers () {
                return this.list.filter(user => user.includes(this.search))
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
        height: 785px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .inner {
        display: grid;
        grid-template-columns: 40% 60%;
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

    .burger-menu {

    }
    .menu {
        width: 25px;
        height: 3px;
        background-color: #5b5d67;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    .search {
        margin: 0 0 20px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .friend__search {
        display: flex;
        align-items: center;
    }
    .friend__search-input {
        text-decoration: none;
        font-size: 16px;
        padding: 6px 14px;
        width: 300px;
    }

    .chat__wrapper {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
    }
    .chat__wrapper img{
        width: 600px;
        height: 704px;
        border-bottom-right-radius: 5px;
    }

    .chat__start-message {
        opacity: 50%;
        background: #2f363c;
        border-radius: 20px;
        color: white;
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 18px;
        padding: 7px 25px;
        text-align: center;
        position: absolute;
        left: 20%;
        top: 45%;
    }

    .scroll::-webkit-scrollbar { /* 1 - скроллбар */
        width: 20px;
        height: 20px;
        background-color: #000;
    }

    ::-webkit-scrollbar-button { /* 2 - кнопка */

    }

    ::-webkit-scrollbar-track { /* 3 - трек */
    }

    ::-webkit-scrollbar-track-piece { /* 4 - видимая часть трека */
    }

    .scroll::-webkit-scrollbar-thumb { /* 5 - ползунок */
        border-radius: 2px;
        background-color: #d1d1d1;
    }

    ::-webkit-scrollbar-corner { /* 6 - уголок */
    }

    ::-webkit-resizer { /* 7 - изменение размеров */
    }
    .ul {

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
        align-items: flex-start;
    }
    .avatar {
        display: flex;
    }
    .avatar img {
        border-radius: 99px;
        width: 60px;
        height: 60px;
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
        background-color: #9146ff;
        text-decoration: none;
        font-family: "IBM Plex Sans", sans-serif;
    }
    .btn:hover {
        background-color: #da4553;
    }





</style>
