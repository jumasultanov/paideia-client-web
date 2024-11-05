<script setup>
    const props = defineProps(['field', 'validator', 'not-allowed', 'invalid-placement'])
    const model = defineModel()
    
    const modelBeforeTouch = ref('')
    const isTouch = ref(false)
    const isFocus = ref(false)

    const indexStore = useIndexStore()

    const error = computed(() => indexStore.getValidationError(props.field.name))
    const hasError = computed(() => !!error.value)
    const errorMessage = computed(() => error.value || props.validator?.$errors[0]?.$message)

    const isCheckbox = computed(() => props.field.type == 'checkbox')
    const state = computed(() => {
        if (error.value) return false
        if (!isTouch.value) return null
        const success = !props.validator?.$errors.length
        return success
    })

    const popover = useTemplateRef('popover')

    watch(errorMessage, () => {
        setTimeout(() => {
            popover.value?.show()
        }, 200)
    })
    
    function touch() {
        isFocus.value = false
        if (modelBeforeTouch.value != model.value) indexStore.resetValidation(props.field.name)
        if (!props.validator) return
        props.validator?.$touch()
        isTouch.value = true
    }

    function focus() {
        modelBeforeTouch.value = model.value
        isFocus.value = true
    }

    defineExpose({ isTouch, hasError })
</script>

<template>
    <BFormGroup
        :state="state"
        :label="isCheckbox ? undefined: field.label"
        :class="{ 'is-focus': isFocus, 'not-allowed': notAllowed }"
    >
        <BFormCheckbox v-if="isCheckbox" switch v-model="model" @focus="touch">{{ field.label }}</BFormCheckbox>
        <template v-else>
            <BFormInput autocomplete="off" :placeholder="field.placeholder" :type="field.type" v-model="model" :state="state" @focus="focus" @blur="touch" />
            <BPopover
                v-if="errorMessage"
                ref="popover"
                :click="true"
                :close-on-hide="true"
                :delay="{show: 0, hide: 0}"
                :placement="invalidPlacement || 'right'"
                :offset="12"
                :tooltip="true"
                class="error"
            >
                <template #target>
                    <div class="invalid-icon circle-box">
                        <HelperSvg name="warning" />
                    </div>
                </template>
                {{ errorMessage }}
            </BPopover>
        </template>
    </BFormGroup>
</template>