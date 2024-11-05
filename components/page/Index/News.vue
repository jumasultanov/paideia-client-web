<script setup>
    const news = reactive([
        {
            id: 1,
            name: 'Новая выставка на Geek Picnic',
            preview: 'На фестивале Geek Picnic прошла выставка посвященная проекту Венера. Многие люди проявили заинтересованность',
            img: '/_nuxt/assets/img/news/news-1.jpg',
            created_date: '05.10.2024',
            created_time: '13:10',
            url: '#',
        },
        {
            id: 2,
            name: 'Начался новый этап игры "Aether: эхо невидимых"',
            preview: 'Участники проведут поиск ориентируясь по физическому и цифровому городу, используя свои острые глаза и критическое мышление, чтобы найти подсказки, скрытые в неожиданных местах',
            img: '/_nuxt/assets/img/news/news-2.jpg',
            created_date: '04.10.2024',
            created_time: '09:50',
            url: '#',
        },
        {
            id: 3,
            name: 'Туалет по технологиям Жака Фреско',
            preview: 'Участник ALEXA сделал прототип туалета по технологиям Жака Фреско. Теперь чертеж данного устройства доступен всем желающим',
            img: '/_nuxt/assets/img/news/news-3.jpg',
            created_date: '29.09.2024',
            created_time: '16:20',
            url: '#',
        },
        {
            id: 4,
            name: 'Инвестор согласился профинансировать умный дом',
            preview: 'Инвестор Алексей Поднебесный согласился профинансировать постройку умного дома по нашим чертежам',
            img: '/_nuxt/assets/img/news/news-4.jpg',
            created_date: '29.09.2024',
            created_time: '15:00',
            url: '#',
        },
        {
            id: 5,
            name: 'Начался новый этап игры "Aether: эхо невидимых"',
            preview: 'Участники проведут поиск ориентируясь по физическому и цифровому городу, используя свои острые глаза и критическое мышление, чтобы найти подсказки, скрытые в неожиданных местах',
            img: '/_nuxt/assets/img/news/news-2.jpg',
            created_date: '04.10.2024',
            created_time: '09:50',
            url: '#',
        },
        {
            id: 6,
            name: 'Туалет по технологиям Жака Фреско',
            preview: 'Участник ALEXA сделал прототип туалета по технологиям Жака Фреско. Теперь чертеж данного устройства доступен всем желающим',
            img: '/_nuxt/assets/img/news/news-3.jpg',
            created_date: '29.09.2024',
            created_time: '16:20',
            url: '#',
        },
        {
            id: 7,
            name: 'Инвестор согласился профинансировать умный дом',
            preview: 'Инвестор Алексей Поднебесный согласился профинансировать постройку умного дома по нашим чертежам',
            img: '/_nuxt/assets/img/news/news-4.jpg',
            created_date: '29.09.2024',
            created_time: '15:00',
            url: '#',
        },
    ])

    const flicking = useTemplateRef('flicking')
    const flickingPagi = useTemplateRef('pagi')
    const limitView = ref(4)
    const limitScroll = ref(3)
    const flickingOptions = reactive({
        align: 'prev',
        preventDefaultOnDrag: true,
    })

    const slideCurrent = ref(0)
    async function slideGo(index) {
        try {
            await flicking.value.moveTo(index);
            slideCurrent.value = index
        } catch (e) { console.log(e) }
    }
    async function slideChanged({ index, isTrusted }) {
        if (!isTrusted) return
        slideCurrent.value = index
        if (flickingPagi.value.canMove(index)) return
        try {
            slideCurrent.value = flickingPagi.value.getLastIndex()
            await flicking.value.moveTo(slideCurrent.value);
        } catch (e) { console.log(e) }
    }
</script>

<template>
    <div class="news">
        <div class="container news-container bg-lines">
            <HelperBGLines :pos="[1,2,3,4,5]" />
            <div class="head">
                <h2 class="with-line"><span class="gold">Последние</span> новости</h2>
                <HelperButton :outline="true" href="#">Все новости</HelperButton>
            </div>
            <div class="row news-slider">
                <Flicking :options="flickingOptions" ref="flicking" @changed="slideChanged">
                    <div
                        v-for="(item, key) in news"
                            :key="key"
                            class="news-panel"
                        >
                        <NuxtLink :to="item.url" class="news-item">
                            <div class="img-box">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="content">
                                <div class="text">
                                    <span class="title">{{ item.name }}</span>
                                    <span>{{ item.preview }}</span>
                                </div>
                                <div class="created">
                                    <div class="date">
                                        <HelperSvg name="date" />
                                        <span>{{ item.created_date }}</span>
                                    </div>
                                    <div class="time">
                                        <HelperSvg name="time" />
                                        <span>{{ item.created_time }}</span>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </Flicking>
                <HelperSliderPagi
                    ref="pagi"
                    :count="news.length"
                    :limitView="limitView"
                    :limitScroll="limitScroll"
                    :current="slideCurrent"
                    @go="slideGo"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/assets/scss/mixins';
    
    .news {

        .news-container {
            display: flex;
            flex-direction: column;
            padding: var(--space) 0;
            gap: 48px;

            .head {
                display: flex;
                gap: 48px;
                align-items: center;
                justify-content: space-between;

                h2 {
                    --line-color: var(--gold-color);
                }
            }

            .news-slider {
                gap: 48px;

                > * {
                    padding: 0;
                }

                .flicking-viewport {
                    border-radius: 22px;
                    margin: -20px 0;
                    padding: 20px 0;
                }
            }

            .news-panel {
                width: 25%;
                padding-right: calc(var(--bs-gutter-x)* 0.5);
                padding-left: calc(var(--bs-gutter-x)* 0.5);
            }
        }
    }

    .news-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 22px;
        border: 1px solid var(--blue-light-color);
        background-color: var(--white-color);
        overflow: hidden;
        transition: box-shadow .2s ease-in-out, border-color .2s ease-in-out;

        &:hover {
            box-shadow: 0 6px 12px rgba(#86B3D1, .2);
            border-color: transparent;
        }

        .img-box {
            
            img {
                display: block;
                width: 100%;
            }
        }

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 24px;
            gap: 24px;

            .title {
                @include medium-font;
                color: var(--black-color);
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 12px;
                color: var(--black-light-color);
            }

            .created {
                margin-top: auto;
                display: flex;
                gap: 24px;
                justify-content: space-between;
                align-items: center;
                color: var(--blue-light-color);

                > * {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                }

                .icon {
                    fill: var(--blue-light-color);
                    margin-top: -1px;
                }
            }
        }
    }
</style>