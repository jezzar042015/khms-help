<template>
  <div class="max-w-[1080px] mx-auto roboto-slab-normal">
    <FAQPage v-if="viewStore.activeView === 'faq'" />
    <TutorialsPage v-if="viewStore.activeView === 'help'" />
    <AboutPage v-if="viewStore.activeView === 'about'" />
  </div>
</template>

<script setup lang="ts">
  import { useViewStore } from './stores/viewStore';
  import AboutPage from './views/AboutPage.vue';
  import FAQPage from './views/FAQPage.vue'
  import TutorialsPage from './views/TutorialsPage.vue';

  const viewStore = useViewStore();
</script>
