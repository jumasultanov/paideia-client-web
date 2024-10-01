<script setup>
    useHead({
        title: 'Авторизация',
    })

    const button = reactive({
        style: 'danger',
        text: 'Войти'
    })

    async function submit(formData) {
        //TODO:
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
                        name="login"
                        :button="button"
                        @submit="submit"
                    >
                        <template v-slot:header>
                            <h3 class="title">Вход</h3>
                        </template>
                        <template v-slot:footer>
                            <BAlert :model-value="true" variant="secondary">
                                <span>Еще нет аккаунта?</span>
                                <NuxtLink class="login-link" to="/registration">Зарегистрироваться</NuxtLink>
                            </BAlert>
                        </template>
                    </FormWrapper>
                </div>
            </div>
        </div>
    </main>
</template>