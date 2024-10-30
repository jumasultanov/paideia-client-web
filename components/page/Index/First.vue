<script setup>
    const lineWidth = ref(0)
    const line = useTemplateRef('line')

    onMounted(() => {
        lineWidth.value = line.value?.getBoundingClientRect().left + 20 || 0
    })
</script>

<template>
    <div class="first-screen">
        <div class="content">
            <div class="container main-content">
                <h1>
                    <i class="circle" ref="line">
                        <svg :width="lineWidth" :viewBox="`0 0 ${lineWidth} 4`">
                            <line x1="2" y1="2" :x2="lineWidth - 2" y2="2" />
                        </svg>
                        <span></span>
                    </i>
                    <span class="big">Построй</span> <span>свое</span> <br>
                    <span class="big gold">будущее</span> <span>с нами</span>
                </h1>
                <span class="subtitle hard">Образование, культура и мессенджер <br> на одной платформе!</span>
                <HelperButton :white="true" href="#">Узнать больше</HelperButton>
            </div>
        </div>
        <div class="scroll-btn">
            <HelperSvg name="shevron" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .first-screen {
        position: relative;
        min-height: calc(100vh - var(--header-height));
        background-color: white;
        
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: url('~/assets/img/main-image.jpg') center no-repeat;
            background-size: cover;
            opacity: .8;
        }

        .content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            padding: 80px 0;

            .main-content {
                color: var(--white-color);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 40px;

                h1 {
                    position: relative;
                    color: inherit;
                    font-size: 60px;
                    font-weight: 500;
                    line-height: 1.3;
                    text-transform: uppercase;
                    margin-bottom: 80px;
                    text-shadow: 0px 16px 16px rgba(12, 12, 13, 0.1), 0px 4px 4px rgba(12, 12, 13, 0.05);
                    
                    .big {
                        position: relative;
                        font-size: 100px;
                    }

                    .circle {
                        position: absolute;
                        top: 55px;
                        left: 106px;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background-color: var(--white-color);

                        &::before, &::after, span {
                            content: '';
                            position: absolute;
                            width: 650%;
                            height: 650%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 50%;
                            background-color: rgba(255,255,255,.2);
                        }

                        &::after {
                            width: 1150%;
                            height: 1150%;
                        }

                        span {
                            width: 1660%;
                            height: 1660%;
                        }

                        svg {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            height: 4px;
                            margin-top: -2px;
                            stroke: var(--white-color);
                            transform: rotate(180deg) translateX(0%); //100%
                            transition: transform 1s ease-in-out;
                            
                            line {
                                stroke-width: 4;
                                stroke-dasharray: 12 16;
                                stroke-linecap: round;
                            }
                        }
                    }
                }

                .subtitle {
                    color: inherit;
                    font-size: 26px;
                    font-weight: normal;
                    line-height: 1.25;
                    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                }
            }
        }

        .scroll-btn {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            padding: 24px;
            pointer-events: none;

            .icon {
                fill: var(--white-color);
                perspective: 100px;
                animation: jump 2s ease-in-out infinite;
            }
        }
    }
</style>