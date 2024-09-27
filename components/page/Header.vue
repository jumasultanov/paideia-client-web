<script setup>
    const showMenu = ref(false)
</script>

<template>
    <header>
        <nav class="top-nav">
            <ul class="container">
                <li><a href="#">Миссия</a></li>
                <li><a href="#">Задачи</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Сообщество</a></li>
                <li><a href="#">Наш прогресс</a></li>
            </ul>
        </nav>
        <div class="menu">
            <div class="container menu-content">
                <NuxtLink class="logo" to="/">
                    <img src="~/assets/icon/logo.svg" alt="Paideia" />
                </NuxtLink>
                <div class="main-btns">
                    <BDropdown v-model="showMenu" text="Исследовать" variant="primary">
                        <BDropdownItem>Инженерия</BDropdownItem>
                        <BDropdownItem>Философия</BDropdownItem>
                        <BDropdownItem>ИТ и программирование</BDropdownItem>
                        <BDropdownItem>Медиа</BDropdownItem>
                        <BDropdownItem>Социология</BDropdownItem>
                        <BDropdownItem>Культура и искусство</BDropdownItem>
                        <BDropdownItem>Педагогика и образование</BDropdownItem>
                        <BDropdownItem>Экономика</BDropdownItem>
                    </BDropdown>
                    <BButton variant="danger">
                        <span>Общение</span>
                        <span class="icon"><img src="~/assets/icon/chat.svg"></span>
                    </BButton>
                </div>
                <div class="search-form">
                    <BFormInput placeholder="Что вы хотите познавать?" />
                    <button class="btn">
                        <div class="icon"><img src="~/assets/icon/search.svg"></div>
                    </button>
                </div>
                <PageUserSetup />
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
    .top-nav {
        background-color: black;

        ul {
            display: flex;
            list-style: none;
            align-items: center;
            height: 53px;
            gap: 40px;
            margin-bottom: 0;

            a {
                color: white;
                font-weight: bold;
                text-decoration: none;
                text-transform: uppercase;

                &:hover {
                    opacity: .7;
                }
            }
        }
    }

    .menu {
        background-color: white;
        box-shadow: 0px 14px 18px -3px rgba(0,0,0,.3);

        .menu-content {
            display: flex;
            gap: 32px;
            align-items: center;
            height: 110px;

            .logo {
                flex-shrink: 0;
                display: flex;
                width: 105px;

                img {
                    width: 100%;
                }
            }

            .main-btns {
                display: flex;
                gap: 24px;
                align-items: center;

                .btn {
                    --bs-btn-border-radius: 6px;
                }
            }

            .search-form {
                position: relative;
                display: flex;
                align-items: center;

                input {
                    border-radius: 50px;
                    font-size: 18px;
                    padding: 14px 32px;
                    min-width: 320px;
                }

                .btn {
                    position: absolute;
                    background-color: var(--blue-color);
                    right: 8px;
                    border-radius: 50%;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 46px;
                    height: 46px;

                    img {
                        height: 28px;
                    }
                }
            }

        }
    }
</style>