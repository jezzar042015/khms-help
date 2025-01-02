<template>
    <div class="px-3 pb-10">
        <div class="flex justify-between items-center">
            <div>
                <div>
                    <h2>{{ subheader }}</h2>
                </div>
                <div class="mt-2">
                    <h1 class="font-bold text-3xl">
                        {{ title }}
                    </h1>
                </div>
            </div>
            <div>
                <ul class="flex space-x-16">
                    <li v-for="{ label, view } in menuItems" @click="viewStore.changeView(view)"
                        :class="menuFormat(view)">
                        {{ label }}
                    </li>
                    <li @click="gotoScheduler" class="cursor-pointer p-3 text-black/80 hover:text-black" >Scheduler</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useViewStore } from '../stores/viewStore';
    import type { Views } from '../types/views';

    const { subheader = 'KH Meeting Scheduler', title } = defineProps<{
        subheader?: string
        title: string
    }>()

    const viewStore = useViewStore()

    const menuItems: { label: string, view: Views }[] = [
        { label: 'FAQ', view: 'faq' },
        { label: 'Tutorials', view: 'help' },
        { label: 'About', view: 'about' }
    ]

    const menuFormat = (view: Views) => {
        const base = 'cursor-pointer p-3 text-black/60 hover:text-black'
        if (view === viewStore.activeView) return base + ' border-b-2 border-black font-bold text-black'
        return base
    }

    const gotoScheduler = () => {
        console.log(import.meta.env.VITE_SCHEDULER_APP);
        window.location.href = import.meta.env.VITE_SCHEDULER_APP
    }
</script>