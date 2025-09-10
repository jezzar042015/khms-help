<template>
    <div class="pt-12 px-3 xl:px-96">
        <TutorialHeader :title="title" @to-tutorials="emits('off-tutorial')" />

        <slot name="default">

        </slot>

        <div @click="emits('off-tutorial')" class="text-blue-500 cursor-pointer mt-5 pt-3 pb-16 px-3 underline">
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
