<script setup>
    import { useVuelidate } from '@vuelidate/core'

    const emit = defineEmits(['submit'])
    const props = defineProps(['name', 'button'])

    const fieldStore = useFieldStore()
    const { fields, rules, formData } = fieldStore.getData(props.name)
    const v$ = useVuelidate(rules, formData)

    const inputRefs = useTemplateRef('form-input')

    const loading = ref(false)

    async function submit() {
        if (loading.value) return
        inputTouch(true)
        if (!await v$.value.$validate()) return
        loading.value = true
        useState('submitFields', () => fields)
        emit('submit', formData, success => {
            inputTouch()
            if (success) inputClear()
            setTimeout(() => loading.value = false, 400)
        })
    }

    function inputTouch(status = false) {
        inputRefs.value?.forEach(input => {
            input.isTouch = status
        })
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
                :field="field"
                :validator="v$[field.name] || null"
                v-model="formData[field.name]"
        />
        <BButton :disabled="loading" type="submit" :variant="button.style">
            <span>{{ button.text }}</span>
            <BSpinner v-show="loading" small />
        </BButton>
        <slot name="footer"></slot>
    </BForm>
</template>