<script setup>
    const props = defineProps({
        title: String,
    })
    const model = defineModel()
</script>

<template>
    <BModal v-model="model">
        <template v-slot:header="{ cancel }">
            <h3>
                <HelperTitle :content="title" />
            </h3>
            <div class="modal-close" @click="cancel">
                <HelperSvg name="close" />
            </div>
        </template>
        <slot />
        <template v-slot:footer="{ ok, cancel }">
            <slot name="buttons" />
        </template>
    </BModal>
</template>