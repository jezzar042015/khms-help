import { defineStore } from "pinia";
import { computed, ref } from "vue";
import tutorials from "../data/tutorial-list";

export const useTutorialStore = defineStore('tutorial', () => {

    const list = ref(tutorials)
    const published = computed(()=> {
        return list.value.filter(t => t.publish)
    })

    const isPublished= (id: number) => {
        return published.value.map(p => p.id).includes(id)
    }

    return {
        list,
        published,
        isPublished
    }
});