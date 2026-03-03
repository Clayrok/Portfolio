<script setup lang="ts">
  import { ref, provide, onMounted, onUnmounted, computed } from "vue";
  import { useI18n } from "./composables/useI18n";
  import Details from "./components/Details.vue";
  import Navbar from "./components/Navbar.vue";
  import MainContent from "./components/MainContent.vue";
  import PageIndicator from "./components/PageIndicator.vue";
  import Presentation from "./pages/Presentation.vue";
  import AboutMe from "./pages/AboutMe.vue";
  import Skills from "./pages/Skills.vue";
  import Works from "./pages/Works.vue";
  import Experience from "./pages/Experience.vue";
  import Footer from "./components/Footer.vue";

  const currentPageIndex = ref(0);
  const detailsContent = ref<string | null>(null);
  const canScroll = ref(true);

  const { t, currentLanguage, loadTranslations } = useI18n();

  const pages = computed(() => [
    { navName: t('navbar.pages.presentation') as string, component: Presentation },
    { navName: t('navbar.pages.about_me') as string, component: AboutMe },
    { navName: t('navbar.pages.skills') as string, component: Skills },
    { navName: t('navbar.pages.works') as string, component: Works },
    { navName: t('navbar.pages.experience') as string, component: Experience },
  ]);

  const changeCurrentPage = (index: number) => currentPageIndex.value = index;
  const currentWorkPath = ref<string | null>(null);
  const openDetails = (content: any, folderPath?: string) => {
    detailsContent.value = content;
    currentWorkPath.value = folderPath || null;
    canScroll.value = false;
  };
  const closeDetails = () => {
    detailsContent.value = null;
    canScroll.value = true;
  };

  provide("openDetails", openDetails);
  provide("currentWorkPath", currentWorkPath);
  provide("closeDetails", closeDetails);
  provide("canScroll", canScroll);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!canScroll.value) return;
    if (event.key === "ArrowDown") {
      changeCurrentPage((currentPageIndex.value + 1) % pages.value.length);
    } else if (event.key === "ArrowUp") {
      changeCurrentPage((currentPageIndex.value - 1 + pages.value.length) % pages.value.length);
    }
  };

  onMounted(() => {
    loadTranslations(currentLanguage.value);
    window.addEventListener("keydown", handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });
</script>

<template>
  <div id="content">
    <header>
      <Navbar
        :current-page-index="currentPageIndex"
        :pages="pages"
        @nav-link-clicked="changeCurrentPage"
      />
    </header>

    <main>
      <MainContent
        :currentPageIndex="currentPageIndex"
        :pages="pages"
        :canScroll="canScroll"
        @page-changed="changeCurrentPage"
      />

      <PageIndicator
        :total-count="pages.length" 
        :current-index="currentPageIndex"
        @page-click="changeCurrentPage"
      />

      <Details :content="detailsContent"/>
    </main>

    <Footer/>
  </div>
</template>

<style lang="scss">
  #content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 2rem;

    @include mobile {
      padding: 0 4vw;
    }

    header {
      width: 100%;
      height: $header-height;
      max-width: $desktop-max-width;
      margin: 0 auto;

      @include mobile {
        height: fit-content;
      }
    }
  
    main {
      display: flex;
      align-items: center;
      flex: 1;
      max-height: calc(100vh - $header-height - $footer-height);
      overflow: hidden;
    }

    .page-indicator {
      @include mobile {
        position: fixed;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        zoom: 0.8;
      }
    }
  }
</style>