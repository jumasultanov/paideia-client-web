<script setup>
    const listIcons = {
        'small-arrow-right': 10,
        search: 14,
        'arrow-right': 16,
        'arrow-down': 16,
        mail: 16,
        send: 16,
        close: 18,
        user: 20,
        edit: 20,
        task: 20,
        progress: 20,
        exit: 20,
        warning: 20,
        login: [20, 21],
        vk: 32,
        tg: 32,
        youtube: 32,
        shevron: 32,
        bell: [32, 33],
        chat: 33,
        project: 86,
        logo: [138, 61],
        'logo-stock': [138, 61]
    }

    const props = defineProps({
        name: {
            type: String
        },
        size: {
            type: [Number, String]
        }
    })

    function parse() {
        const pos = props.name.indexOf('#')
        if (pos == -1) return [null, props.name]
        return props.name.split('#')
    }

    function upData() {
        const prsData = parse()
        path.value = prsData[0]
        icon.value = prsData[1]
    }

    watch(() => props.name, upData)

    const path = ref('')
    const icon = ref('')
    upData()

    const iconName = computed(() => {
        if (path.value) return `/uploads/icons/${path.value}.svg#icon-${path.value}-${icon.value}`
        return `#icon-${icon.value}`
    })
    
    const viewBox = computed(() => {
        let x = listIcons[path.value || icon.value]
        let y = x
        if (x instanceof Array) {
            y = x[1]
            x = x[0]
        }
        return `0 0 ${x} ${y}`
    })

    const width = computed(() => {
        if (props.size) return props.size
        let x = listIcons[path.value || icon.value]
        if (x instanceof Array) return x[0]
        return x
    })
</script>

<template>
    <svg :width="width" :viewBox="viewBox" class="icon">
        <use :xlink:href="iconName" />
    </svg>
</template>