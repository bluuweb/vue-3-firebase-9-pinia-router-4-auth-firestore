<script setup>
import { reactive } from "vue";
import { useDatabaseStore } from "../stores/database";
import { message } from "ant-design-vue";

const databaseStore = useDatabaseStore();

const formState = reactive({
    url: "",
});

const onFinish = async (value) => {
    console.log("todo correcto " + value);
    const error = await databaseStore.addUrl(formState.url);
    if (!error) {
        formState.url = "";
        return message.success("URL agregada 💋");
    }

    switch (error) {
        // buscar errores de firestore
        default:
            message.error(
                "Ocurrió un error en el servidor 💋 intentelo más tarde..."
            );
            break;
    }
};
</script>

<template>
    <a-form
        name="addform"
        autocomplete="off"
        layout="vertical"
        :model="formState"
        @finish="onFinish"
    >
        <a-form-item
            name="url"
            label="Ingrese una URL"
            :rules="[
                {
                    required: true,
                    whitespace: true,
                    pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: 'Ingrese una URL válida',
                },
            ]"
        >
            <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item>
            <a-button
                type="primary"
                html-type="submit"
                :loading="databaseStore.loading"
                :disabled="databaseStore.loading"
            >
                Agregar URL</a-button
            >
        </a-form-item>
    </a-form>
</template>
