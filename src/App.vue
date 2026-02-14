<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"
  import Footer from "./components/Footer.vue"
</script>

<template>
  <div id="content">
    <header>
      <Navbar/>
    </header>

    <main>
      
    </main>

    <Footer/>
  </div>
</template>

<style lang="scss">
  header {
    position: fixed;
    left: 2rem;
    right: 2rem;
    height: $header-height;
    max-width: $desktop-max-width;
  }

  main {
    margin-top: calc($header-height + $main-margin);
    margin-bottom: calc($footer-height + $main-margin);
  }

  #content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>