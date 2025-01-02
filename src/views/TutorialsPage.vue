<template>
    <div class="py-3 px-3">
        <PageHeader title="Tutorials" />
        <div class="px-3 pt-10">
            <div class="flex flex-col space-y-4">
                <template v-for="tutorial in tutorials" :key="tutorial.id">
                    <TutorialMenuItem :title="tutorial.title" :description="tutorial.description" />
                </template>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import PageHeader from '../components/PageHeader.vue';
    import TutorialMenuItem from '../components/TutorialMenuItem.vue';

    const tutorials = ref([
        {
            id: 1,
            title: 'During a Circuit Overseer Visit',
            description: "Learn how to manage schedule changes during a Circuit Overseer's visit."
        },
        {
            id: 2,
            title: 'During Circuit Assemblies or Conventions',
            description: "Learn how to manage schedule changes during Circuit Assemblies and Regional Conventions."
        },
        {
            id: 3,
            title: "Setting the Day of your Congregation's Midweek Meeting",
            description: "Learn how to set your congregation's midweek meeting day. This will enhance the app's ability to generate weekly dates on your schedule."
        },
        {
            id: 4,
            title: "Setting the Start Time of your Midweek Meeting",
            description: "Learn how to set the start time of your midweek meeting. This will ensure the adjusted meeting runtime fits to your meeting."
        }
    ])

</script>
