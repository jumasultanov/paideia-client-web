<script setup>
    const lineHeight = ref(0)
    const el = useTemplateRef('el')
    const line = useTemplateRef('line')

    onMounted(() => {
        lineHeight.value = (el.value?.clientHeight || 0) +
            (el.value?.getBoundingClientRect().top || 0) -
            (line.value?.getBoundingClientRect().top || 0)
    })
</script>

<template>
    <div class="container opportunity" ref="el">
        <div class="row justify-content-center">
            <div class="col-6">
                <h2>Все нужные инструменты в одном месте</h2>
            </div>
        </div>
        <div class="center-line" ref="line">
            <svg class="vert-line" :height="lineHeight" :viewBox="`0 0 4 ${lineHeight}`">
                <line x1="2" y1="2" x2="2" :y2="lineHeight - 2" />
            </svg>
            <i class="circle"></i>
        </div>
        <div class="row">
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

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .opportunity {
        padding: var(--space) 0;

        h2 {
            margin-bottom: 72px;
            text-align: center;
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
                    background: linear-gradient(90deg, var(--blue-light-color) 0%, var(--blue-color) 100%);
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
    }
</style>