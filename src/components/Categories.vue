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
        min-height: 45px;
        padding-bottom: 2rem;

        @include mini-mobile {
            zoom: calc(100vw / $mini-mobile-breakpoint);
        }

        button {
            width: 150px;
            background: none;
            border: solid 1px var(--main-accent-color);
            box-shadow: 0 0 1px 0 var(--main-accent-color) inset, 0 0 1px 0 var(--main-accent-color);
            border-radius: 100px;
            font-size: 1.1rem;
            padding-top: 4px;
            transition: all 0.2s ease-in-out;

            &:not(.selected) {
                cursor: pointer;
                color: var(--main-accent-color);
                font-weight: 400;

                &:hover {
                    border: solid 1px $main-accent-selected;
                    color: $text-color-light;
                    background: $secondary-accent-color;
                }
            }

            &.selected {
                border: solid 1px $main-accent-selected;
                background: $main-accent-selected;
                color: $text-color-dark;
                font-weight: 600;
            }
        }
    }
</style>