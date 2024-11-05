<template>
    <div class="projects-wrapper">
        <div class="container projects-container bg-lines">
            <HelperBGLines :pos="[1,2,3,4,5]" />
            <div class="row">
                <div class="col-6 head">
                    <h2 class="with-line"><span class="gold">Мы</span> сотрудничаем с инновационными проектами</h2>
                    <div class="sub-text">
                        <span>Наши партнёры инициируют перемены в мире и стремятся к созданию устойчивого и справедливого общества</span>
                    </div>
                </div>
            </div>
            <div class="row row-gap-4">
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/designing-the-future.png" alt="">
                        <span>Проектирование будущего</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/city-farming.png" alt="">
                        <span>Сити-фермерство</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/open-source-ecology.png" alt="">
                        <span>Open source ecology</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/liberum-terra.png" alt="">
                        <span>Liberum Terra</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/order-new-earth.png" alt="">
                        <span>Order New Earth</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/nir.png" alt="">
                        <span>Народный институт развития</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="project-item">
                        <img src="~/assets/img/projects/tvg.png" alt="">
                        <span>The Venus Game</span>
                        <div class="curves">
                            <HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" /><HelperSvg name="curve" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/mixins';

    .projects-wrapper {
        position: relative;
        background: radial-gradient(50% 233.75% at 50% 50%, white 0%, rgba(255, 255, 255, 0.6) 50.3%);

        &::before {
            @include absolute-inner;
            background: url('~/assets/img/projects-bg.jpg') center no-repeat;
            background-size: cover;
            z-index: -1;
            opacity: .1;
        }

        .projects-container {
            display: flex;
            flex-direction: column;
            gap: 80px;
            padding: var(--space) 0;

            .head {
                display: flex;
                flex-direction: column;
                gap: 48px;

                h2 {
                    --line-color: var(--gold-color);
                }
            }
        }
    }

    .project-item {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        align-items: center;
        height: 100%;

        img {
            display: block;
            max-width: 150px;
        }

        .icon {
            position: absolute;
            inset: 0;
            stroke: var(--blue-light-color);

            &:nth-child(2) {
                inset: 0 0 auto auto;
                transform: rotate(90deg);
            }

            &:nth-child(3) {
                inset: auto 0 0 auto;
                transform: rotate(180deg);
            }

            &:nth-child(4) {
                inset: auto auto 0 0;
                transform: rotate(-90deg);
            }
        }
    }
</style>