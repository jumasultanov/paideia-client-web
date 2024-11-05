<script setup>
    const props = defineProps({
        count: Number,
        limitView: Number,
        limitScroll: Number,
        current: Number,
    })

    const emits = defineEmits(['go'])

    const hidden = computed(() => props.count <= props.limitView)
    const dots = computed(() => 1 + Math.ceil((props.count - props.limitView) / props.limitScroll))
    const prevDisabled = computed(() => props.current == 0)
    const nextDisabled = computed(() => Math.ceil((props.current + 1) / props.limitScroll) == dots.value)

    function getStepIndex(k) {
        if (props.current % props.limitScroll == 0) return props.current + k * props.limitScroll
        const basic = Math[k > 0 ? 'ceil' : 'floor'](props.current / props.limitScroll)
        if (k < 0) k++
        return basic + k * props.limitScroll
    }
    function prev() {
        if (prevDisabled.value) return
        emits('go', getStepIndex(-1))
    }
    function next() {
        if (nextDisabled.value) return
        emits('go', getStepIndex(1))
    }
    function canMove(index) {
        return index <= getLastIndex()
    }
    function getLastIndex() {
        return (dots.value - 1) * props.limitScroll
    }

    defineExpose({ canMove, getLastIndex })
</script>

<template>
    <div
        class="slider-control"
        :class="{ 'd-none': hidden }"
    >
        <span
            class="btn btn-icon prev"
            :class="{ disabled: prevDisabled }"
            @click="prev()"
        >
            <HelperSvg name="arrow-right" />
        </span>
        <div class="dots">
            <i
                v-for="(dot, key) in dots"
                    :key="key"
                    :class="{ active: key == Math.floor(current / limitScroll) }"
            ></i>
        </div>
        <span
            class="btn btn-icon next"
            :class="{ disabled: nextDisabled }"
            @click="next()"
        >
            <HelperSvg name="arrow-right" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .slider-control {
        position: relative;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        gap: 48px;
        align-items: center;
        justify-content: center;

        .prev {
            transform: rotate(180deg);
        }

        .dots {
            display: flex;
            align-items: center;
            gap: 12px;

            i {
                width: 12px;
                height: 12px;
                border: 1px solid var(--gray-color);
                border-radius: 50%;
                background-color: var(--white-color);
                transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

                &.active {
                    border-color: var(--blue-color);
                    background-color: var(--blue-color);
                }
            }
        }
    }
</style>