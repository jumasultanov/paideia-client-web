<script setup>
    const props = defineProps(['field', 'validator'])
    const model = defineModel()
    
    const isTouch = ref(false)

    const error = useState(`validation.${props.field.name}`)

    const isCheckbox = computed(() => props.field.type == 'checkbox')
    const state = computed(() => {
        if (error.value) return false
        if (!isTouch.value) return null
        const success = !props.validator?.$errors.length
        if (props.field.unknownState && success) return null
        return success
    })
    
    function touch() {
        error.value = null
        if (!props.validator) return
        props.validator?.$touch()
        isTouch.value = true
    }

    defineExpose({ isTouch })
</script>

<template>
    <BFormGroup
        :invalid-feedback="error || validator?.$errors[0]?.$message"
        :state="state"
    >
        <BFormCheckbox v-if="isCheckbox" v-model="model" @focus="touch">{{ field.placeholder }}</BFormCheckbox>
        <BFormInput v-else :placeholder="field.placeholder" :type="field.type" v-model="model" :state="state" @blur="touch" />
    </BFormGroup>
</template>