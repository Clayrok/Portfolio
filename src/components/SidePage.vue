<script setup lang="ts">
    import { ref, inject, watch } from "vue";

    const props = defineProps<{
        content: string | null;
    }>();

    const closeSidePageProvider = inject<() => void>("closeSidePage");

    const isOpened = ref(false);

    const closeSidePage = () => {
        isOpened.value = false;
        if (closeSidePageProvider) closeSidePageProvider();
    };

    watch(() => props.content, (newContent) => {
        isOpened.value = !!newContent;
    }, { immediate: true });
</script>

<template>
    <div class="side-page" :class="{ opened: isOpened }">
        <div class="underlay" @click="closeSidePage"></div>
        <div class="page">
            <button class="close-button" @click="closeSidePage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21M21 3L3 21" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
            </button>
            <div class="content" v-html="props.content" data-scrollable></div>
        </div>
    </div>
</template>

<style lang="scss">
    .side-page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        &.opened {
            display: flex;
            transition: opacity 0.25s ease-in-out;
            opacity: 1;

            .page {
                transform: translateX(0);
            }
        }

        &:not(.opened) {
            display: hidden;
            pointer-events: none;
            transition: opacity 0.25s 0.4s ease-in-out;
            opacity: 0;

            .close-button {
                         opacity: 0;
            }
        }

        .underlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        
        .page {
            position: absolute;
            right: 0;
            width: $side-page-width;
            height: 100%;
            background: var(--side-page-background-color);
            border-radius: 15px 0 0 15px;
            transform: translateX($side-page-width);
            transition: transform 0.35s ease-in-out;

            .close-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                position: absolute;
                left: 0;
                top: 50px;
                transform: translateX(-130%);
                border-radius: 100px;
                border: solid 2px $text-color-dark;
                background: none;
                cursor: pointer;
                transition: opacity 0.35s 0.2s ease-in-out;
                
                * {
                    color: $text-color-dark;
                }

                &:hover {
                    background: $text-color-dark;

                    * {
                        color: $text-color-light;
                    }
                }
            }

            .content {
                padding: 20px 40px;
                overflow-y: auto;
                height: 100%;

                * {
                    max-width: 100%;
                    text-wrap: pretty;
                }
            }
        }
    }
</style>