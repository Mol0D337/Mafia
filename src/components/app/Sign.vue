<template>
    <div class="tabs">
        <input id="tab1" type="radio" name="tabs" checked>
        <label for="tab1">Авторизация</label>

        <input id="tab2" type="radio" name="tabs">
        <label for="tab2">Регистрация</label>


        <div id="content-tab1">
            <p>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form">

                            <div class="info">Авторизуйтесь при помощи логина и пароля от вашего аккаунта на Mafia Online.</div>

                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="email">
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>
                            <div class="wrap-input100 validate-input">
				<span class="btn-show-pass">
					<i class="zmdi zmdi-eye"></i>
				</span>
                                <input class="input100" type="password" name="pass">
                                <span class="focus-input100" data-placeholder="Password"></span>
                            </div>

                            <div class="forgot">
                                <a href="#">Forgot password?</a>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn">
                                        войти
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </p>
        </div>

        <div id="content-tab2">
            <p>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form">


                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="email">
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="password" name="pass">
                                <span class="focus-input100" data-placeholder="Password"></span>
                            </div>


                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="password" name="pass">
                                <span class="focus-input100" data-placeholder="Confirm Password"></span>
                            </div>

                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="nick">
                                <span class="focus-input100" data-placeholder="Nick Name"></span>
                            </div>


                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sign"
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
        max-width: 500px;
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


    .logout {
        color: #5b5d67;
    }


    .input {
        font-size: 16px;
        border: 2px solid #e9eaea;
        padding: 12px 14px;
        box-sizing: border-box;
        margin-bottom: 22px;
        color: #1e8da6;
        outline: none;
    }

    /* Анимация иконок */
    .social {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
    }
    .social a {
        width: 40px;
        height: 40px;
        display: block;
        line-height: 40px;
        text-align: center;
        position: relative;
    }
    .social li a::before,
    .social li a::after {
        content: '';
        position: absolute;
        background: #2fbae1;
        width: 100%;
        height: 1px;
        left: 0;
        transition: transform .5s;
        transform: scaleY(0);
    }
    .social li a::before {
        transform-origin: right;
    }
    .social li a::after {
        transform-origin: left;
    }
    .social li a:hover::before {
        transform: scaleX(0);
        transform-origin: left;
    }
    .social li a:hover::after {
        transform: scaleX(0);
        transform-origin: right;
    }

    .social li a div::before,
    .social li a div::after {
        content: '';
        position: absolute;
        background: #2fbae1;
        width: 1px;
        height: 100%;
        transition: transform .5s;
        transform: scaleY(0);
    }
    .social li a div::before {
        left: 0;
        transform-origin: bottom;
    }
    .social li a div::after {
        right: 0;
        transform-origin: top;
    }
    .social li a:hover div::before {
        transform: scaleY(1);
        transform-origin: top;
    }
    .social li a:hover div::after {
        transform: scaleY(1);
        transform-origin: bottom;
    }

    .social + a {
        margin-top: 10px;
        display: block;
        font-size: 12px;
        text-align: center;
    }

    /* Плавающий текст */
    .box-input {
        position: relative;
    }
    .b {
        margin-top: 35px;
    }
    .box-input input {
        border: none;
        border-bottom: 2px solid #e9eaea;
        padding: 10px 0;
    }
    .box-input label {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 10px;
        color: #c4c9c9;
        transition: .5s;
        pointer-events: none;
    }
    .box-input input:focus ~ label,
    .box-input input:valid ~ label {
        top: -20px;
        font-size: 12px;
        color: #33d3fe;
    }



    .dws ul {
        list-style: none;
    }
    .dws a{
        text-decoration: none;
        transition: .5s;
        color: #298cad;
    }
    /* Эффект кнопки */
    a.button {
        background: #298cad;
        color: #ffffff;
        font-size: 18px;
        text-transform: uppercase;
        display: block;
        text-align: center;
        line-height: 46px;
        margin-top: 30px;
        margin-bottom: 10px;
        position: relative;
        z-index: 1;
        overflow: hidden;
        border-bottom: 4px solid #36d2ff;
    }
    a.button:hover {
        color: #ffffff;
    }
    .button::before, .button::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #27bfdc;
        position: absolute;
        top: 0;
        left: -100%;
        transition: .3s;
        z-index: -1;
    }
    .button::after {
        background: #36d2ff;
        top: 100%;
        left: 0;
        transition-delay: .2s;
    }
    .button:hover::before {
        left: 0;
    }
    .button:hover::after {
        top: 0;
    }

    .fab fa-google {
        content: 'f1a0';
        color: #298cad;
    }



    .btn-google {
        color: #555;
        background-color: #fff;
    }

    .btn-face, .btn-google {
        font-size: 18px;
        line-height: 1.2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width: calc((100% - 20px)/2);
        height: 70px;
        border-radius: 10px;
        box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
        -moz-box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
        -webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
        -o-box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
        -ms-box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
        position: relative;
        z-index: 1;
    }

    .m-b-20 {
        margin-bottom: 20px;
    }

    .btn-google::before, .btn-face::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        top: 0;
        left: 0;
        background: #a64bf4;
        background: -webkit-linear-gradient(45deg,#00dbde,#fc00ff);
        background: -o-linear-gradient(45deg,#00dbde,#fc00ff);
        background: -moz-linear-gradient(45deg,#00dbde,#fc00ff);
        background: linear-gradient(45deg,#00dbde,#fc00ff);
        opacity: 0;
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
    }

    .btn-google img {
        width: 30px;
        margin-right: 15px;
        padding-bottom: 3px;
    }





    *{
        margin:0;
        padding:0;
        box-sizing:border-box
    }

    body,html{
        height:100%;
        font-family: "IBM Plex Sans";
    }

    a{
        font-size:14px;
        line-height:1.7;
        color:#666;margin:0;
        transition:all .4s;
        -webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s

    }a:focus{
         outline:none!important;
     }

    a:hover{text-decoration:none;color:#6a7dfe;
        color:-webkit-linear-gradient(left,#21d4fd,#b721ff);
        color:-o-linear-gradient(left,#21d4fd,#b721ff);
        color:-moz-linear-gradient(left,#21d4fd,#b721ff);
        color:linear-gradient(left,#21d4fd,#b721ff)}

    h1,h2,h3,h4,h5,h6{margin:0}

    p{
        font-size:14px;line-height:1.7;color:#666;margin:0}

    ul,li{margin:0;list-style-type:none}input{outline:none;border:none}

    textarea{outline:none;border:none}

    textarea:focus,input:focus{border-color:transparent!important}

    input:focus::-webkit-input-placeholder{color:transparent}

    input:focus:-moz-placeholder{color:transparent}

    input:focus::-moz-placeholder{color:transparent}

    input:focus:-ms-input-placeholder{color:transparent}

    textarea:focus::-webkit-input-placeholder{color:transparent}

    textarea:focus:-moz-placeholder{color:transparent}

    textarea:focus::-moz-placeholder{color:transparent}

    textarea:focus:-ms-input-placeholder{color:transparent}

    input::-webkit-input-placeholder{color:#adadad}

    input:-moz-placeholder{color:#adadad}

    input::-moz-placeholder{color:#adadad}

    input:-ms-input-placeholder{color:#adadad}

    textarea::-webkit-input-placeholder{color:#adadad}

    textarea:-moz-placeholder{color:#adadad}

    textarea::-moz-placeholder{color:#adadad}

    textarea:-ms-input-placeholder{color:#adadad}
    button{outline:none!important;border:none;background:0 0}
    button:hover{cursor:pointer}
    iframe{border:none!important}
    .txt1{font-size:13px;color:#666;line-height:1.5}
    .txt2{font-size:13px;color:#333;line-height:1.5}
    .limiter{width:100%;margin:0 auto}
    .container-login100{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        padding:15px;
    }
    .wrap-login100{
        width:390px;
        padding: 45px 55px 60px;
    }

    .login100-form{width:100%}.login100-form-title{display:block;font-size:30px;color:#333;line-height:1.2;text-align:center}.login100-form-title i{font-size:60px}.wrap-input100{width:100%;position:relative;border-bottom:2px solid #adadad;margin-bottom:37px}
    .input100{font-size:15px;color:#555;line-height:1.2;display:block;width:100%;height:45px;background:0 0;padding:0 5px}.focus-input100{position:absolute;display:block;width:100%;height:100%;top:0;left:0;pointer-events:none}.focus-input100::before{content:"";display:block;position:absolute;bottom:-2px;left:0;width:0;height:2px;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s;background:#6a7dfe;background:-webkit-linear-gradient(left,#21d4fd,#b721ff);background:-o-linear-gradient(left,#21d4fd,#b721ff);background:-moz-linear-gradient(left,#21d4fd,#b721ff);background:linear-gradient(left,#21d4fd,#b721ff)}
    .focus-input100::after{font-size:15px;color:#999;line-height:1.2;content:attr(data-placeholder);display:block;width:100%;position:absolute;top:16px;left:0;padding-left:5px;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.input100:focus+.focus-input100::after{top:-15px}.input100:focus+.focus-input100::before{width:100%}.has-val.input100+.focus-input100::after{top:-15px}.has-val.input100+.focus-input100::before{width:100%}.btn-show-pass{font-size:15px;color:#999;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;align-items:center;position:absolute;height:100%;top:0;right:0;padding-right:5px;cursor:pointer;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s;transition:all .4s}.btn-show-pass:hover{color:#6a7dfe;color:-webkit-linear-gradient(left,#21d4fd,#b721ff);color:-o-linear-gradient(left,#21d4fd,#b721ff);color:-moz-linear-gradient(left,#21d4fd,#b721ff);color:linear-gradient(left,#21d4fd,#b721ff)}.btn-show-pass.active{color:#6a7dfe;color:-webkit-linear-gradient(left,#21d4fd,#b721ff);color:-o-linear-gradient(left,#21d4fd,#b721ff);color:-moz-linear-gradient(left,#21d4fd,#b721ff);color:linear-gradient(left,#21d4fd,#b721ff)}.container-login100-form-btn{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center;padding-top:13px}.wrap-login100-form-btn{width:100%;display:block;position:relative;z-index:1;border-radius:25px;overflow:hidden;margin:0 auto}
    .login100-form-bgbtn{
        position:absolute;
        z-index:-1;
        width:300%;
        height:100%;
        background:#a64bf4;
        background:-webkit-linear-gradient(90deg,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background:-o-linear-gradient(90deg,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background:-moz-linear-gradient(90deg,#21d4fd,#b721ff,#21d4fd,#b721ff);
        background:linear-gradient(90deg,#21d4fd,#b721ff,#21d4fd,#b721ff);
        top:0;left:-100%;
        -webkit-transition:all .4s;
        -o-transition:all .4s;
        -moz-transition:all .4s;
        transition:all .4s}
    .login100-form-btn{
        font-size:15px;color:#fff;line-height:1.2;text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;padding:0 20px;width:100%;height:50px}.wrap-login100-form-btn:hover .login100-form-bgbtn{left:0}@media(max-width:576px){.wrap-login100{padding:77px 15px 33px}}.validate-input{position:relative}.alert-validate::before{content:attr(data-validate);position:absolute;max-width:70%;background-color:#fff;border:1px solid #c80000;border-radius:2px;padding:4px 25px 4px 10px;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);right:0;pointer-events:none;color:#c80000;font-size:13px;line-height:1.4;text-align:left;visibility:hidden;opacity:0;-webkit-transition:opacity .4s;-o-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.alert-validate::after{content:"\f06a";font-size:16px;color:#c80000;display:block;position:absolute;background-color:#fff;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);right:5px}.alert-validate:hover:before{visibility:visible;opacity:1}@media(max-width:992px){.alert-validate::before{visibility:visible;opacity:1}}


    .forgot a{
        font-size: 12px;
        text-decoration: none;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        margin-top: -30px;
        margin-bottom: 25px;
    }

    .info {
        margin-bottom: 30px;
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #5b5d67;
    }

</style>
