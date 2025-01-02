<template>
    <div class="py-3 px-3 relative">
        <PageHeader title="Tutorials" />
        <div class="px-3 pt-10">
            <div class="flex flex-col space-y-8">
                <template v-for="tutorial in tutorials" :key="tutorial.id">
                    <TutorialMenuItem :title="tutorial.title" :description="tutorial.description"
                        v-show="tutorial.publish" @click="setTutorialId(tutorial.id)" />
                </template>

            </div>
        </div>
        <DuringCircuitOverseerVisit v-if="onTutorial && tutorialId === 1" 
            class="absolute z-10 top-0 left-0 bg-white w-full h-screen" @off-tutorial="offTutorial"/>
    </div>

</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import PageHeader from '../components/PageHeader.vue';
    import TutorialMenuItem from '../components/TutorialMenuItem.vue';

    import DuringCircuitOverseerVisit from '../assets/tutorials/DuringCircuitOverseerVisit.vue';

    const onTutorial = ref(false);
    const offTutorial = () => onTutorial.value = false;
    const tutorialId = ref(0);

    const setTutorialId = (id: number) => {
        tutorialId.value = id;
        onTutorial.value = true
    }

    const tutorials = ref<{
        id: number
        title: string
        description: string
        publish: boolean
    }[]>([
        {
            id: 1,
            title: "Changing the Schedule for a Circuit Overseer's Visit",
            description: "Learn how to manage schedule changes during a Circuit Overseer's visit.",
            publish: true
        },
        {
            id: 2,
            title: 'During Circuit Assemblies or Conventions',
            description: "Learn how to manage schedule changes during Circuit Assemblies and Regional Conventions.",
            publish: false
        },
        {
            id: 3,
            title: "Setting the Day of your Congregation's Midweek Meeting",
            description: "Learn how to set your congregation's midweek meeting day. This will enhance the app's ability to generate weekly dates on your schedule.",
            publish: false
        },
        {
            id: 4,
            title: "Setting the Start Time of your Midweek Meeting",
            description: "Learn how to set the start time of your midweek meeting. This will ensure the adjusted meeting runtime fits to your meeting.",
            publish: false
        }
    ])

</script>
