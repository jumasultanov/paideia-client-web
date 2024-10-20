<script setup>
    const props = defineProps({
        href: {
            type: String,
            default: ''
        },
        icon: String,
        size: String,
    })

    const emit = defineEmits(['go'])

    const isNotLink = computed(() => !props.href)

    const linkComponent = computed(() => {
        if (isNotLink.value) return 'a'
        return defineNuxtLink({})
    })

    const linkAttrs = computed(() => {
        if (isNotLink.value) return { href: '#' }
        return { to: props.href }
    })

    function click(ev) {
        if (isNotLink.value) ev.preventDefault()
        emit('go')
    }
</script>

<template>
    <component
        :is="linkComponent"
        class="btn btn-link"
        v-bind="linkAttrs"
        @click="click"
    >
        <i v-if="icon" class="left-icon">
            <HelperSvg :size="size" :name="icon" />
        </i>
        <span class="link-text">
            <slot />
        </span>
    </component>
</template>