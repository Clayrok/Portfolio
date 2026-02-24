<script setup lang="ts">
    import { ref, onMounted, onUnmounted, type Component, watch } from 'vue';
    import PageIndicator from "./PageIndicator.vue";

    const props = defineProps<{
        pages : { navName: string, component: Component }[],
        currentPageIndex : number
    }>();

    const isScrolling = ref(false);
    const scrollView = ref<HTMLElement | null>(null);
    const pageRefs = ref<HTMLElement[]>([]);
    var scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    var scrollEndTimeout: ReturnType<typeof setTimeout> | null = null;

    var touchStartY = 0;
    var touchStartX = 0;
    var touchedScrollableEl: HTMLElement | null = null;
    var lastScrollTop = 0;

    const resetScrollingState = () =>
    {
        isScrolling.value = false;
        if (scrollEndTimeout)
        {
            clearTimeout(scrollEndTimeout);
            scrollEndTimeout = null;
        }
    };

    const scrollToPage = (index: number, setScrolling: boolean = false) =>
    {
        if (index < 0 || index >= props.pages.length) return;
        
        const pageEl = pageRefs.value[index];
        if (!pageEl || !scrollView.value) return;

        if (setScrolling)
        {
            isScrolling.value = true;
            resetScrollingState();
        }
        
        emit('page-changed', index);
        
        scrollView.value.scrollTo({
            top: pageEl.offsetTop,
            behavior: "smooth"
        });
    };

    const onScrollEnd = () =>
    {
        resetScrollingState();
    };

    const triggerScroll = (direction: 'up' | 'down') =>
    {
        if (isScrolling.value) return;
        
        const targetIndex = direction === 'down'
            ? props.currentPageIndex + 1
            : props.currentPageIndex - 1;
        
        if (targetIndex < 0 || targetIndex >= props.pages.length)
        {
            return;
        }
        
        isScrolling.value = true;
        scrollEndTimeout = setTimeout(resetScrollingState, 1000);
        
        scrollTimeout = setTimeout(() =>
        {
            const pageEl = pageRefs.value[targetIndex];
            if (pageEl && scrollView.value)
            {
                emit('page-changed', targetIndex);
                scrollView.value.scrollTo({
                    top: pageEl.offsetTop,
                    behavior: "smooth"
                });
            }
            else
            {
                resetScrollingState();
            }
        }, 100);
    };

    const handleWheel = (e: WheelEvent) =>
    {
        const target = e.target as HTMLElement;
        const scrollableParent = target?.closest('[data-scrollable]');
        
        if (scrollableParent)
        {
            const el = scrollableParent as HTMLElement;
            const isScrollable = el.scrollHeight > el.clientHeight;
            
            if (isScrollable)
            {
                const atTop = el.scrollTop === 0;
                const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
                const scrollingDown = e.deltaY > 0;
                const scrollingUp = e.deltaY < 0;
                
                if ((!atTop && scrollingUp) || (!atBottom && scrollingDown))
                {
                    return;
                }
            }
        }
        
        e.preventDefault();
        
        if (isScrolling.value) return;
        
        const delta = e.deltaY;
        if (Math.abs(delta) < 10) return;
        
        if (delta > 0)
        {
            triggerScroll('down');
        }
        else
        {
            triggerScroll('up');
        }
    };
    
    const handleTouchStart = (e: TouchEvent) =>
    {
        if (isScrolling.value)
        {
            e.preventDefault();
            return;
        }
        
        const target = e.target as HTMLElement;
        if (target?.closest('button, a, input, select, textarea, [role="button"]'))
        {
            return;
        }
        
        const touch = e.touches.item(0);
        if (touch)
        {
            touchStartY = touch.clientY;
            touchStartX = touch.clientX;
            
            const scrollableParent = target?.closest('[data-scrollable]');
            if (scrollableParent)
            {
                touchedScrollableEl = scrollableParent as HTMLElement;
                lastScrollTop = touchedScrollableEl.scrollTop;
            }
            else
            {
                touchedScrollableEl = null;
            }
        }
    };

    const handleTouchMove = (e: TouchEvent) =>
    {
        if (isScrolling.value)
        {
            e.preventDefault();
            return;
        }
        
        const target = e.target as HTMLElement;
        if (target?.closest('button, a, input, select, textarea, [role="button"]'))
        {
            return;
        }
        
        if (touchedScrollableEl)
        {
            return;
        }
        
        e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) =>
    {
        if (isScrolling.value) return;
        
        const target = e.target as HTMLElement;
        if (target?.closest('button, a, input, select, textarea, [role="button"]'))
        {
            return;
        }
        
        const touch = e.changedTouches.item(0);
        if (!touch) return;
        
        const touchEndY = touch.clientY;
        const touchEndX = touch.clientX;
        
        const diffY = touchStartY - touchEndY;
        const diffX = Math.abs(touchStartX - touchEndX);
        
        if (touchedScrollableEl)
        {
            const el = touchedScrollableEl;
            const scrollDiff = Math.abs(el.scrollTop - lastScrollTop);
            
            if (scrollDiff > 5)
            {
                touchedScrollableEl = null;
                return;
            }
            
            const atTop = el.scrollTop === 0;
            const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
            
            if (diffX > Math.abs(diffY) || Math.abs(diffY) < 50)
            {
                scrollToPage(props.currentPageIndex, true);
                touchedScrollableEl = null;
                return;
            }
            
            if (atBottom && diffY > 0)
            {
                triggerScroll('down');
            }
            else if (atTop && diffY < 0)
            {
                triggerScroll('up');
            }
            else
            {
                scrollToPage(props.currentPageIndex, true);
            }
            
            touchedScrollableEl = null;
            return;
        }
        
        if (diffX > Math.abs(diffY) || Math.abs(diffY) < 50)
        {
            scrollToPage(props.currentPageIndex, true);
            return;
        }
        
        if (diffY > 0)
        {
            triggerScroll('down');
        }
        else
        {
            triggerScroll('up');
        }
    };

    onMounted(() =>
    {
        const el = scrollView.value;
        if (el)
        {
            el.addEventListener('scrollend', onScrollEnd);
        }
        
        window.addEventListener('wheel', handleWheel, { passive: false });
        
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });
    });

    onUnmounted(() =>
    {
        const el = scrollView.value;
        if (el)
        {
            el.removeEventListener('scrollend', onScrollEnd);
        }
        
        if (scrollTimeout)
        {
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        
        if (scrollEndTimeout)
        {
            clearTimeout(scrollEndTimeout);
            scrollEndTimeout = null;
        }
        
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    });

    const emit = defineEmits<{
        (e: 'page-changed', index: number): void
    }>();

    watch(() => props.currentPageIndex, (newIndex) =>
    {
        if (newIndex !== undefined)
        {
            scrollToPage(newIndex);
        }
    });
</script>

<template>
    <div class="pages-scroll-view" ref="scrollView">
        <div class="pages-wrapper">
            <div v-for="(item, index) in pages" :key="index" class="page" :ref="el => { if (el) pageRefs[index] = el as HTMLElement }">
                <component :is="item.component" @scroll-down="scrollToPage(props.currentPageIndex + 1)" @scroll-up="scrollToPage(props.currentPageIndex - 1)" />
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
        overscroll-behavior: none;
        overflow: hidden;

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
