<template>
    <div class="pb-8 flex flex-col space-y-1">
        <h2 class="font-bold text-xl">{{ query }}</h2>
        <p class="text-lg">
            {{ answer }}
        </p>
    </div>
</template>

<script setup lang="ts">
    const { query, answer } = defineProps<{
        query: string
        answer: string
    }>()
</script>