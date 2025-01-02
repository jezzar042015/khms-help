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
        </div>
    </div>
</template>

<script setup lang="ts">

    const { subheader = 'App Tutorials', title } = defineProps<{
        subheader?: string
        title: string
    }>()

</script>