<script setup>
    const props = defineProps({
        outline: Boolean,
        type: {
            type: String,
            default: 'primary'
        },
        white: Boolean,
        href: String,
        burger: Boolean,
        submit: Boolean,
        loading: Boolean,
        active: Boolean,
    })

    const variant = ref(props.type)
    function updateVariant() {
        variant.value = (props.outline ? 'outline-' : '') + props.type
    }
    watch(() => props.outline, () => updateVariant)
    updateVariant()

    const rightIcon = ref(false)
    const rightIconSize = ref(16)
    const external = ref(false)
    function updateIcon() {
        external.value = false
        if (!props.href) {
            rightIcon.value = props.submit ? 'send' : false
            rightIconSize.value = props.submit ? 18 : 16
            return
        }
        rightIcon.value = 'arrow-right'
        if (/^http[s]*:\/\//.test(props.href)) external.value = true
    }
    watch(() => props.href, () => updateIcon)
    updateIcon()

    function click(ev) {
        if (props.loading) {
            ev.preventDefault()
            return false
        }
    }
</script>

<template>
    <BButton
        :variant="variant"
        :class="{ 'btn-white': white, loading, external, active }"
        :href="href"
        :type="submit ? 'submit': 'button'"
        @click="click"
    >
        <i v-if="burger" class="left-icon">
            <svg class="burger" width="16" viewBox="0 0 16 14"><path d="M1 1L13 1M1 13L13 13M1 7L8 7" stroke-width="1.5" stroke-linecap="round" /></svg>
        </i>
        <span class="btn-text">
            <slot />
        </span>
        <i v-if="rightIcon" class="right-icon">
            <div v-if="loading" class="loader"></div>
            <HelperSvg v-else :name="rightIcon" :size="rightIconSize" />
        </i>
    </BButton>
</template>