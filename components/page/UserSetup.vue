<template>
    <div class="user-setup">
        <NuxtLink class="btn btn-outline-primary" to="/login">Войти</NuxtLink>
        <NuxtLink class="btn btn-primary" to="/registration">Регистрация</NuxtLink>
        <button class="lang btn btn-outline-primary btn-icon">
            <div class="icon">
                <svg width="24" height="24" viewBox="0 0 34 34"><use xlink:href="#icon-earth" /></svg>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .user-setup {
        display: flex;
        align-items: center;
        gap: 32px;

        .lang {
            svg {
                fill: var(--blue-color);
            }
            &:hover {
                svg {
                    fill: white;
                }
            }
        }
    }
</style>