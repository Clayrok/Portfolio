<script setup lang="ts">
    import { ref, inject, watch } from "vue";

    const props = defineProps<{
        content: string | null;
    }>();

    const closeDetailsProvider = inject<() => void>("closeDetails");

    const isOpened = ref(false);

    const closeDetails = () => {
        isOpened.value = false;
        if (closeDetailsProvider) closeDetailsProvider();
    };

    watch(() => props.content, (newContent) => {
        isOpened.value = !!newContent;
    }, { immediate: true });
</script>

<template>
    <div class="details" :class="{ opened: isOpened }">
        <div class="underlay" @click="closeDetails"></div>
        <div class="page">
            <div class="close-button" @click="closeDetails">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21M21 3L3 21" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
            </div>
            <div class="content" v-html="props.content" data-scrollable></div>
        </div>
    </div>
</template>

<style lang="scss">
    .details {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;

        &.opened {
            display: flex;
            transition: opacity 0.25s ease-in-out;
            opacity: 1;

            .page {
                transform: translateX(0);

                @include mobile {
                    transform: translate(-50%, -50%);
                }
            }
        }

        &:not(.opened) {
            visibility: hidden;
            pointer-events: none;
            transition: opacity 0.25s 0.4s ease-in-out, visibility 0s 0.65s;
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
            width: 40%;
            min-width: 685px;
            height: 100%;
            background: var(--details-background-color);
            border-radius: 15px 0 0 15px;
            transform: translateX(100%);
            transition: transform 0.35s ease-in-out;

            @include mobile {
                left: 50%;
                top: 50%;
                right: auto;
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                min-width: 0;
                border-radius: 15px;
                transform: translate(-50%, 150%);
            }

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

                @include mobile {
                    left: auto;
                    right: 20px;
                    top: 20px;
                    transform: none;
                    border-color: var(--text-color);

                    * {
                        color: var(--text-color);
                    }
                }

                &:hover {
                    background: $text-color-dark;

                    svg path {
                        stroke: $text-color-light;
                    }
                }

                svg path {
                    stroke: $text-color-dark;
                }
            }

            .content {
                padding: 20px 40px;
                overflow-y: auto;
                height: 100%;
                box-sizing: border-box;

                @include mobile {
                    padding-top: 80px;
                }

                * {
                    max-width: 100%;
                    text-wrap: pretty;
                }
            }
        }
    }
</style>
