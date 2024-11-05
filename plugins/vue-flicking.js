import Flicking from "@egjs/vue3-flicking"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Flicking", Flicking)
});