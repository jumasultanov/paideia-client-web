<script setup>
    const menus = reactive([
        [
            {
                "id": 1,
                "name": "Инженерия",
            },
            {
                "id": 2,
                "name": "Философия",
            },
            {
                "id": 3,
                "name": "ИТ и программирование",
            },
            {
                "id": 4,
                "name": "Медиа",
            },
            {
                "id": 5,
                "name": "Социология",
            },
            {
                "id": 6,
                "name": "Культура и искусство",
            },
            {
                "id": 7,
                "name": "Педагогика и образование",
            },
            {
                "id": 8,
                "name": "Экономика",
            },
        ],
        [
            {
                "id": 9,
                "parent_id": 1,
                "name": "Строительная инженерия",
            },
            {
                "id": 10,
                "parent_id": 1,
                "name": "Гидротехническая инженерия",
            },
            {
                "id": 11,
                "parent_id": 1,
                "name": "Электротехническая инженерия",
            },
            {
                "id": 12,
                "parent_id": 1,
                "name": "Теплотехническая инженерия",
            },
            {
                "id": 13,
                "parent_id": 1,
                "name": "Геодезия и картография",
            },
            {
                "id": 14,
                "parent_id": 1,
                "name": "Геотехническая инженерия",
            },
            {
                "id": 15,
                "parent_id": 1,
                "name": "Архитектурная инженерия",
            },
            {
                "id": 16,
                "parent_id": 1,
                "name": "Транспортная инженерия",
            },
            {
                "id": 21,
                "parent_id": 2,
                "name": "Раздел философия",
            },
            {
                "id": 22,
                "parent_id": 3,
                "name": "Раздел ит и программирование",
            },
            {
                "id": 23,
                "parent_id": 4,
                "name": "Раздел медиа",
            },
            {
                "id": 24,
                "parent_id": 5,
                "name": "Раздел социология",
            },
            {
                "id": 25,
                "parent_id": 6,
                "name": "Раздел культура и искусство",
            },
            {
                "id": 26,
                "parent_id": 7,
                "name": "Раздел педагогика и образование",
            },
            {
                "id": 27,
                "parent_id": 8,
                "name": "Раздел экономика",
            },
        ],
        [
            {
                "id": 17,
                "parent_id": 9,
                "name": "Чертежи и рабочие материалы",
                "to": "#"
            },
            {
                "id": 18,
                "parent_id": 9,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 19,
                "parent_id": 9,
                "name": "Цели и задачи",
                "to": "#"
            },
            {
                "id": 20,
                "parent_id": 9,
                "name": "Команда инженеров",
                "to": "#"
            },
            {
                "id": 28,
                "parent_id": 21,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 29,
                "parent_id": 22,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 30,
                "parent_id": 23,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 31,
                "parent_id": 24,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 32,
                "parent_id": 25,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 33,
                "parent_id": 26,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 34,
                "parent_id": 27,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 35,
                "parent_id": 10,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 36,
                "parent_id": 11,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 37,
                "parent_id": 12,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 38,
                "parent_id": 13,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 39,
                "parent_id": 14,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 40,
                "parent_id": 15,
                "name": "Образовательный курс",
                "to": "#"
            },
            {
                "id": 41,
                "parent_id": 16,
                "name": "Образовательный курс",
                "to": "#"
            },
        ]
    ])
    const actives = reactive([1,9])

    const props = defineProps({
        show: Boolean
    })

    function getChildren(level, parentId) {
        if (!level) return menus[level]
        return menus[level].filter(item => item.parent_id == parentId)
    }

    function getComponent(item) {
        if (item.to) return defineNuxtLink({})
        return 'span'
    }

    function hover(level, item) {
        if (item.to) return
        actives.splice(level, actives.length)
        actives.push(item.id)
        for (let i = level + 1; i < menus.length; i++) {
            const first = getChildren(i, item.id)[0]
            if (first && !first.to) actives.push(first.id)
        }
    }
</script>

<template>
    <div class="research-menu" :class="{ show }">
        <div class="container">
            <div class="research-menu-content">
                <div
                    v-for="(menu, key) in menus"
                        :key="key"
                        class="menu-level"
                >
                    <component
                        v-for="(item, keyItem) in getChildren(key, actives[key - 1])"
                            :key="keyItem"
                            :is="getComponent(item)"
                            :to="item.to"
                            class="item"
                            :class="{ link: item.to, active: item.id == actives[key] }"
                            @mouseenter="hover(key, item)"
                    >
                        <span>{{ item.name }}</span>
                        <HelperSvg v-if="!item.to" name="small-arrow-right" />
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .research-menu {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: -12px;
        width: 100%;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(12px) scale(.97);
        transform-origin: bottom center;
        transition: opacity .2s ease-in-out, transform .2s ease-in-out, visibility 0s .2s;

        &.show {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
            transform: translateY(0px) scale(1);
            transition: opacity .2s ease-in-out, transform .2s ease-in-out, visibility 0s;
        }
    }
    
    .research-menu-content {
        display: flex;
        flex-wrap: nowrap;
        padding: 24px;
        background: var(--white-color);
        border: 1px solid var(--bg-lines-color);
        box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
        border-radius: 22px;
    }

    .menu-level {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: auto;
        gap: 8px;
        padding: 24px;
        border-right: 1px solid var(--bg-lines-color);

        &:last-child {
            border-right: none;
        }

        .item {
            --current-color: var(--black-color);
            display: flex;
            padding: 8px 24px;
            gap: 24px;
            align-items: center;
            border-radius: 20px;
            color: var(--current-color);
            cursor: default;
            transition: background-color .2s ease-in-out, color .2s ease-in-out;

            .icon {
                position: relative;
                margin-left: auto;
                margin-right: -12px;
                fill: var(--current-color);
                stroke: var(--current-color);
            }

            &:hover, &.active {
                background-color: var(--bg-lines-color);
            }

            &.link {
                cursor: pointer;
                border-bottom: none;

                &:hover, &.active {
                    --current-color: var(--white-color);
                    background-color: var(--blue-color);
                }
            }
        }
    }
</style>