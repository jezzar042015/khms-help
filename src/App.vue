<template>
  <div class="max-w-[1080px] mx-auto roboto-slab-normal">
    <FAQPage v-if="viewStore.activeView === 'faq'" />
    <TutorialsPage v-if="viewStore.activeView === 'help'" />
    <AboutPage v-if="viewStore.activeView === 'about'" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouterStore } from './stores/router';
  import { useViewStore } from './stores/views';
  import AboutPage from './views/AboutPage.vue';
  import FAQPage from './views/FAQPage.vue'
  import TutorialsPage from './views/TutorialsPage.vue';
  import type { Views } from './types/views';

  const viewStore = useViewStore();
  const router = useRouterStore()

  onMounted(() => {
    const requestedView = router.getParam('view');
    if (!requestedView) return
    if (!viewStore.isLegal(requestedView)) return
    viewStore.activeView = requestedView as Views

  })



</script>
