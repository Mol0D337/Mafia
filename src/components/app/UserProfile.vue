<template>
    <div class="tabs">
        <input id="tab1" type="radio" name="tabs" checked>
        <label for="tab1">Профиль</label>

        <input id="tab2" type="radio" name="tabs">
        <label for="tab2">Настройки</label>

        <input id="tab3" type="radio" name="tabs">
        <label for="tab3">Социальные сети</label>



        <div id="content-tab1">
            <p>
            <div class="profile">
                <div class="avatar">
                    <div class="img"></div>
                </div>
                <div class="nickname">{{name}}</div>
            </div>
            </p>
        </div>

        <div id="content-tab2">
            <p>
            <div class="setting">
                <div class="avatar">
                    <div class="img"></div>
                </div>

            <div class="fix__name">
                <input type="text" :value="name" >
                <button >Изменить Никk</button>
            </div>

            <div class="fix__name">
                <input type="text" :value="email" >
                <button >Изменить Email</button>
            </div>
            </div>




            </p>
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
        margin: 200px auto;
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
        width: 100%;
        height: 100%;
        border-radius: 99px;
    }

    .nickname {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 30px;
        margin-left: 50px;
    }

    .setting {
        display: inline-flex;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .fix__name {
        margin-left: 50px;
        display: grid;
        width: 200px;
        height: 80px;
        box-sizing: border-box;
    }
    .fix__name input {
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 10px;
        padding: 0 14px;
    }

</style>
