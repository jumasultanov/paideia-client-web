<template>
    <div class="roles-wrapper">
        <div class="container roles-container bg-lines">
            <HelperBGLines :pos="[1,2,5]" :lighter="0.35" />
            <div class="head">
                <h2 class="with-line">Начните менять мир уже сейчас</h2>
                <HelperButton :white="true" href="#">Все роли</HelperButton>
            </div>
            <div class="row">
                <div class="col-3">
                    <ul class="role-groups" not-style>
                        <li class="role-group"><span>Инженер</span></li>
                        <li class="role-group active"><span>Медиа</span></li>
                        <li class="role-group"><span>Дизайнер</span></li>
                        <li class="role-group"><span>Робототехник</span></li>
                        <li class="role-group"><span>Социолог</span></li>
                        <li class="role-group"><span>Нетраннер</span></li>
                        <li class="role-group"><span>Музыкант</span></li>
                    </ul>
                </div>
                <div class="col-9">
                    <div class="roles-group-wrapper">
                        <div class="role-info" data-title="Медиа">
                            <span>Журналисты, которые противостоят информационной войне.</span>
                            <ul>
                                <li><span class="gray">Вакансии:</span> <b>30</b> мест</li>
                                <li><span class="gray">Прогнозируемый золотой уровень за 10 лет:</span> <b>+35%</b></li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="role">
                                    <div class="img-box"><img src="~/assets/img/roles/fact-checker.jpg" alt="Медиа"></div>
                                    <div class="text-box">
                                        <span class="title">Фактчекер</span>
                                        <span>Анализируют источники информации, проводят исследования и сравнивают данные с проверенными источниками, чтобы предотвратить распространение ложной информации.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="role">
                                    <div class="img-box"><img src="~/assets/img/roles/media-teacher.jpg" alt="Медиа"></div>
                                    <div class="text-box">
                                        <span class="title">Фактчекер</span>
                                        <span>Анализируют источники информации, проводят исследования и сравнивают данные с проверенными источниками, чтобы предотвратить распространение ложной информации.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="role">
                                    <div class="img-box"><img src="~/assets/img/roles/editor.jpg" alt="Медиа"></div>
                                    <div class="text-box">
                                        <span class="title">Фактчекер</span>
                                        <span>Анализируют источники информации, проводят исследования и сравнивают данные с проверенными источниками, чтобы предотвратить распространение ложной информации.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/mixins';

    .roles-wrapper {
        position: relative;
        background-color: var(--blue-color);
        color: var(--white-color);

        &::before {
            @include absolute-inner;
            background: url('~/assets/img/roles-bg.jpg') top center no-repeat;
            background-size: cover;
            opacity: .25;
        }

        .roles-container {
            display: flex;
            flex-direction: column;
            gap: 80px;
            padding: var(--space) 0;

            .head {
                display: flex;
                gap: 48px;
                align-items: center;
                justify-content: space-between;

                h2 {
                    position: relative;
                    color: inherit;
                }
            }
        }
    }

    .role-groups {
        display: inline-flex;
        flex-direction: column;
        list-style: none;
        gap: 24px;
        margin: 0;
        padding: 0;

        .role-group {
            position: relative;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.15);
            border-left: 1px solid var(--white-color);
            border-radius: 0px 22px 22px 0px;
            overflow: hidden;
            cursor: pointer;
            transition: color .2s ease-in-out;

            span {
                position: relative;
                display: block;
            }

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: var(--white-color);
                border-radius: inherit;
                transform: translateX(-100%) scale(1, 0.65);
                transition: transform .4s ease-in-out;
            }

            &:hover, &.active {
                color: var(--blue-color);

                &::before {
                    transform: translateX(0) scale(1);
                }
            }
        }
    }

    .roles-group-wrapper {
        display: flex;
        flex-direction: column;
        gap: 48px;

        .role-info {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 48px 48px 24px;
            border-radius: 22px;
            border: 1px solid var(--white-color);
            background: rgba(var(--blue-rgb), .4);

            &::before {
                @include absolute-pseudo(attr(data-title), 48px, 0);
                transform: translateY(-50%);
                padding: 8px 24px;
                border-radius: 40px;
                border: 1px solid var(--white-color);
                background: var(--blue-grad-right);
            }

            ul {
                --dot-color: var(--gray-color);
            }
        }
    }

    .role {
        display: flex;
        flex-direction: column;
        border-radius: 22px;
        overflow: hidden;
        background-color: var(--white-color);

        .img-box {

            img {
                display: block;
                width: 100%;
            }
        }

        .text-box {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 24px;
            color: var(--black-light-color);

            .title {
                @include medium-font;
                color: var(--black-color);
            }
        }
    }
</style>