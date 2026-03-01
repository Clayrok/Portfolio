<script setup lang="ts">
  import { ref, provide, onMounted, onUnmounted } from "vue";
  import Details from "./components/Details.vue";
  import Navbar from "./components/Navbar.vue";
  import MainContent from "./components/MainContent.vue";
  import Presentation from "./pages/Presentation.vue";
  import AboutMe from "./pages/AboutMe.vue";
  import Skills from "./pages/Skills.vue";
  import Works from "./pages/Works.vue";
  import Experience from "./pages/Experience.vue";
  import Footer from "./components/Footer.vue";

  const currentPageIndex = ref(0);
  const detailsContent = ref<string | null>(null);

  const pages = [
    { navName: '', component: Presentation },
    { navName: 'About Me', component: AboutMe },
    { navName: 'Skills', component: Skills },
    { navName: 'Works', component: Works },
    { navName: 'Experience', component: Experience },
  ];

  const changeCurrentPage = (index: number) => currentPageIndex.value = index;
  const openDetails = (content: any) => detailsContent.value = content;
  const closeDetails = () => detailsContent.value = null;

  provide("openDetails", openDetails);
  provide("closeDetails", closeDetails);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      changeCurrentPage((currentPageIndex.value + 1) % pages.length);
    } else if (event.key === "ArrowUp") {
      changeCurrentPage((currentPageIndex.value - 1 + pages.length) % pages.length);
    }
  };

  onMounted(() => {
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
        @page-changed="changeCurrentPage"
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
  }
</style>