<script setup lang="ts">
    import { computed, inject } from 'vue';
    import { marked } from 'marked';

    const props = defineProps<{
        index : number,
        title : string,
        subtitle : string,
        imageUrl : string,
        folderPath : string,
        alignment : string
    }>();

    const tileStyle = computed(() => ({
        backgroundImage: `url(${props.imageUrl})`
    }));
    
    const openSidePage = inject<(content: string | null) => void>("openSidePage");
    const handleClick = () => {
        if (openSidePage != null) {
            fetch(props.folderPath + "/details.md").then(response => {
                response.text().then(async markdownDetails => {
                    const parsedMarkdown = await marked.parse(markdownDetails);
                    openSidePage(parsedMarkdown);
                });
            });
        }
    };
</script>

<template>
    <article class="tile" :class="props.alignment" :style="tileStyle" @click="handleClick">
        <div class="gradient"></div>
        <h3>{{ props.title }}</h3>
        <h4>{{ props.subtitle }}</h4>
    </article>
</template>

<style lang="scss">
    .tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: relative;
        width: 100%;
        border-radius: 10px;
        border: solid 1px #808080;
        background-size: cover;
        text-shadow: 2px 2px #00000040;
        background-position: right;
        overflow: hidden;

        &.left {
            text-align: left;
            
            .gradient {
                left: -35%;
                transform: translateX(0);
            }
        }

        &.center {
            text-align: center;
        }

        &.right {
            text-align: right;
        }

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
                rgba(0, 0, 0, 0.5) 60%,
                rgba(0, 0, 0, 0) 100%
            );
            z-index: -1;
        }

        h3 {
            color: $text-color-dark;
            font-family: Koulen;
            font-size: 82px;
            line-height: 75px;
            margin: 0;
            margin-top: 5px;
            font-weight: 300;
            width: calc(100% - 4rem);

            @media (max-width: 790px) {
                font-size: 38px;
                line-height: 38px;
            }

            @media (max-width: 540px) {
                font-size: 5vw;
                line-height: 5vw;
            }
        }

        h4 {
            color: $text-color-dark;
            margin: 0;
            font-size: 22px;
            font-weight: 300;
            line-height: 24px;
            width: calc(100% - 4rem);

            @media (max-width: 790px) {
                font-size: 18px;
                line-height: 18px;
            }

            @media (max-width: 540px) {
                font-size: 4vw;
                line-height: 4vw;
            }
        }
    }
</style>