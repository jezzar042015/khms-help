<template>
    <div class="flex flex-row space-x-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-all duration-150">
        <div class="">
            <IconHelp class="h-10 w-10 opacity-65" />
        </div>
        <div class="flex flex-col space-y-0">
            <h2 class="text-lg font-bold">{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>

</template>

<script setup lang="ts">
import IconHelp from '../assets/icons/IconHelp.vue';

    const { title, description } = defineProps<{
        title: string
        description: string
    }>()
</script>
