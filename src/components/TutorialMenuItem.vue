<template>
    <div class="flex flex-col space-y-0">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p>{{ description }}</p>
    </div>

</template>

<script setup lang="ts">
    const { title, description } = defineProps<{
        title: string
        description: string
    }>()
</script>
