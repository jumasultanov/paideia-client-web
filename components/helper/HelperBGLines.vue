<script setup>
    const props = defineProps({
        pos: Array,
        lighter: Number
    })

    function getPos(index) {
        let left = (index - 1) * 0.25
        let offset = 0
        if (index > 3) offset = -1
        else if (index == 3) offset = -0.5
        return {
            '--pos-left': left,
            '--pos-offset': offset,
            '--lighter': props.lighter
        }
    }
</script>

<template>
    <div
        v-for="(index, key) in pos"
            class="bg-line"
            :class="{ lighter: lighter > 0 }"
            :key="key"
            :style="getPos(index)"
    ></div>
</template>