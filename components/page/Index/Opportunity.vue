<script setup>
    const lineHeight = ref(0)
    const el = useTemplateRef('el')
    const line = useTemplateRef('line')

    onMounted(() => {
        //TODO: resize window must update center line`s height
        lineHeight.value = (el.value?.clientHeight || 0) +
            (el.value?.getBoundingClientRect().top || 0) -
            (line.value?.getBoundingClientRect().top || 0)
    })
</script>

<template>
    <div class="container opportunity bg-lines" ref="el">
        <i class="circle-shadow"></i>
        <HelperBGLines :pos="[1,5]" />
        <div class="row justify-content-center head-title">
            <i class="head-circle circle-3"></i>
            <div class="col-6">
                <h2>Все нужные инструменты в одном месте</h2>
            </div>
        </div>
        <div class="center-line" ref="line">
            <i class="head-circle circle-1"></i>
            <i class="head-circle circle-2"></i>
            <svg class="vert-line" :height="lineHeight" :viewBox="`0 0 4 ${lineHeight}`">
                <line x1="2" y1="2" x2="2" :y2="lineHeight - 2" />
            </svg>
            <i class="circle"></i>
        </div>
        <div class="row space">
            <div class="col-6">
                <div class="opportunity-head">
                    <div class="title-box">
                        <span class="title">Мы поддержим Ваши проекты</span>
                        <i class="point"></i>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <div class="desc">
                                <HelperSvg name="project" />
                                <span>Ваши исследования и инновации в различных областях получат помощь</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="opportunity-items">
                    <div class="opportunity-item">
                        <div class="head hard" data-num="01">
                            <h4>Выполнение задач <br>по Вашему проекту</h4>
                            <div class="icon-wrapper"><HelperSvg name="schema" /></div>
                        </div>
                        <div class="text">
                            <span>Создавайте различные задания для участников платформы, участвуйте в беседах по вашим заданиям, получайте результаты и ведите Ваш проект на следующий шаг</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="02">
                            <h4>Распространение <br>и популяризация</h4>
                            <div class="icon-wrapper"><HelperSvg name="anounce" /></div>
                        </div>
                        <div class="text">
                            <span>Ваш проект начнут обсуждать и рекомендовать для изучения не только на этой платформе (в зависимости от типа задачи) и будет становиться все более узнаваемым</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="03">
                            <h4>Партнерство <br>с другими проектами</h4>
                            <div class="icon-wrapper"><HelperSvg name="introduce" /></div>
                        </div>
                        <div class="text">
                            <span>Вы можете сколлаборироваться по общим задачам или объединяться, создавая новые проекты или новые направления задач</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="04">
                            <h4>Условия <br>для дальнейшего роста</h4>
                            <div class="icon-wrapper"><HelperSvg name="growth" /></div>
                        </div>
                        <div class="text">
                            <span>Вы можете сколлаборироваться по общим задачам или объединяться, создавая новые проекты или новые направления задач</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="opportunity-head">
                    <div class="title-box">
                        <span class="title">Образование и развитие</span>
                        <i class="point"></i>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <div class="desc">
                                <HelperSvg name="book" />
                                <span>Вы здесь сможете найти интересующие Вас направления. Развивайте свои навыки и получайте знания, подкрепляя на практике</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="opportunity-items">
                    <div class="opportunity-item">
                        <div class="head hard" data-num="01">
                            <h4>Выполняйте задания <br>и изучайте материалы</h4>
                            <div class="icon-wrapper"><HelperSvg name="schema" /></div>
                        </div>
                        <div class="text">
                            <span>Вы можете выполнять задания по разным направлениям со всеми нужными материалами и прикладывайте свои материалы, чтобы помочь разобраться другим участникам</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="02">
                            <h4>Проходите обучение <br>по разным направлениям</h4>
                            <div class="icon-wrapper"><HelperSvg name="brain" /></div>
                        </div>
                        <div class="text">
                            <span>Здесь Вы найдете обучающие материалы, курсы (видео, текстовые, интерактивные), тесты и опросы на те темы, которые Вам интересны и задания, которые помогут развить определенные навыки</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="03">
                            <h4>Общайтесь, делитесь знаниями и опытом</h4>
                            <div class="icon-wrapper"><HelperSvg name="conversation" /></div>
                        </div>
                        <div class="text">
                            <span>Общайтесь в другими участниками платформы с помощью мессенджера, в котором можно обсуждать разные темы по заданиям, по общей проблематике, делитесь мыслями и идеями, чтобы прийти к результатам</span>
                        </div>
                    </div>
                    <div class="opportunity-item">
                        <div class="head hard" data-num="04">
                            <h4>Создавайте свои группы <br>и проекты</h4>
                            <div class="icon-wrapper"><HelperSvg name="creators" /></div>
                        </div>
                        <div class="text">
                            <span>Собирайтесть в группы и генерируйте свои идеи по какой-либо проблеме, создавая проекты и двигая общий прогресс развития на новый уровень</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .opportunity {
        padding: var(--space) 0;

        .head-title {
            position: relative;
        }

        .head-circle {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--blue-light-color);
            border-radius: 50%;
            opacity: .1;
            pointer-events: none;
            z-index: -1;
        }

        .circle-1 {
            width: 1276px;
            height: 985px;
            bottom: -66px;
        }

        .circle-2 {
            width: 1105px;
            height: 854px;
        }

        .circle-3 {
            width: 515px;
            height: 398px;
            bottom: 100%;
            margin-bottom: 44px;
        }

        .circle-shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200px;
            overflow: hidden;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 100%;
                width: 100%;
                height: 240px;
                border-radius: 50%;
                box-shadow: 0px 16px 32px rgba(134, 179, 209, 0.5);
            }
        }

        h2 {
            margin-bottom: 72px;
            text-align: center;
            color: var(--blue-color);
        }

        .center-line {
            position: relative;
            display: flex;
            justify-content: center;
            margin-bottom: var(--space);

            .circle {
                position: relative;
                display: block;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: var(--blue-color);
            }

            .vert-line {
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -2px;
                stroke: var(--bg-lines-color);
                
                line {
                    stroke-width: 4;
                    stroke-dasharray: 12 16;
                    stroke-linecap: round;
                }
            }
        }

        .opportunity-head {
            display: flex;
            flex-direction: column;
            gap: 48px;

            .title-box {
                position: relative;
                display: flex;

                .title {
                    position: relative;
                    padding: 24px 48px;
                    font-size: 18px;
                    background: var(--blue-grad-left);
                    border-radius: 0px 40px 40px 0px;
                    color: var(--white-color);
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    margin-top: -2px;
                    left: 0;
                    width: calc(100% + 0.5 * var(--bs-gutter-x));
                    height: 4px;
                    background-color: var(--blue-color);
                }

                .point {
                    position: absolute;
                    top: 50%;
                    left: calc(100% + 0.5 * var(--bs-gutter-x));
                    width: 20px;
                    height: 20px;
                    margin-left: -10px;
                    margin-top: -10px;
                    background-color: var(--blue-color);
                    border-radius: 50%;

                    &::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 50px;
                        height: 50px;
                        background-color: var(--blue-light-color);
                        opacity: .35;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }

            .desc {
                display: flex;
                gap: 24px;
                padding-left: 48px;
                align-items: center;

                .icon {
                    flex-shrink: 0;
                    fill: var(--blue-light-color);
                }
            }
        }

        .opportunity-items {
            display: flex;
            flex-direction: column;
            gap: 96px;
            margin-left: 110px;
            padding-top: 118px;
        }
    }

    .opportunity-item {
        --main-color: var(--gold-color);
        --grad-color: var(--gold-linear-right);
        --pad-right: 110px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 40px;

        &:nth-child(even) {
            --main-color: var(--blue-light-color);
            --grad-color: var(--blue-light-grad-right);
        }

        .head {
            position: relative;
            display: flex;
            align-items: center;
            gap: 24px;
            padding-right: var(--pad-right);
            border-bottom: 2px solid var(--main-color);
            color: var(--main-color);

            &::before {
                content: attr(data-num);
                font-size: 72px;
                font-weight: 500;
            }

            h4 {
                color: inherit;
            }

            .icon-wrapper {
                position: absolute;
                right: 0;
                bottom: 0;
                transform: translateY(50%);
                display: flex;
                align-items: center;
                justify-content: center;
                width: var(--pad-right);
                height: var(--pad-right);
                border-radius: 50%;
                background: var(--grad-color);

                .icon {
                    fill: var(--white-color);
                    stroke: var(--white-color);
                }
            }
        }

        .text {
            padding-right: var(--pad-right);
            color: var(--dark-gray-color);
        }
    }
</style>