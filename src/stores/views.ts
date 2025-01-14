import { defineStore } from "pinia";
import { ref } from "vue";
import type { Views } from "../types/views";

export const useViewStore = defineStore('views', () => {
    const activeView = ref<Views>('faq')

    const legalViews = ['faq', 'about', 'contact', 'help']

    const isLegal = (view: string) => legalViews.includes(view) 

    const changeView = (view: Views) => {
        activeView.value = view
    }

    return {
        activeView,
        changeView,
        legalViews,
        isLegal
    }
})