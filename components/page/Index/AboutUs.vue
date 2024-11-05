<template>
    <div class="about-us">
        <div class="container about-us-container bg-lines">
            <HelperBGLines :pos="[1,3,5]" :lighter="0.2" />
            <div class="center-decor">
                <i class="circle"></i>
            </div>
            <div class="row">
                <div class="col-5 about-text">
                    <h2 class="with-line">Узнайте о нас больше</h2>
                    <div class="text">
                        <p>Посмотрите наш ролик и примите участие в разработке платформы, сделав первый шаг к построению города будущего на основе ресурсно-ориентированной экономики.</p>
                        <p>Получите ответы на все ваши вопросы о том какие проекты существуют и как им помочь.</p>
                    </div>
                    <div class="btns">
                        <HelperButton :white="true" href="#">Миссия</HelperButton>
                        <HelperButton :white="true" :outline="true" href="#">Наш прогресс</HelperButton>
                    </div>
                </div>
                <div class="col-4 offset-2 video-wrapper">
                    <div class="video">
                        <img src="~/assets/img/video.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/mixins';

    .about-us {
        background-color: var(--blue-color);
        color: var(--white-color);
        overflow: hidden;
        
        .about-us-container {
            padding: var(--space) 0;

            .about-text {
                display: flex;
                flex-direction: column;
                gap: 48px;
            
                h2 {
                    color: inherit;
                }

                .text {
                    color: var(--gray-color);

                    p {
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                .btns {
                    display: flex;
                    gap: 24px;
                }
            }
        }
    }

    .video {
        position: relative;

        iframe, img, a {
            position: relative;
            display: block;
            width: 100%;
            border-radius: 22px;
        }

        &::before {
            @include absolute-inner;
            margin-left: 12px;
            margin-top: 12px;
            border-radius: 22px;
            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='22' ry='22' stroke='white' stroke-width='1.5' stroke-dasharray='6%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        }
    }

    .center-decor {
        --op-white: rgba(255,255,255,.2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        //animation: background-fill 4s ease-in-out infinite;
        
        &, .circle {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        &, .circle, .circle::after {
            background-color: var(--blue-color);
            border: 1px solid var(--op-white);
            border-radius: 50%;
        }
        
        
        .circle {
            width: 32px;
            height: 32px;
            //animation: background-fill-2 4s ease-in-out infinite;
        }
        
        .circle::after {
            content: '';
            width: 16px;
            height: 16px;
            //animation: background-fill-3 4s ease-in-out infinite;
        }
    }

    @keyframes background-fill {
        12% {
            background-color: #6181AE;
        }
        0%, 25% {
            background-color: var(--blue-color);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5);
        }
    }
    @keyframes background-fill-2 {
        37% {
            background-color: #6181AE;
        }
        15%, 50% {
            background-color: var(--blue-color);
        }
    }
    @keyframes background-fill-3 {
        62% {
            background-color: #6181AE;
        }
        40%, 75% {
            background-color: var(--blue-color);
        }
    }
</style>