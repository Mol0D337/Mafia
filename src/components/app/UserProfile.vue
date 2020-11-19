<template>
    <div class="tabs">
        <input id="tab1" type="radio" name="tabs" checked>
        <label for="tab1">Профиль</label>

        <input id="tab2" type="radio" name="tabs">
        <label for="tab2">Настройки</label>

        <input id="tab3" type="radio" name="tabs">
        <label for="tab3">Социальные сети</label>

        <div id="content-tab1">

            <div class="profile">
                <div class="avatar">
                    <div class="img">
                        <img src="../../../public/img/avatar.jpg" alt="">
                    </div>
                </div>

                <div class="stat">
                    <div class="nickname"
                         v-for="c of categories"
                    >
                        {{c.name}}
                    </div>

                    <div class="level">
                        <div class="block__left">
                            <div class="cycle">
                                <img src="../../../public/img/image__lvl-blue.png" alt="">
                                <div class="text">62</div>
                            </div>
                        </div>

                        <div class="block__right">
                            <div class="block__right-top">
                                <div class="lvl">62K</div>
                                <div class="xp">XP</div>
                            </div>
                            <div class="block__right-bottom">

                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item1"></div>
                                <div class="item1"></div>
                                <div class="item1"></div>

                            </div>
                            <div class="xp__from">
                                62,730/63,000
                            </div>

                        </div>

                    </div>

                    <div class="tabl">
                        <div class="game">1488</div>
                        <div class="info">матчей</div>
                        <div class="win">307</div>
                        <div class="info">побед за мафия</div>
                        <div class="win">249</div>
                        <div class="info">побед за мир.жит.</div>
                        <div class="friends">14</div>
                        <div class="info">друзей</div>
                        <a href="#">все > </a>
                    </div>

                </div>
            </div>
        </div>

        <div id="content-tab2">

            <div class="setting">
                <div class="avatar">
                    <div class="img">
                        <img src="../../../public/img/avatar.jpg" alt="">
                    </div>
                    <button class="btn__fix" >Загрузить аватар</button>
                </div>

                <div class="fix">
                    <form action="" @submit.prevent="nameHandler">
                        <div class="fix__name">
                            <input type="text" v-model="name" placeholder="Введите Новый Ник">
                            <button class="btn__fix" type="submit" >Изменить Ник</button>
                        </div>
                    </form>

                    <form action="" @submit.prevent="emailHandler">
                        <div class="fix__name" >
                            <input type="email" v-model="email" placeholder="Введите Новый Email">
                            <button class="btn__fix" >Изменить Email</button>
                        </div>
                    </form>

                    <form action="" @submit.prevent="passwordHandler">
                        <div class="fix__name" >
                            <input type="password" v-model="password" placeholder="Введите Новый Пароль">
                            <button class="btn__fix" >Изменить Пароль</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>

        <div id="content-tab3">
            <div class="inner">
                <div class="wrapper__soc-network1">
                    <div class="discord">
                        <i class="fab fa-discord"></i>
                        <div class="discord__name">Discord</div>
                    </div>
                    <div class="paragraph">В данный момент привязка Discord ничего не делает, но мы работаем над этим!</div>

                    <div class="paragraph">
                        <a href="#" class="button-discord">Привязать</a>
                    </div>
                </div>
                <div class="wrapper__soc-network2">
                    <div class="vk">
                        <i class="fab fa-vk"></i>
                        <div class="discord__name">Вконтакте</div>
                    </div>
                    <div class="paragraph">Привязав аккаунт Вконтакте, вы сможете входить на сайт в один клик.</div>

                    <div class="paragraph">
                        <a href="#" class="btn-vk">Привязать</a>
                    </div>
                </div>
                <div class="wrapper__soc-network3">
                    <div class="discord">
                        <i class="fab fa-google"></i>
                        <div class="discord__name">Google</div>
                    </div>
                    <div class="paragraph">В данный момент привязка Google ничего не делает, но мы работаем над этим!</div>

                    <div class="paragraph">
                        <a href="#" class="button-discord">Привязать</a>
                    </div>
                </div>
                <div class="wrapper__soc-network4">
                    <div class="discord">
                        <i class="fab fa-twitch"></i>
                        <div class="discord__name">Twitch</div>
                    </div>
                    <div class="paragraph">В данный момент привязка Twitch ничего не делает, но мы работаем над этим!</div>

                    <div class="paragraph">
                        <a href="#" class="button-twitch">Привязать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        data: () => ({
            categories: [],
        }),

        name: "UserProfile",
        async mounted() {
            this.categories = await this.$store.dispatch('fetchCategories')
        },
        methods: {
            async nameHandler() {
                const name = {name: this.name}
                await this.$store.dispatch('updateCategory1', name)
                alert('1')
            },
            async emailHandler() {
                const email = {email: this.email}
                await this.$store.dispatch('updateCategory2', email)
                alert('2')
            },
            async passwordHandler() {
                const password = {password: this.password}
                await this.$store.dispatch('updateCategory3', password)
                alert('3')
            },

        },
        computed: {
            name: {
                get () {
                    return this.$store.getters.getName;
                },
                set (value) {
                    this.$store.commit('SET_NAME', value);
                }
            },
            email: {
                get () {
                    return this.$store.getters.getEmail;
                },
                set (value) {
                    this.$store.commit('SET_EMAIL', value);
                }
            },
            password: {
                get () {
                    return this.$store.getters.getPassword;
                },
                set (value) {
                    this.$store.commit('SET_PASSWORD', value);
                }
            },
        }

    }
