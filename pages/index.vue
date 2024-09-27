<script setup>
    useHead({
        title: 'Главная',
    })
</script>

<template>
    <main>
        <div class="first-screen">
            <div class="content">
                <div class="container main-content">
                    <h1>Построй свое <br>будущее с нами!</h1>
                    <span class="subtitle">Образование, культура и мессенджер на одной платформе!</span>
                    <a href="#" class="btn btn-outline-light">
                        <span>Подробнее</span>
                        <span class="arrow">→</span>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .first-screen {
        position: relative;
        height: 1008px;
        background: url('~/assets/img/main-image.jpg') center no-repeat;
        background-size: cover;

        .content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;

            .main-content {
                color: white;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 32px;

                h1 {
                    font-size: 120px;
                    font-weight: bold;
                }

                .subtitle {
                    font-size: 32px;
                    font-weight: 600;
                }

                .btn {
                    --bs-btn-font-size: 24px;
                    --bs-btn-border-radius: 18px;
                    --bs-btn-padding-x: 40px;
                    --bs-btn-padding-y: 12px;
                    display: inline-flex;

                    .arrow {
                        position: relative;
                        margin-top: -8px;
                        font-size: 2em;
                        line-height: .75;
                    }
                }
            }
        }
    }
</style>