<script setup>
    const showMenu = ref(false)

    function triggerMenu(close = false) {
        showMenu.value = close ? false : !showMenu.value
    }

    function anyClick(ev) {
        if (ev.target.closest('.research-menu-content')) return
        if (!showMenu.value) return
        triggerMenu(true)
    }

    onMounted(() => {
        document.addEventListener('click', anyClick)
    })
    
    onBeforeUnmount(() => {
        document.removeEventListener('click', anyClick)
    })
</script>

<template>
    <header>
        <nav class="top-nav">
            <div class="container">
                <ul class="top-menu">
                    <li><a href="#">Миссия</a></li>
                    <li><a href="#">Задачи</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Сообщество</a></li>
                    <li><a href="#">Наш прогресс</a></li>
                </ul>
                <div class="social-links">
                    <a class="social-link" href="#" target="_blank">
                        <HelperSvg name="vk" size="24" />
                    </a>
                    <a class="social-link" href="#" target="_blank">
                        <HelperSvg name="tg" size="24" />
                    </a>
                    <a class="social-link" href="#" target="_blank">
                        <HelperSvg class="red" name="youtube" size="24" />
                    </a>
                </div>
                <div class="lang">
                    <span class="current">RU</span>
                    <HelperSvg size="20" name="arrow-down" />
                </div>
            </div>
        </nav>
        <div class="menu">
            <div class="container menu-content">
                <NuxtLink class="logo" to="/">
                    <HelperSvg name="logo" />
                </NuxtLink>
                <div class="main-btns">
                    <HelperButton :outline="true" :burger="true" :active="showMenu" @click.stop="triggerMenu()">Исследовать</HelperButton>
                    <div class="search-form">
                        <BFormInput placeholder="Что вы хотите познавать?" autocomplete="off" />
                        <BButton class="circle-box">
                            <HelperSvg name="search" />
                        </BButton>
                    </div>
                    <HelperLink icon="chat">Общение</HelperLink>
                </div>
                <PageUserSetup />
            </div>
        </div>
        <PageMenu :show="showMenu" />
    </header>
</template>


<style lang="scss" scoped>
    header {
        position: relative;
        z-index: 1;
    }

    .top-nav {
        background-color: var(--blue-color);
        position: relative;
        z-index: 1;

        .container {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 48px;
        }

        .top-menu {
            display: flex;
            list-style: none;
            align-items: center;
            margin-bottom: 0;
            padding: 0;
            
            li {
                position: relative;
                padding: 0 12px;

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 1px;
                    height: 20px;
                    margin-top: -10px;
                    background-color: var(--white-color);
                    border-radius: 1px;
                }

                &:last-child {

                    &::after {
                        display: none;
                    }
                }
            }

        }

        .social-links {
            display: flex;
            gap: 12px;
            align-items: center;
            
            .social-link {
                padding: 18px 0;

                .icon {
                    fill: var(--white-color);
                }

                &:hover {
                    
                    .icon {
                        fill: var(--blue-light-text-color);

                        &.red {
                            fill: var(--red-light-color);
                        }
                    }
                }
            }
        }

        .lang {
            display: flex;
            align-items: center;
            cursor: pointer;

            .current {
                position: relative;
                top: 1px;
                color: var(--white-color);
                transition: color .2s ease-in-out;
            }
            
            .icon {
                fill: white;
            }

            &:hover {
                .current {
                    color: var(--blue-light-text-color);
                }

                .icon {
                    fill: var(--blue-light-text-color);
                }
            }

        }

        a {
            display: block;
            padding: 20px 0;
            color: var(--white-color);

            &:hover {
                color: var(--blue-light-text-color);
            }
        }
    }

    .top-nav, .menu {
        a {
            text-decoration: none;
            border-bottom: none;
        }
    }

    .menu {
        background-color: var(--white-color);
        box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);

        .menu-content {
            display: flex;
            gap: 24px;
            align-items: center;
            justify-content: space-between;
            height: 108px;

            .logo {
                flex-shrink: 0;
                display: flex;
            }

            .main-btns {
                display: flex;
                gap: 24px;
                align-items: center;
            }

            .search-form {
                position: relative;
                display: flex;
                align-items: center;
                width: 310px;

                .btn {

                    .icon {
                        fill: var(--white-color);
                    }

                    &:hover {
                        background-color: var(--blue-light-color);
                    }
                }
            }

        }
    }
</style>