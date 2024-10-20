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
    })

    const variant = ref(props.type)
    function updateVariant() {
        variant.value = (props.outline ? 'outline-' : '') + props.type
    }
    watch(() => props.outline, () => updateVariant)
    updateVariant()

    const rightIcon = ref(false)
    const external = ref(false)
    function updateIcon() {
        external.value = false
        if (!props.href) return rightIcon.value = props.submit ? 'upload' : false
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
        class="btn-component"
        :class="{ 'btn-white': white, loading, external }"
        :href="href"
        :type="submit ? 'submit': 'button'"
        @click="click"
    >
        <i v-if="burger" class="left-icon">
            <HelperSvg name="burger" />
        </i>
        <span class="btn-text">
            <slot />
        </span>
        <i v-if="rightIcon" class="right-icon">
            <div v-if="loading" class="loader"></div>
            <HelperSvg v-else :name="rightIcon" />
        </i>
    </BButton>
</template>