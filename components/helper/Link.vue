<script setup>
    const props = defineProps({
        href: {
            type: String,
            default: '#'
        },
        icon: {
            type: String
        }
    })
</script>

<template>
    <NuxtLink class="btn btn-link" :to="href">
        <i v-if="icon" class="left-icon">
            <HelperSvg :name="icon" />
        </i>
        <span class="link-text">
            <slot />
        </span>
    </NuxtLink>
</template>