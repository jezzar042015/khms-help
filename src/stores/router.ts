import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRouterStore = defineStore('router', () => {

    const params = computed(() => {
        const search = ref(location.search)
        const urlSearchParams = new URLSearchParams(search.value);
        const allParams = [];

        for (const [param, value] of urlSearchParams.entries()) {
            allParams.push({ param, value });
        }

        return allParams;
    });

    const getParam = (key: string) => {
        const searchParams = params.value;
        const param = searchParams.find(s => s.param === key)
        return param?.value
    }

    const deleteParam = (key: string) => {
        const url = new URL(window.location.href);
        url.searchParams.delete(key)
        window.history.pushState({}, '', url);
      }

    return {
        params,
        getParam,
        deleteParam
    }
})