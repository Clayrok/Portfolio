<script setup lang="ts">
    const props = defineProps<{
        isNewest: boolean,
        year: string,
        showLine?: boolean
    }>();
</script>

<template>
    <div class="year-container" :class="{ 'with-line': showLine }">
        <span class="year">{{ year }}</span>
        <span class="dot" :class="{ newest: isNewest }"></span>
    </div>
</template>

<style lang="scss">
    .year-container {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        gap: 16px;
        padding-right: 16px;

        @media (max-width: 540px) {
            padding-right: 0;
            height: auto;
        }

        &.with-line::before {
            content: '';
            position: absolute;
            right: 25px;
            top: 50%;
            height: calc(100% + var(--tile-gap, 20px));
            width: 2px;
            background-color: $main-accent-color;
            z-index: 0;

            @media (max-width: 540px) {
                display: none;
            }
        }

        .year {
            flex: 1;
            width: 100%;
            text-align: right;
            text-wrap-mode: nowrap;
            margin-top: 4px;

            @media (max-width: 540px) {
                text-align: left;
                font-weight: 800;
            }
        }
        
        .dot {
            position: relative;
            z-index: 1;
            width: 20px;
            height: 20px;
            border-radius: 100px;
            outline: solid 2px $main-accent-color;
            outline-offset: -2px;
            background-color: var(--background-color);

            @media (max-width: 540px) {
                display: none;
            }

            &.newest {
                background-color: $main-accent-color;
            }
        }
    }
</style>