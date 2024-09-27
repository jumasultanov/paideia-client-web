<script setup>
    useHead({
        title: 'Регистрация',
    })

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirmation_password = ref('')
    const subscribe_news = ref(true)

    function submit() {
        // TODO: 
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
                    <form @submit.prevent="submit">
                        <h3 class="title">Зарегистрируйтесь <br>и начните обучение</h3>
                        <BFormInput placeholder="Ваше имя" v-model="name" />
                        <BFormInput type="email" placeholder="Адрес электронной почты" v-model="email" />
                        <BFormInput type="password" placeholder="Пароль" v-model="password" />
                        <BFormInput type="password" placeholder="Пароль еще раз" v-model="confirmation_password" />

                        <BFormCheckbox v-model="subscribe_news">Отправляйте мне письма о событиях и мероприятиях платформы</BFormCheckbox>

                        <BButton variant="danger">Регистрация</BButton>
                        <BAlert :model-value="true" variant="secondary">
                            <span>Уже зарегистрировались?</span>
                            <NuxtLink class="login-link" to="/login">Войти</NuxtLink>
                        </BAlert>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>