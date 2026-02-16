<script setup lang="ts">
    import { ref, onMounted, onUnmounted, type Component, watch } from 'vue';
    import PageIndicator from "./PageIndicator.vue";

    const props = defineProps<{
        pages : { navName: string, component: Component }[],
        currentPageIndex : number
    }>();

    const lastScrollPosition = ref(0);
    const isScrolling = ref(false);
    const scrollView = ref<HTMLElement | null>(null);
    const pageRefs = ref<HTMLElement[]>([]);

    const scrollToPage = (index: number) => {
        const pageEl = pageRefs.value[index];
        if (!pageEl || !scrollView.value) return;

        emit('page-changed', index);
        isScrolling.value = true;
        
        lastScrollPosition.value = pageEl.offsetTop;
        
        scrollView.value.scrollTo({
            top: pageEl.offsetTop,
            behavior: "smooth"
        });

        setTimeout(() => {
            isScrolling.value = false;
        }, 500);
    };

    const handleScroll = () => {
        if (isScrolling.value || !scrollView.value) return;

        const currentScrollPosition = scrollView.value.scrollTop;
        const pageHeight = scrollView.value.clientHeight;
        const threshold = pageHeight * 0.1;

        if (Math.abs(currentScrollPosition - lastScrollPosition.value) > threshold) {
            if (currentScrollPosition > lastScrollPosition.value) {
                scrollDown();
            } else {
                scrollUp();
            }

            lastScrollPosition.value = currentScrollPosition;
        }
    };

    const scrollDown = () => {
        if (props.currentPageIndex < props.pages.length - 1) {
            scrollToPage(props.currentPageIndex + 1);
        }
    };

    const scrollUp = () => {
        if (props.currentPageIndex > 0) {
            scrollToPage(props.currentPageIndex - 1);
        }
    };

    const preventDefault = (e: Event) => {
        if (isScrolling.value && e.cancelable) e.preventDefault();
    };

    onMounted(() => {
        const el = scrollView.value;
        if (el) {
            el.addEventListener('touchmove', preventDefault, { passive: false });
            el.addEventListener('wheel', preventDefault, { passive: false });
        }
    });

    onUnmounted(() => {
        const el = scrollView.value;
        if (el) {
            el.removeEventListener('touchmove', preventDefault);
            el.removeEventListener('wheel', preventDefault);
        }
    });

    const emit = defineEmits<{
        (e: 'page-changed', index: number): void
    }>();

    watch(() => props.currentPageIndex, (newIndex) => {
        if (newIndex !== undefined) {
            scrollToPage(newIndex);
        }
    });
</script>

<template>
    <div class="pages-scroll-view" ref="scrollView" @scroll="handleScroll">
        <div class="pages-wrapper">
            <div v-for="(item, index) in pages" :key="index" class="page" :ref="el => { if (el) pageRefs[index] = el as HTMLElement }">
                <component :is="item.component" @scroll-down="scrollDown" @scroll-up="scrollUp" />
            </div>
        </div>
    </div>
    
    <PageIndicator 
        :total-count="props.pages.length" 
        :current-index="props.currentPageIndex"
        @page-click="scrollToPage"
    />
</template>

<style lang="scss">
    .pages-scroll-view {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;

        &::-webkit-scrollbar { display: none; }
        scrollbar-width: none;

        .pages-wrapper {
            display: flex;
            flex-direction: column;
            gap: calc($footer-height + $main-margin);
            width: 100%;

            .page {
                flex-shrink: 0;
                width: 100%;
                height: calc(100vh - $header-height - $footer-height - $main-margin);
                
                & > * {
                    height: 100%;
                }
            }
        }
    }
</style>