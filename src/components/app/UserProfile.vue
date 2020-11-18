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
                    <div class="img"></div>
                </div>

                <div class="stat">
                    <div class="nickname">{{name}}</div>


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
                    <div class="img"></div>
                    <button class="btn__fix" @click.prevent="fixphoto">Загрузить аватар</button>
                </div>

                <div class="fix">
                    <div class="fix__name">
                        <input type="text" v-model="name" >
                        <button class="btn__fix" @click.prevent="fname">Изменить Ник</button>
                    </div>

                    <div class="fix__name">
                        <input type="email" v-model="email" >
                        <button class="btn__fix" @click.prevent="femail">Изменить Email</button>
                    </div>

                    <div class="fix__name">
                        <input type="password" v-model="password" >
                        <button class="btn__fix" @click.prevent="fixpassword">Изменить Пароль</button>
                    </div>
                </div>


            </div>

        </div>

        <div id="content-tab3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur culpa, dolor eum eveniet illo illum, libero perferendis quam quibusdam repellat, totam voluptatibus. Accusantium consequatur cum cumque deleniti dicta dignissimos distinctio eos est facilis hic molestiae neque nihil nisi omnis optio quae quo quod, repellat repellendus saepe sint temporibus totam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores autem corporis dolorum fugit laboriosam, minima odio sit ullam. Accusamus aperiam architecto doloribus eum illo numquam perspiciatis quia rem similique vel? Atque dignissimos distinctio impedit, odit quis temporibus voluptate. Beatae, impedit in nobis qui quibusdam temporibus vel. Obcaecati, tempore?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor impedit laboriosam molestias, natus porro temporibus tenetur voluptatem voluptatum! Porro?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iste perferendis placeat quaerat quia sit! Ab deserunt, exercitationem facilis ipsam iure labore quibusdam repudiandae ullam vero vol
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        computed: {
            name() {
                return this.$store.getters.info.name
            },
            email() {
                return this.$store.getters.info.email
            },
            password() {
                return this.$store.getters.info.password
            }
        },
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
        background: #2f363c;
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

</style>
