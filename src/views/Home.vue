<template>
    <div>
        <h1>Home</h1>
        <p>{{userStore.userData?.email}}</p>

        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese URL" v-model="url">
            <button type="submit">Agregar</button>
        </form>

        <p v-if="databaseStore.loadingDoc">loading docs...</p>
        <ul v-else>
            <li v-for="item of databaseStore.documents" :key="item.id">
                {{item.id}}
                <br>
                {{item.name}}
                <br>
                {{item.short}}
                <br>
                <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
                <button @click="router.push(`/editar/${item.id}`)">Editar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {useUserStore} from '../stores/user'
import { useDatabaseStore } from '../stores/database';
import { ref } from 'vue';
import {useRouter} from 'vue-router'

const userStore = useUserStore()
const databaseStore = useDatabaseStore()
const router = useRouter()

databaseStore.getUrls()

const url = ref('')

const handleSubmit = () => {
    // validaciones de esa url...
    databaseStore.addUrl(url.value)
}

</script>