</script>



<style scoped>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box
    }

    #content1, #content2, #content3, #content4{
        display: none;
    }

    .tabs {
        border-radius: 5px;
        background-color: #fff;
        border-bottom: 2px solid #e6e6e6;
        box-shadow: 0 0 30px rgba(0,0,0,.1);
        /*background: linear-gradient(180deg, #6c7174,#60686b,#5f605a ,#56534c,#302e22);*/
        min-width: 320px;
        max-width: 800px;
        padding: 0;
        margin: 200px auto 20px;

        font-family: 'IBM Plex Sans', sans-serif;
        user-select: none;
        box-sizing: border-box;
    }
    /* Стили секций с содержанием */
    .tabs>div {
        display: none;
        margin: 0 20px;
        border-top: 1px solid #9aa1a7;
    }

    /* Прячем чекбоксы */
    .tabs>input {
        display: none;
        position: absolute;
    }
    /* Стили переключателей вкладок (табов) */
    .tabs>label {
        margin-left: 20px;
        display: inline-block;
        padding: 12px 0 7px;
        font-weight: 500;
        text-align: center;
        color: #5b5d67;
    }
    /* Изменения стиля переключателей вкладок при наведении */

    .tabs>label:hover {
        border-bottom: 3px solid #2f363c;
        cursor: pointer;
    }
    /* Стили для активной вкладки */
    .tabs>input:checked+label {
        border-bottom: 3px solid #2f363c;
    }
    /* Активация секций с помощью псевдокласса :checked */
    #tab1:checked~#content-tab1, #tab2:checked~#content-tab2, #tab3:checked~#content-tab3, #tab4:checked~#content-tab4 {
        display: block;
    }


    .profile {
        display: flex;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .avatar {
        border-radius: 99px;
        width: 200px;
        height: 200px;
        border: 4px solid #8cc152;

        padding: 2px;
    }
    .img {

        width: 188px;
        height: 188px;
        border-radius: 99px;
        margin-bottom: 20px;
    }
    .img img {
        width: 188px;
        height: 188px;
        border-radius: 99px;
        margin-bottom: 20px;
    }
    .nickname {
        padding-bottom: 3px;
        margin-bottom: 5px;
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 30px;
        border-bottom: 1px solid #9aa1a7;

    }
    .stat {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 20px;
        margin-left: 50px;
        color: #5b5d67;

    }

    .tabl {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        margin-top: 15px;
    }

    .tabl div {
        width: 75px;
        height: 28px;
    }

    .tabl a {
        text-decoration: none;
        color: #3bafda;
        font-size: 14px;
        display: contents;
    }

    .tabl a:hover {
        text-decoration: revert;
    }

    .info {
        font-size: 12px;
        color: #679d69;
    }

    /*======================================================*/

    .setting {
        display: inline-flex;
        margin-top: 15px;
        margin-bottom: 30px;
    }
    .fix__name {
        margin-left: 50px;
        display: grid;
        width: 260px;
        height: 85px;
        box-sizing: border-box;
    }
    .fix__name input {
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 10px;
        padding: 0 14px;
    }

    .fix {
        display: grid;
    }


    .btn__fix {
        text-decoration: none;
        outline: none;
        display: inline-block;
        padding: 0 20px;
        overflow: hidden;
        border: 2px solid;
        border-bottom-width: 4px;
        font-family: "IBM Plex Sans", sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        color: #679d69;
        background: rgba(255,255,255,1);
        transition: color .3s, background .5s;
    }
    .btn__fix:hover {
        animation: stripes .75s infinite linear;
        background: linear-gradient(45deg, rgba(30,255,188,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(30,255,188,1) 50%,      rgba(30,255,188,1) 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1));
        background-size: 10px 10px;
        color: #8cc152;
    }
    @keyframes stripes {
        0% {background-position: 0 0;}
        100% {background-position: 50px 0;}
    }


    /*======================================================*/

    .level {
        display: flex;
        border-bottom: 1px solid #9aa1a7;
    }
    .block__left {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cycle {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .cycle img {
        width: 85px;
        height: 85px;
    }
    .text {
        position: absolute;
        font-weight: 900;
        font-size: 48px;
    }
    .block__right {
        width: 385px;
        height: 100px;
        margin-left: 10px;
    }

    .block__right-top {
        display: flex;
        margin-top: 10px;

    }
    .lvl {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;

    }
    .xp {
        margin-left: 10px;
        width: 40px;
        height: 40px;
        background: #3bafda;
        border-radius: 99px;
        color: white;
        font-weight: 700;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .block__right-bottom {
        margin-top: 10px;
        display: flex;
        align-items: center;
    }
    .item {
        margin-right: 2px;
        width: 42px;
        height: 6px;
        background: #3bafda;
    }
    .item1 {
        margin-right: 2px;
        width: 42px;
        height: 6px;
        background: rgba(45,110,185,.4);
    }
    .xp__from {
        margin-top: 7px;
        text-align: center;
        font-size: 13px;
        color: #679d69;
    }


/*    +++++++++++++++++++++++++++++++++++++++++++++++++++*/

    .inner {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        font-family: "IBM Plex Sans" sans-serif;
    }

    .wrapper__soc-network1 {
        width: 380px;
        height: 150px;
        border-bottom: 1px solid #9aa1a7;
        border-right: 1px solid #9aa1a7;
    }
    .wrapper__soc-network2 {
        width: 380px;
        height: 150px;
        border-bottom: 1px solid #9aa1a7;
    }
    .wrapper__soc-network3 {
        width: 380px;
        height: 150px;
        border-right: 1px solid #9aa1a7;
    }
    .wrapper__soc-network4 {
        width: 380px;
        height: 150px;

    }

    .discord {
        display: flex;
        align-items: center;
        margin: 15px 20px 10px;
    }
    .fa-discord{
        color: #6f8cce;
        font-size: 22px;
    }
    .discord__name {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 800;
        color: #5b5d67;
    }
    .button-discord {
        width: 110px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none!important;
        border-radius: 5px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #6f8cce;
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
    }
    .btn-vk  {
        width: 110px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
        background-color: #4680c2;
    }
    .button-twitch  {
        width: 110px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
    }
    .button-twitch:hover {
        background-color: #a76bff;
    }
    .button-discord:hover {
        background-color: #8ea1e1;
    }
    .btn-vk:hover {
        background-color: #6b99ce;
    }
    .paragraph {
        margin: 10px 20px;
        font-size: 15px;
        font-weight: 500;
        color: #5b5d67;
        line-height: 1.2rem;
    }
    .paragraph a {
        text-decoration: none;
    }

    .fa-vk {
        color: #4680c2;
        font-size: 22px;
    }

    .fa-google {
        color: #4285f4;
        font-size: 22px;
    }
    .vk {
        display: flex;
        align-items: center;
        margin: 15px 20px 10px;
    }
    .fa-twitch {
        color: #a76bff;
        font-size: 22px;
    }



</style>
