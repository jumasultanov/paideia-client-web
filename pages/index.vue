<script setup>
    useHead({
        title: 'Главная',
    })

    const h1 = ref(`
        <span class="big">Построй</span> <span>свое</span> <br><span class="big">будущее</span> <span>с нами</span>
    `)
</script>

<template>
    <main>
        <div class="first-screen">
            <div class="content">
                <div class="container main-content">
                    <h1>
                        <HelperTitle :content="h1" :offset="[8,8]" />
                    </h1>
                    <span class="subtitle">Образование, культура и мессенджер <br> на одной платформе!</span>
                    <HelperButton :white="true" href="#">Узнать больше</HelperButton>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .first-screen {
        position: relative;
        min-height: calc(100vh - 164px);
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
                gap: 36px;

                h1 {
                    --back-color: var(--white-color);
                    color: inherit;
                    font-size: 60px;
                    font-weight: normal;
                    line-height: 1.3;
                    text-transform: uppercase;
                    margin-bottom: 36px;
                    
                    span {
                        position: relative;
                        display: inline-block;
                        white-space: nowrap;
                        color: var(--white-color);
                        text-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
                    }
                }

                .subtitle {
                    font-size: 36px;
                    font-weight: bold;
                    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
</style>