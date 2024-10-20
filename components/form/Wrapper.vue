<script setup>
    import { useVuelidate } from '@vuelidate/core'

    const emit = defineEmits(['submit'])
    const props = defineProps(['name', 'button'])

    const indexStore = useIndexStore()
    const fieldStore = useFieldStore()
    const { fields, rules, formData } = fieldStore.getData(props.name)
    const v$ = useVuelidate(rules, formData)

    const inputRefs = useTemplateRef('form-input')

    const loading = ref(false)

    async function submit() {
        if (loading.value) return
        inputTouch(true)
        if (!await v$.value.$validate()) return
        if (inputsHasError()) return
        loading.value = true
        indexStore.submitFields = fields
        emit('submit', formData, success => {
            inputTouch()
            if (success) inputClear()
            indexStore.submitFields = null
            setTimeout(() => loading.value = false, 400)
        })
    }

    function inputTouch(status = false) {
        inputRefs.value?.forEach(input => {
            input.isTouch = status
        })
    }

    function inputsHasError() {
        return inputRefs.value?.some(input => input.hasError)
    }

    function inputClear() {
        for (const field in fields) {
            formData[field.name] = fieldStore.getDefault(field)
        }
    }
</script>

<template>
    <BForm @submit.prevent="submit">
        <slot name="header"></slot>
        <FormInput
            v-for="(field, key) in fields"
                :key="key"
                ref="form-input"
                :not-allowed="loading"
                :field="field"
                :validator="v$[field.name] || null"
                v-model="formData[field.name]"
        />
        <HelperButton
            v-if="button"
            :submit="true"
            :type="button.style"
            :loading="loading"
        >{{ button.text }}</HelperButton>
        <slot name="footer"></slot>
    </BForm>
</template>