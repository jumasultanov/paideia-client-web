<script setup>
    useHead({
        title: 'Авторизация',
    })
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
                    <form>
                        <h3 class="title">Вход</h3>
                        <BFormInput type="email" placeholder="Адрес электронной почты" />
                        <BFormInput type="password" placeholder="Пароль" />

                        <BButton variant="danger">Войти</BButton>
                        <BAlert :model-value="true" variant="secondary">
                            <span>Еще нет аккаунта?</span>
                            <NuxtLink class="login-link" to="/registration">Зарегистрироваться</NuxtLink>
                        </BAlert>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>