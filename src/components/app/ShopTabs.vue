<template>

    <div class="tabs">
        <input id="tab1" type="radio" name="tabs" checked>
        <label for="tab1">Купоны</label>

        <input id="tab2" type="radio" name="tabs">
        <label for="tab2">Магазин</label>

        <input id="tab3" type="radio" name="tabs">
        <label for="tab3">Ключи</label>

        <input id="tab4" type="radio" name="tabs">
        <label for="tab4">Торговая площадка</label>

        <div id="content-tab1">
            <p>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            </p>
        </div>
        <div id="content-tab2">
            <p>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            </p>
        </div>
        <div id="content-tab3">
            <p>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            </p>
        </div>
        <div id="content-tab4">
            <p>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule1.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            <div class="card">
                <img src="../../../public/img/capsule2.png" alt="">
                <div class="name__item">Капсула с наклейкой</div>
                <div class="price">63 rub</div>
            </div>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopTabs"
    }
</script>

<style scoped>
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
        margin: 50px auto;
        font-family: 'IBM Plex Sans', sans-serif;
        user-select: none;
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

    .card {
        margin-left: 20px;
        display: inline-block;
        padding-bottom: 25px;
    }
    .card img {
        text-align: center;
        width: 160px;
        height: 160px;
    }
    .name__item {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        color: #5b5d67;
    }
    .price {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        color: #679d69;
    }

</style>
