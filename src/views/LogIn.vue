<template>
    <div class="page-log-in">
        <div class="columns">
            <div class="column is-4 is-offset-4 mb-12">
                <h1 class="title">Login</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Usuário</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Senha</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Log in</button>
                        </div>
                    </div>

                    <hr>

                    <router-link to="/signup">clique</router-link> para registrar
                </form>
            </div>
        </div>

    </div>
</template>


<script>
// import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    methods:{
        async submitForm(){

        }
    }
}
</script>

<style scoped>
.page-log-in{
    min-height: 70vh;
}
</style>