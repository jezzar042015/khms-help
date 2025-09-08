<template>
    <div class="py-12 px-3">
        <TutorialHeader :title="title" @to-tutorials="emits('off-tutorial')" />

        <slot name="default">

        </slot>

        <div @click="emits('off-tutorial')" class="text-blue-500 cursor-pointer mt-5 py-3 px-3 underline">
            Back To Tutorials
        </div>
    </div>
</template>

<script setup lang="ts">
    import TutorialHeader from '../components/TutorialHeader.vue';

    const { title } = defineProps<{
        title: string
    }>()

    const emits = defineEmits(['off-tutorial'])
</script>
