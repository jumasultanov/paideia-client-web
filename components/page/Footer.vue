<template>
    <PageContactUs />
    <footer>
        <div class="container footer-content">
            <nav class="bottom-menu">
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Скачать приложение</a></li>
                    <li><a href="#">Проекты партнеры</a></li>
                </ul>
            </nav>
            <div class="bottom-right">
                <button class="lang btn btn-outline-primary">
                    <div class="icon">
                        <svg width="24" height="24" viewBox="0 0 34 34"><use xlink:href="#icon-earth" /></svg>
                    </div>
                    <span>Русский</span>
                </button>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        background-color: black;

        .footer-content {
            display: flex;
            align-items: center;
            gap: 32px;
            height: 154px;

            .bottom-menu {

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    gap: 16px;

                    a {
                        color: white;
                        font-weight: bold;
                        font-size: 18px;
                        text-decoration: none;

                        &:hover {
                            opacity: .7;
                        }
                    }
                }
            }

            .bottom-right {
                margin-left: auto;

                .lang {
                    color: white;
                    text-transform: none;

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
        }
    }
</style>