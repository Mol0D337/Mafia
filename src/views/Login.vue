<template>
    <div id="content-tab1" >
        <p>
            <form class="inner" @submit.prevent="submit">
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                    <label class="form__label">Email</label>
                    <input class="form__input" type="text" v-model.trim="$v.email.$model"/>
                </div>
                <div class="error" v-if="!$v.email.required">Email is required</div>

                <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label class="form__label">Password</label>
                    <input class="form__input" type="password" v-model.trim="$v.password.$model"/>
                </div>
                <div class="error" v-if="!$v.password.required">Password is required</div>
                <div class="error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>

                <div class="forgot"><a href="#">Востановить</a></div>

                <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>

                <button class="button" type="submit">ВОЙТИ!</button>

            </form>
        </p>
    </div>
</template>

<script>
    import {email, required, minLength} from 'vuelidate/lib/validators'
    export default {
        name: "Login",
        methods: {
            async submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    const formData = {
                        email: this.email,
                        password: this.password
                    }
                    try {
                        await this.$store.dispatch('login', formData)
                        this.$router.push('/')
                        localStorage.setItem('userAuth', 'yes');
                    } catch (e) {
                        alert('Такого пользователя нет')
                    }
                }
            },
        },
        data() {
            return {
                email: '',
                password: '',
                submitStatus: null
            }
        },
        validations: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(6)
            }
        },
    }
</script>

<style scoped>

    .forgot a{
        font-size: 12px;
        text-decoration: none;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        margin-top: -30px;
        margin-bottom: 25px;
    }

</style>
