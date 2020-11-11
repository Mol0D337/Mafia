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
                <a class="items" href="#">МЕНЮ</a>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-left"
                    to="/friends"
                    active-class="active"
            >
                <a class="items" href="#">ДРУЗЬЯ</a>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-left header__item-left-last"
                    to="/collection"
                    active-class="active"
            >
                <a class="items" href="#">КОЛЛЕКЦИЯ</a>
            </router-link>


            <router-link
                    tag="li"
                    class="item-game"
                    to="/play"
                    active-class="active"
            >
                <div class="btn"></div>
                <div class="btn-after"></div>
                <a class="item" href="#">ИГРАТЬ</a>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right header__item-left-first"
                    to="/shop"
                    active-class="active"
            >
                <a class="items" href="#">МАГАЗИН</a>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right"
                    to="/career"
                    active-class="active"
            >
                <a class="items" href="#">КАРЬЕРА</a>
            </router-link>

            <router-link
                    tag="li"
                    class="header__item-right"
                    to="/profile"
                    active-class="active"
            >
                <a class="items" href="#">ПРОФИЛЬ</a>
            </router-link>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "HeaderMainPage"
    }
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center;
    }
    .header__items {
        /*background-color: #2d4059;*/
        /*background: url("../img/header.png") no-repeat center center;*/
        /*background-image: linear-gradient(30deg,#822cff,#a05fff);*/
        /*background-image: linear-gradient(30deg,#7f7fd5,#86a8e7,#91eae4);*/
        /*background-size: cover;*/
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
        color: #fffdff;
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
        margin-left: -162px;
        top: 0;
        transform: skewX(44deg);
    }
    .btn-after {
        border-left: 3px solid #fffdff;
        height: 50px;
        position: absolute;
        left: 50%;
        margin-left: 135px;
        top: 0;
        transform: skewX(-44deg);
    }
</style>
