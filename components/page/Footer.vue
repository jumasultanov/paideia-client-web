<template>
    <footer>
        <div class="container footer-content">
            <div class="row">
                <div class="col-4 logo-column">
                    <NuxtLink class="logo" to="/">
                        <HelperSvg name="logo-stock" />
                    </NuxtLink>
                    <div class="small">
                        <span>Образование, культура и мессенджер<br> на одной платформе</span>
                    </div>
                    <div class="small copyright">
                        <span>Copyright © 2024 - PAIDEIA</span>
                    </div>
                </div>
                <div class="col-2 content">
                    <nav class="bottom-menu">
                        <span class="links-title">О нас</span>
                        <ul>
                            <li><a href="#">Миссия</a></li>
                            <li><a href="#">Наш прогресс</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Сообщество</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-3 content">
                    <nav class="bottom-menu">
                        <span class="links-title">Проекты</span>
                        <ul>
                            <li><a href="#">Проектирование будущего</a></li>
                            <li><a href="#">Сити-фермерство</a></li>
                            <li><a href="#">Liberum Terra</a></li>
                            <li><a href="#">Order New Earth</a></li>
                            <li><a href="#">Народный институт развития</a></li>
                            <li><a href="#">Open Source Ecology</a></li>
                            <li><a href="#">The Venus Game</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-2 offset-1 contact-column">
                    <span>Как с нами связаться:</span>
                    <div class="social-links">
                        <a class="social-link" href="#" target="_blank">
                            <HelperSvg name="vk" />
                        </a>
                        <a class="social-link" href="#" target="_blank">
                            <HelperSvg name="tg" />
                        </a>
                        <a class="social-link" href="#" target="_blank">
                            <HelperSvg class="red" name="youtube" />
                        </a>
                    </div>
                    <a href="mailto:info@paideia.pro" class="email">
                        <HelperSvg name="mail" />
                        <span>info@paideia.pro</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        background: linear-gradient(180deg, #4D6D9A 0%, #7595C2 100%);
        border-top: 1px solid var(--white-color);
        padding: var(--space) 0;
        color: var(--white-color);

        a {
            --link-color: var(--white-color);
            --link-hover-color: var(--blue-light-text-color);
        }

        .logo-column, .contact-column {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .copyright {
            color: var(--gray-color);
            margin-top: auto;
        }

        .bottom-menu {
            display: flex;
            flex-direction: column;
            gap: 24px;

            .links-title {
                font-weight: bold;
                font-size: 1.125em;
            }

            ul {
                list-style: none;
                padding-left: 0;
                margin: 0;
                display: flex;
                gap: 12px;
                flex-direction: column;
            }
        }

        .logo {
            text-decoration: none;
            border-bottom: none;

            .icon {
                fill: var(--white-color);
            }
        }

        .social-links {
            display: flex;
            gap: 24px;

            .social-link {
                border-bottom: none;
                
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

        .email {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            border-bottom: none;

            .icon {
                fill: var(--white-color);
            }

            &:hover {

                .icon {
                    fill: var(--link-hover-color);
                }
            }
        }
    }
</style>