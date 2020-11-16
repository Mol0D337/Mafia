<template>
    <div id="content-tab2" >
        <p>

            <form class="inner" @submit.prevent="submit">

                <div class="about">Дал Дал УшЁл</div>

<div class="div">
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                    <label class="form__label">Электронная почта</label>
                    <input class="form__input" type="text" v-model.trim="$v.email.$model"/>
                    <div class="error" v-if="!$v.email.required">Email is required</div>
                </div>


                <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label class="form__label">Пароль</label>
                    <input class="form__input" type="password" v-model.trim="$v.password.$model"/>
                    <div class="error" v-if="!$v.password.required">Password is required</div>
                    <div class="error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
                </div>


                <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
                    <label class="form__label">Повторите пароль</label>
                    <input class="form__input" type="password" v-model.trim="$v.repeatPassword.$model"/>
                    <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
                </div>


                <div class="form-group" :class="{ 'form-group--error': $v.nickName.$error }">
                    <label class="form__label">Никнейм</label>
                    <input class="form__input" type="text" v-model.trim="$v.nickName.$model"/>
                    <div class="error" v-if="!$v.nickName.required">Nick Name is required</div>
                </div>


</div>

                <p class="typo__p" v-if="status === 'ERROR'">Please fill the form correctly.</p>

                <div class="btn__wrapper">
                    <button class="btn" type="submit">
                        ЗАРЕГЕСТРИРОВАТЬСЯ
                    </button>
                </div>

        </form>
        </p>
    </div>
</template>

<script>
    import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'
    export default {
        name: "Registration",
        methods: {
            async submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.status = 'ERROR'
                } else {
                    const formData = {
                        email: this.email,
                        password: this.password,
                        nickName: this.nickName
                    }
                    try {
                        await this.$store.dispatch('register', formData)
                        this.$router.push('/')
                        localStorage.setItem('userAuth', 'yes');
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        },
        data() {
            return {
                email: '',
                password: '',
                repeatPassword: '',
                nickName: '',
                status: null
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            },
            nickName: {
                required
            }
        }
    }

</script>

<style scoped>
    .btn__wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 7px;
    }
    button {
        font-family: "IBM Plex Sans", sans-serif;
        text-decoration: none;
        outline: none;
        display: inline-block;
        margin: 10px 20px;
        padding: 10px 30px;
        position: relative;
        border: 2px solid #679d69;
        color: #679d69;
        transition: .4s;
        background: #fff;
    }
    button:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        border: 2px solid rgba(0,0,0,0);
        transition: .4s;
    }
    .btn__wrapper button:hover:after {
        border-color: #679d69;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
    }




    .div {
        margin-left: 26px;
    }
    .inner {
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 500;
    }
    .about {
        line-height: 1.6;
        color: #5b5d67;
        text-align: center;
        margin: 20px 0;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        height: 85px;
    }

    .form__input {
        border: 1px solid #e9eaec;
        border-radius: 5px;
        width: 283px;
        height: 35px;
        padding: 0 12px;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 500;
        font-size: 16px;

    }
    .form__input:focus {
        border-color: #3bafda;
        border-bottom: 1px solid #3bafda;
    }
    .form__label {
        color: #5b5d67;
    }
    .error {
        font-size: 14px;
        font-weight: 500;
        color: #679d69;
    }
    .typo__p {
        color: #f40200;
        text-align: center;
    }
</style>
