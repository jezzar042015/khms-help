import { defineStore } from "pinia";
import { ref } from "vue";
import type { Views } from "../types/views";

export const useViewStore = defineStore('views', () => {
    const activeView = ref<Views>('faq')
    
    const changeView = (view: Views) => {
        activeView.value = view
    }

    return {
        activeView,
        changeView
    }
})