<script setup>
    const authStore = useAuthStore()
    authStore.init()

    const data = [
        {
            title: 'Вход',
            btn: 'Войти',
            next: { text: 'Еще нет аккаунта?', btn: 'Регистрация' },
        },
        {
            title: 'Зарегистрируйтесь и начните обучение',
            btn: 'Зарегистрироваться',
            next: { text: 'Уже есть аккаунт?', btn: 'Вход' },
        },
    ]
    const active = ref(0)
    const modal = ref(false)
    const loading = ref(false)
    const userBurgerDisable = ref(false)
    const isAuth = computed(() => authStore.isAuth)
    const user = computed(() => authStore.user)
    
    function loginShow() {
        modal.value = true
    }
    
    function switchForm() {
        loading.value = false
        active.value = active.value == 1 ? 0 : 1
    }

    async function request(method, formData, callback) {
        loading.value = true
        const success = await authStore[method](formData)
        loading.value = false
        if (success) modal.value = false
        callback(success)
    }

    function submitLogin(formData, callback) {
        request('login', formData, callback)
    }

    function submitReg(formData, callback) {
        request('register', formData, callback)
    }

    async function logout() {
        userBurgerDisable.value = true
        await authStore.logout()
        userBurgerDisable.value = false
    }
</script>

<template>
    <div class="user-setup">
        <template v-if="isAuth">
            <span class="btn btn-link">
                <i class="left-icon"><HelperSvg name="bell" /></i>
            </span>
            <div class="user-burger" :class="{ disabled: userBurgerDisable }">
                <div class="user-ava">
                    <img class="default-ava" src="~assets/img/anonymous.png">
                </div>
                <div class="user-menu">
                    <div class="user-name">
                        <span>{{ user.name }}</span>
                    </div>
                    <div class="user-links">
                        <HelperLink size="14" icon="user">Открыть профиль</HelperLink>
                        <HelperLink size="14" icon="edit">Редактировать профиль</HelperLink>
                        <HelperLink size="14" icon="task">Ваши задания</HelperLink>
                        <HelperLink size="14" icon="arrow-up">Личный прогресс</HelperLink>
                        <i class="divider"></i>
                        <HelperLink @go="logout" size="14" icon="exit" class="red">Выйти</HelperLink>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <HelperLink icon="login" @go="loginShow">Войти</HelperLink>
        </template>
    </div>
    <HelperModal :title="data[active].title" v-model="modal">
        <FormWrapper v-if="active == 0" name="login" class="form" id="auth-form" @submit="submitLogin" />
        <FormWrapper v-else name="registration" class="form" id="auth-form" @submit="submitReg" />
        <template v-slot:buttons>
            <HelperButton
                :submit="true"
                :loading="loading"
                form="auth-form"
            >{{ data[active].btn }}</HelperButton>
            <div class="switch-form ms-auto">
                <span>{{ data[active].next.text }}</span>
                <a href="#" @click.prevent="switchForm">{{ data[active].next.btn }}</a>
            </div>
        </template>
    </HelperModal>
</template>

<style lang="scss" scoped>
    .user-setup {
        display: flex;
        align-items: center;
        gap: 24px;
        justify-content: flex-end;
        min-width: 114px;
    }

    .switch-form {
        display: flex;
        gap: 12px;
    }

    .user-burger {
        --ava-width: 48px;
        --wrapper-pad: 24px;
        position: relative;

        .user-ava {
            position: relative;
            width: var(--ava-width);
            height: var(--ava-width);
            display: flex;
            background-color: var(--blue-light-color);
            border-radius: 50%;
            border: 1px solid var(--blue-color);
            overflow: hidden;
            z-index: 2;
            transition: box-shadow .3s ease-in-out;

            .default-ava {
                margin: 6px 3px 0;
            }
        }

        &:hover {

            .user-ava {
                box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
            }

            .user-menu {
                opacity: 1;
                visibility: visible;
                pointer-events: all;
                transition: opacity .3s ease-in-out, visibility 0s;
            }
        }

        &.disabled {
            pointer-events: none;

            .user-menu {
                pointer-events: inherit;
            }
        }

        .user-menu {
            --half-pad: calc(var(--wrapper-pad) / 2);

            position: absolute;
            top: calc(var(--wrapper-pad) / -2);
            right: calc(var(--wrapper-pad) * -1);
            display: flex;
            flex-direction: column;
            gap: var(--half-pad);
            padding: var(--half-pad) var(--wrapper-pad) var(--wrapper-pad);
            background-color: var(--white-color);
            border-radius: 22px;
            border: 1px solid var(--bg-lines-color);
            box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            z-index: 1;
            transition: opacity .3s ease-in-out, visibility 0s .3s;

            .user-name {
                display: flex;
                padding-right: calc(var(--ava-width) + var(--half-pad));
                height: var(--ava-width);
                align-items: center;
            }

            .user-links {
                display: flex;
                flex-direction: column;
                gap: var(--half-pad);
                padding-top: var(--half-pad);
                border-top: 1px solid var(--bg-lines-color);

                .btn {
                    white-space: nowrap;

                    &.red {
                        --bs-btn-color: var(--red-black-color);
                        --bs-btn-hover-color: var(--red-light-color);
                    }
                }

                .divider {
                    border-top: 1px solid var(--bg-lines-color);
                }
            }
        }
    }
</style>