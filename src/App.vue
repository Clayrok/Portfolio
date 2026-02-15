<script setup lang="ts">
  import { ref } from "vue";
  import Navbar from "./components/Navbar.vue";
  import MainContent from "./components/MainContent.vue";
  import Presentation from "./pages/Presentation.vue";
  import AboutMe from "./pages/AboutMe.vue";
  import Works from "./pages/Works.vue";
  import Career from "./pages/Career.vue";
  import Footer from "./components/Footer.vue";

  const currentPageIndex = ref(0);
  const changeCurrentPage = (index: number) => currentPageIndex.value = index;
  const pages = [
        { navName: '', component: Presentation },
        { navName: 'About Me', component: AboutMe },
        { navName: 'Works', component: Works },
        { navName: 'Career', component: Career },
  ];
</script>

<template>
  <div id="content">
    <header>
      <Navbar :current-page-index="currentPageIndex"
      :pages=pages
      @nav-link-clicked="changeCurrentPage"/>
    </header>

    <main>
      <MainContent :currentPageIndex="currentPageIndex"
      :pages=pages
      @page-changed="changeCurrentPage"/>
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
  }
  
  header {
    margin-left: auto;
    margin-left: auto;
    width: 100%;
    height: $header-height;
    max-width: $desktop-max-width;
  }

  main {
    display: flex;
    align-items: center;
    flex: 1;
    max-height: calc(100vh - $header-height - $footer-height);
    overflow: hidden;
  }
</style>