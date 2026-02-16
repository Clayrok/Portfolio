<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps<{
        index : number,
        title : string,
        platform : string,
        imageUrl : string
    }>();

    const emit = defineEmits<{
        (e: 'click', index : number) : void
    }>();

    const tileStyle = computed(() => ({
        backgroundImage: `url(${props.imageUrl})`
    }));
</script>

<template>
    <article class="work-tile" :style="tileStyle" @click="emit('click', props.index)">
        <div class="gradient"></div>
        <h3>{{ props.title }}</h3>
        <h4>{{ props.platform }}</h4>
    </article>
</template>

<style lang="scss">
    .work-tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        position: relative;
        width: 100%;
        border-radius: 10px;
        border: solid 1px #808080;
        background-size: cover;
        text-shadow: 2px 2px #00000040;

        .gradient {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 100%;
            background: radial-gradient(
                circle, 
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.5) 40%,
                rgba(0, 0, 0, 0) 100%
            );
            z-index: -1;
        }

        h3 {
            color: $text-color-dark;
            font-family: Koulen;
            font-size: 96px;
            line-height: 75px;
            margin: 0;
            margin-top: 15px;
            font-weight: 300;
        }

        h4 {
            color: $text-color-dark;
            margin: 0;
            font-size: 26px;
            font-weight: 300;
            line-height: 45px;
        }
    }
</style>