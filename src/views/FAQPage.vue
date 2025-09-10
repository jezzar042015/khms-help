<template>
    <div class="pt-14 pb-5 px-3">
        <PageHeader title="Frequently Asked Questions" />

        <div class="px-3 pt-10">
            <FaqItem v-for="{ query, answer } in faqs" :query="query" :answer="answer" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import FaqItem from '../components/FaqItem.vue';
    import PageHeader from '../components/PageHeader.vue';

    const faqs = ref<{
        query: string
        answer: string
    }[]>([
        {
            query: 'What is KH Meeting Scheduler?',
            answer: "KH Meeting Scheduler is a web application that helps you schedule midweek meetings at ease using S-140 as the provided template. The app also handles some changes during Circuit Overseers visits, circuit assemblies, and regional conventions. The app is designed to be used by Our Christian Life and Ministry Meeting overseers. " +
                "It also automatically generates assignment slips that can be printed or copied and sent to assigned students."
        },
        {
            query: 'Is my data safe with KH Meeting Scheduler?',
            answer: "Yes. To perform best, publishers information and some congregation information are stored in the browser's local storage on this device. The data is not automatically sent across your devices. This means that your data is NOT STORED ON ANY SERVER and is only accessible by you."
        },
        {
            query: 'Does the app automatically grabs the workbook content from JW.ORG?',
            answer: "No, the app does not automatically scrape the workbook content from JW.ORG as it is against the terms of the websites' usage. Volunteer brothers need to manually update the information from the workbook into the app each time a new meeting workbook is available. This saves you time from manually writing the schedule content each month."
        },
    ])
</script>
