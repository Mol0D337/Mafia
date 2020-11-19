<template>
    <div class="bgc">
        <Header/>
            <div class="wrapper">
                <div class="friends">
                    <div class="friend__text">Друзья</div>
                    <div class="friend__sum">3</div>
                </div>

                <div class="search">
                    <div class="friend__search">
                        <input type="text" class="friend__search-input" placeholder="Найти Друга">
                    </div>
                    <div class="friend__search-new">
                        <input type="text" class="friend__search-input-new" placeholder="Поиск Игроков">
                    </div>
                </div>
                <ul class="ul">
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">MastJen</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">Zhenia12320</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">Zhenia12320</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">Nagibator2005</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">MastJen</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">Zhenia12320</a>
                    </li>
                    <li class="li">
                        <div class="avatar">
                            <img src="../../public/img/avatar.jpg" alt="">
                        </div>

                        <a href="#">Nagibator2005</a>
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
        name: "Friends",
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
        display: grid;
        grid-template-columns: 11% 70% 14%;

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

</style>
