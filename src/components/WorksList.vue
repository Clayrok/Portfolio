<script setup lang="ts">
import WorkTile from './WorkTile.vue';
    defineProps<{
        works : Array<{
            title: string,
            platform: string,
            imageUrl: string
        }>;
    }>();

    const handleWorkClick = (index: number) => {
        console.log('Work clicked:', index);
    }
</script>

<template>
    <div class="works-list-view">
        <div class="works-list">
            <WorkTile v-for="(work, index) in works" :key="index" :index="index" :title="work.title" :platform="work.platform" :imageUrl="work.imageUrl" @click="handleWorkClick"/>
        </div>
    </div>
</template>

<style lang="scss">
    .works-list-view {
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        margin-right: 1rem;
        padding: 1px 0;

        .works-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex: 1;
            padding: 0 1rem;
            height: fit-content;

            & > * {
                height: 220px;
                filter: saturate(0);
                transition: filter 0.2s ease-in-out;
                cursor: pointer;

                &:hover {
                    filter: saturate(1.2);
                }
            }
        }
    }
</style>