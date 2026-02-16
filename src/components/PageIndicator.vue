<script setup lang="ts">
    const props = defineProps<{
        currentIndex : number,
        totalCount : number
    }>();

    const emit = defineEmits<{
        (e: 'page-click', index: number): void
    }>();
</script>

<template>
    <div class="page-indicator">
        <span v-for="index in props.totalCount" :key="index" :class="{ active: index - 1 === props.currentIndex }" @click="emit('page-click', index - 1)"></span>
    </div>
</template>

<style lang="scss">
    $size : 10px;
    $outline-thickness : 1px;

    .page-indicator {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: fit-content;

        span {
            width: $size;
            height: $size;
            border-radius: 100px;
            outline: solid $outline-thickness var(--text-color);
            box-shadow: 0 0 1px 0 var(--text-color) inset, 0 0 1px 0 var(--text-color);
            margin: $outline-thickness;
            transition: none;
            cursor: pointer;
        }

        .active, span:hover {
            width: calc($size + ($outline-thickness * 2));
            height: calc($size + ($outline-thickness * 2));
            background: var(--text-color);
            outline: none;
            margin: 0;
        }

        .active {
            cursor: default;
        }
    }
</style>