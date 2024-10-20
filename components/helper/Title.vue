<script setup>
    const props = defineProps({
        content: String,
        offset: {
            type: Array,
            default: [4, 4]
        }
    })
</script>

<template>
    <span class="title">
        <span
            class="title-back"
            data-nosnippet
            v-html="content"
            :style="{
                top: offset[1] + 'px',
                left: offset[0] + 'px',
            }"
        ></span>
        <span
            class="title-forward"
            v-html="content"
        ></span>
    </span>
</template>

<style lang="scss">
    .title {
        position: relative;
        display: block;
    
        .big {
            font-size: 1.67em;
        }

        .title-forward {
            position: relative;
        }

        .title-back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: transparent;
            -webkit-text-stroke: 1px var(--back-color);
        }
    }

</style>