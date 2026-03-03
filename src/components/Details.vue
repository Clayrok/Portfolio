<script setup lang="ts">
    import { ref, inject, watch } from "vue";
    import { useI18n } from "../composables/useI18n";
    import { marked } from 'marked';

    const { currentLanguage } = useI18n();

    const props = defineProps<{
        content: string | null;
    }>();

    const closeDetailsProvider = inject<() => void>("closeDetails");
    const currentWorkPath = inject<any>("currentWorkPath");

    const isOpened = ref(false);
    const renderedContent = ref<string>("");

    const closeDetails = () => {
        isOpened.value = false;
        if (closeDetailsProvider) closeDetailsProvider();
    };

    const updateContent = async () => {
        if (currentWorkPath?.value) {
            const response = await fetch(`${currentWorkPath.value}/details/${currentLanguage.value}.md`);
            const markdown = await response.text();
            renderedContent.value = await marked.parse(markdown);
        } else if (props.content) {
            renderedContent.value = props.content;
        }
    };

    watch(() => props.content, (newContent) => {
        isOpened.value = !!newContent;
        if (newContent) {
            updateContent();
        }
    }, { immediate: true });

    watch(currentLanguage, updateContent);
</script>

<template>
    <div class="details" :class="{ opened: isOpened }">
        <div class="underlay" @click="closeDetails" data-scrollable></div>
        <div class="page">
            <div class="close-button" @click="closeDetails" data-scrollable>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21M21 3L3 21" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
            </div>
            <div class="content" v-html="renderedContent" data-scrollable></div>
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
        height: 100dvh;
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
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            width: 40%;
            min-width: 685px;
            height: 100%;
            background: var(--details-background-color);
            border-radius: 15px 0 0 15px;
            transform: translateX(100%);
            transition: transform 0.35s ease-in-out;
            padding: 0 1rem;

            @include mobile {
                left: 50%;
                top: 50%;
                right: auto;
                width: calc(100vw - 2rem);
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
                padding: 2rem 2rem;
                overflow-y: auto;
                height: 100%;
                box-sizing: border-box;
                
                @include mobile {
                    padding: 0 1rem;
                    margin-top: 6rem;
                }

                * {
                    max-width: 100%;
                    text-wrap: pretty;
                }

                h1 {
                    margin-top: 0;
                }

                .techs {
                    display: flex;
                    gap: 10px;
                }

                & > img {
                    border-radius: 10px;
                }
            }
        }
    }
</style>
