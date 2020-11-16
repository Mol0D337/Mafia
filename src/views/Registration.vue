<template>
    <div id="content-tab2" >
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


                <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
                    <label class="form__label">Repeat password</label>
                    <input class="form__input" type="password" v-model.trim="$v.repeatPassword.$model"/>
                </div>
                <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>

                <div class="form-group" :class="{ 'form-group--error': $v.nickName.$error }">
                    <label class="form__label">Nick Name</label>
                    <input class="form__input" type="text" v-model.trim="$v.nickName.$model"/>
                </div>

                <div class="error" v-if="!$v.nickName.required">Nick Name is required</div>

                <p class="typo__p" v-if="status === 'ERROR'">Please fill the form correctly.</p>

        <button class="button" type="submit">ЗАРЕГЕСТРИРОВАТЬСЯ!</button>

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


