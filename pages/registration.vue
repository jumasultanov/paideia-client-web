<script setup>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, helpers } from '@vuelidate/validators'

    useHead({
        title: 'Регистрация',
    })

    const button = reactive({
        style: 'danger',
        text: 'Регистрация'
    })

    async function submit(formData, callback) {
        const success = await useAuthStore().register(formData)
        if (success) {
            //TODO: Уже авторизовать, перенаправить на главную
        }
        callback(success)
    }
</script>

<template>
    <main>
        <div class="container image-form">
            <div class="row">
                <div class="col-8">
                    <div class="img-box">
                        <img src="~/assets/img/register-image.png">
                    </div>
                </div>
                <div class="col-4">
                    <FormWrapper
                        name="registration"
                        :button="button"
                        @submit="submit"
                    >
                        <template v-slot:header>
                            <h3 class="title">Зарегистрируйтесь <br>и начните обучение</h3>
                        </template>
                        <template v-slot:footer>
                            <BAlert :model-value="true" variant="secondary">
                                <span>Уже зарегистрировались?</span>
                                <NuxtLink class="login-link" to="/login">Войти</NuxtLink>
                            </BAlert>
                        </template>
                    </FormWrapper>
                </div>
            </div>
        </div>
    </main>
</template>