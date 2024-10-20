<script setup>
    onMounted(() => {
        useIndexStore().appMounted = true
    })
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>