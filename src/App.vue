<template>
    <a-layout>
        <a-layout-header v-if="!userStore.loadingSession">
            <a-menu
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
                v-model:selectedKeys="selectedKeys"
            >
                <a-menu-item v-if="userStore.userData" key="home">
                    <router-link to="/">Home</router-link>
                </a-menu-item>
                <a-menu-item v-if="userStore.userData" key="perfil">
                    <router-link to="/perfil">Perfil</router-link>
                </a-menu-item>
                <a-menu-item v-if="!userStore.userData" key="login">
                    <router-link to="/login">Login</router-link>
                </a-menu-item>
                <a-menu-item v-if="!userStore.userData" key="register">
                    <router-link to="/register">Register</router-link>
                </a-menu-item>
                <a-menu-item
                    @click="userStore.logoutUser"
                    v-if="userStore.userData"
                    key="logout"
                >
                    Logout
                </a-menu-item>
            </a-menu>
            <nav>| | |</nav>
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
            <div class="container">
                <div v-if="userStore.loadingSession">loading user...</div>
                <router-view v-else></router-view>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "./stores/user";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();

const selectedKeys = ref([]);

// console.log(route.name);
watch(
    () => route.name,
    () => {
        selectedKeys.value = [route.name];
    }
);
</script>

<style>
.container {
    background-color: #fff;
    padding: 24px;
    min-height: calc(100vh - 64px);
}
.text-center {
    text-align: center;
}
</style>
