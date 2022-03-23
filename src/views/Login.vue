<template>
    <a-row>
        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
            <a-form
                name="basicLogin"
                autocomplete="off"
                layout="vertical"
                :model="formState"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item
                    name="email"
                    label="Ingrese tu correo"
                    :rules="[
                        {
                            required: true,
                            whitespace: true,
                            type: 'email',
                            message: 'Ingresa un email válido',
                        },
                    ]"
                >
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item
                    name="password"
                    label="Ingrese contraseña"
                    :rules="[
                        {
                            required: true,
                            min: 6,
                            whitespace: true,
                            message:
                                'Ingresa una contraseña con mínimo 6 carácteres',
                        },
                    ]"
                >
                    <a-input-password
                        v-model:value="formState.password"
                    ></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button
                        type="primary"
                        html-type="submit"
                        :disabled="userStore.loadingUser"
                        >Ingresar</a-button
                    >
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>
</template>

<script setup>
import { reactive } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const formState = reactive({
    email: "bluuweb1@test.com",
    password: "123123",
});

const onFinish = async (values) => {
    console.log("Success:", values);
    await userStore.loginUser(formState.email, formState.password);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>
