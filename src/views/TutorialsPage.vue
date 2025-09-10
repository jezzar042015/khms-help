<template>
    <div class="pt-14 pb-5 px-3">
        <PageHeader title="Tutorials" />
        <div class="px-3 pt-10">
            <div class="flex flex-col space-y-1">
                <template v-for="tutorial in tutorialsStore.published" :key="tutorial.id">
                    <TutorialMenuItem :title="tutorial.title" :description="tutorial.description"
                        v-show="tutorial.publish" @click="setTutorialId(tutorial.id)" />
                </template>

            </div>
        </div>
        <Tutorial007 v-if="onTutorial && tutorialId === 7" class="absolute z-10 top-0 left-0 bg-white w-full h-screen"
            @off-tutorial="offTutorial" />
        <Tutorial001 v-if="onTutorial && tutorialId === 1" class="absolute z-10 top-0 left-0 bg-white w-full h-screen"
            @off-tutorial="offTutorial" />
        <Tutorial005 v-if="onTutorial && tutorialId === 5" class="absolute z-10 top-0 left-0 bg-white w-full h-screen"
            @off-tutorial="offTutorial" />
        <Tutorial006 v-if="onTutorial && tutorialId === 6" class="absolute z-10 top-0 left-0 bg-white w-full h-screen"
            @off-tutorial="offTutorial" />
        
    </div>

</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTutorialStore } from '../stores/tutorials';
    import { useRouterStore } from '../stores/router';
    import PageHeader from '../components/PageHeader.vue';
    import TutorialMenuItem from '../components/TutorialMenuItem.vue';
    import Tutorial001 from '../assets/tutorials/Tutorial001.vue';
    import Tutorial005 from '../assets/tutorials/Tutorial005.vue';
    import Tutorial006 from '../assets/tutorials/Tutorial006.vue';
    import Tutorial007 from '../assets/tutorials/Tutorial007.vue';

    const tutorialsStore = useTutorialStore()
    const routerStore = useRouterStore()
    const onTutorial = ref(false);
    const offTutorial = () => onTutorial.value = false;
    const tutorialId = ref(0);

    const setTutorialId = (id: number) => {
        tutorialId.value = id;
        onTutorial.value = true
    }

    onMounted(() => {
        const item = routerStore.getParam('item')
        if (!item) return

        if (!tutorialsStore.isPublished(Number(item))) {
            routerStore.deleteParam('item')
            return
        }
        setTutorialId(Number(item))

    })

</script>
