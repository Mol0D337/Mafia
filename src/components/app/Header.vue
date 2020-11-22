<template>

    <div class="header">
        <ul class="header__items">

            <router-link
                    tag="li"
                    class="header__item-left"
                    to="/"
                    exact=""
                    active-class="active"
            >
                МЕНЮ
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-left"
                    to="/friends"
                    active-class="active"
            >
                ДРУЗЬЯ
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-left header__item-left-last"
                    to="/message"
                    active-class="active"
            >
                СООБЩЕНИЯ
            </router-link>


            <router-link
                    tag="li"
                    class="item-game"
                    to="/play"
                    active-class="active"
            >
                <div class="btn"></div>
                <div class="btn-after"></div>
                <div class="item" href="#">ИГРАТЬ</div>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right header__item-left-first"
                    to="/shop"
                    active-class="active"
            >
                МАГАЗИН
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right"
                    to="/collection"
                    active-class="active"
            >
                КОЛЛЕКЦИЯ
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right"
                    to="/profile"
                    active-class="active"
            >
                ПРОФИЛЬ
            </router-link>

        </ul>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center;
    }
    .header__items {
        text-decoration: none;
        color: #fffdff;
        font-weight: 700;
        cursor: pointer;
        /*box-shadow: 0 0 100px rgba(0,0,0,.3);*/
        box-shadow: 0 0 30px rgba(0,0,0,.1);
        /*background-color: #2d4059;*/
        background-color: #30475e;
        /*background: url("../img/header.png") no-repeat center center;*/
        /*background-image: linear-gradient(30deg,#822cff,#a05fff);*/
        /*background-image: linear-gradient(30deg,#7f7fd5,#86a8e7,#91eae4);*/
        background-size: cover;
        opacity: 95%;
        width: 100vw;
        /*position: fixed;*/
        border-bottom: 1px solid #e1eaff;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
        user-select: none;
    }
    .header__items li {
        list-style: none;
    }
    .header__items li a {
        text-decoration: none;
        color: #e5e5e5;
        font-weight: 700;
    }
    .header__items li a:hover {
        color: #fff;
    }
    .header__items li a:focus-visible {
        color: #e8ecb1;
    }
    .header__item-right {
        margin-left: 65px;
    }
    .header__item-left {
        margin-right: 65px;
    }
    .header__item-left-last {
        margin-right: 0;
    }
    .header__item-left-first {
        margin-left: 0;
    }
    .header__items li .item {
        color: #343338;
    }
    .header__items li .item:hover {
        color: #000;
    }
    .header__items li .item:focus {
        color: #343338;
    }
    .header__items li .item:active {
        color: #343338;
    }

    .item-game {
        font-size: 22px;
        font-weight: 800;
        padding: 20px;
        margin-left: 130px;
        margin-right: 130px;
    }
    .item   {
        z-index:1;
        position: relative;
        margin: 0 auto;
        padding-top:2px;
    }
    .item:after   {
        content: "";
        z-index: -1;
        position: absolute;
        top: -12px;
        left: -126px;
        height: 0;
        width: 235px;
        border-top: 53px solid #fffdff;
        border-left: 52px solid transparent;
        border-right: 52px solid transparent;
    }
    .item:active:after {
        border-top: 53px solid #cacaca;
        /*#e1b787      */
    }
    .btn {
        border-left: 3px solid #fffdff;
        height: 50px;
        position: absolute;
        left: 50%;
        margin-left: -175px;
        top: 0;
        transform: skewX(44deg);
    }
    .btn-after {
        border-left: 3px solid #fffdff;
        height: 50px;
        position: absolute;
        left: 50%;
        margin-left: 121px;
        top: 0;
        transform: skewX(-44deg);
    }
</style>
