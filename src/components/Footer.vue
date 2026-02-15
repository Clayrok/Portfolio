<script setup lang="ts">
    const year : number = new Date().getFullYear();
</script>

<template>
  <footer>
    <div>
        <p>Antoine Chaumin - Game programmer & Web developer</p>
        <span id="separator"></span>
        <p>{{ year }}</p>
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: $footer-height;
    background: var(--background-color);

    p {
        margin: 0;
        margin-bottom: -5px;
        padding: 0;
        color: var(--footer-text-color);
    }

    div {
        display: flex;
        align-items: center;
        gap: 10px;
        width: $desktop-max-width;
    }

    #separator {
        flex: 1;
        height: 2px;
        border-bottom: solid 1px var(--footer-text-color);
    }
  }
</style>