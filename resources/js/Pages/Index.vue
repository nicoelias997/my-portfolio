<template>
    <v-container>
        <v-row>
            <v-col
            class="v-cols-6"
            >
                <div class="left">
                    <div class="header">
                        <h1 class="name">
                            Nicolas Elias
                        </h1>
                        <h3 class="title">
                            FullStack Developer
                        </h3>
                        <p class="subtitle">
                            I do a lot of things.
                        </p>
                    </div>
                <div class="main">
                    <button>
                        About
                    </button>
                    <button>
                        Experience
                    </button>
                    <button>
                        Projects
                    </button>
                </div>
                <div class="footer">
                    <v-row>
                        <button
                        class="link-button"
                        >
                        <v-icon :icon="mdiPlus"></v-icon>
                        </button> 
                        <button
                        class="link-button"
                        >
                        <v-icon :icon="mdiPlus"></v-icon>
                        </button> <button
                        class="link-button"
                        >
                        <v-icon :icon="mdiPlus"></v-icon>
                        </button> <button
                        class="link-button"
                        >
                        <v-icon :icon="mdiPlus"></v-icon>
                        </button> 
                    </v-row>
                </div>
            </div>
        </v-col>
            <v-col
            class="v-cols-6"
            >
                <h1>Hola</h1>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {
        mdiPlus
    } from "@mdi/js"
    export default {
        setup(){
            return {
                mdiPlus
            }
        }
    }
</script>
<style scoped>
    .v-container {
        height: 100vh;
    }
    .left {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 50%;
        background-color: bisque;
    }
    .header{
        margin-left: 25%;
        padding: 4rem;
    }
    .name{
        letter-spacing: 0.5px;
        font-size: 3rem;

    }
    .title{
        letter-spacing: 0.5px;
        font-size: 1.5rem;

    }
    .subtitle{
        letter-spacing: 1px;
        font-size: 1rem;
        opacity: 0.5;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin-left: 25%;
        padding: 2rem;
    }
    .list{
        color: red;
    }
    .footer {
        display: flex;
        justify-content: center;
        margin-left: 25%;
        padding: 2rem;
    }
    .link-button{
        font-size: 1.5rem;
        margin-top: 6rem;
        margin-left: 1rem;
    }
</style>