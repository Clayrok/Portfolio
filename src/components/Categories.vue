<script setup lang="ts">
    defineProps<{
        selectedCategoryIndex : number,
        categories : string[]
    }>();

    const emit = defineEmits(['category-clicked']);
</script>

<template>
    <div class="categories">
        <button v-for="(category, index) in categories" :class="{ selected: selectedCategoryIndex === index }" :key="index" @click="emit('category-clicked', index)">
                {{ category }}
        </button>
    </div>
</template>

<style lang="scss">
    .categories {
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 45px;
        padding: 2rem 0;

        button {
            width: 150px;
            background: none;
            border: solid 1px $main-accent-color;
            box-shadow: 0 0 1px 0 $main-accent-color inset, 0 0 1px 0 $main-accent-color;
            border-radius: 100px;
            font-size: 1.1rem;
            padding-top: 4px;

            &:not(.selected) {
                cursor: pointer;
                color: $main-accent-color;
                font-weight: 400;

                &:hover {
                    background: $main-accent-color;
                    color: $text-color-dark;
                }
            }

            &.selected {
                background: $main-accent-color;
                color: $text-color-dark;
                font-weight: 600;
            }
        }
    }
</style>