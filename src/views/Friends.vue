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
                    <div class="friend__text">Друзья</div>
                    <div class="friend__sum">{{list.length}}</div>
                </div>

                <div class="search">
                    <div class="friend__search">
                        <input type="text" id="elastic"
                               v-model="search"
                               class="friend__search-input" placeholder="Найти Друга">
                    </div>
                    <div class="friend__search-new">
                        <router-link
                                class="lol"
                                to='/friends/new'
                                active-class="active"
                        >
                            <button class="friend__search-input-new">Поиск Игроков</button>
                        </router-link>
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
                        <div class="lol">
                          <button class="btn">Удалить</button>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>

    </div>
</template>

<script>
    import Header from "../components/app/Header";
    import Footer from "../components/app/Footer";
    export default {
        name: "Friends",
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
                categories: [],
            };
        },
        async mounted() {
            this.categories = await this.$store.dispatch('fetchCategories')
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
    }
    .search {
        margin: 0 0 20px 40px;
        display: flex;
        align-items: center;

    }
    .friend__search-input, .friend__search-input-new{
        text-decoration: none;
        font-size: 16px;
        padding: 6px 14px;
        width: 300px;
    }
    .friend__search-new {
        margin-left: 30px;
    }

    .ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
    .avatar {
        display: flex;
    }
    .avatar img {
        border-radius: 99px;
        width: 60px;
        height: 60px;
    }
    .li:hover a {
        display: none;
    }
    .li .lol{
        display: none;
    }
    .li:hover .lol {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .lol {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        text-decoration: none;
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
