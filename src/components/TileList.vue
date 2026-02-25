<script setup lang="ts">
    import Tile from './Tile.vue';
    import Year from './Year.vue';

    defineProps<{
        tiles : Array<{
            title: string,
            subtitle: string,
            year: string,
            imageUrl: string,
            folderPath: string,
            alignment: string
        }>;
    }>();
</script>

<template>
    <div class="list-view" data-scrollable>
        <div class="list">
            <div class="tile-container" v-for="(tile, index) in tiles" :key="index">
                <Year v-if="tile.year" :year="tile.year" :isNewest="index === 0" :show-line="index !== tiles.length - 1" />
                <Tile class="tile" :index="index" :title="tile.title"
                        :subtitle="tile.subtitle" :imageUrl="tile.imageUrl" :folderPath="tile.folderPath"
                        :alignment="tile.alignment" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .list-view {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        margin-right: 1rem;
        padding: 1px 0;
        overscroll-behavior: none;
        -webkit-overflow-scrolling: auto;

        .list {
            --tile-gap: 20px;
            display: flex;
            flex-direction: column;
            gap: var(--tile-gap);
            flex: 1;
            padding: 0 1rem;
            height: fit-content;

            .tile-container {
                display: flex;

                @media (max-width: 540px) {
                    flex-direction: column;
                    gap: 10px;
                }

                .year-container {
                    width: 120px;
                    flex-shrink: 0;

                    @media (max-width: 540px) {
                        width: 100%;
                    }
                }

                .tile {
                    height: 180px;
                    filter: saturate(0);
                    transition: filter 0.2s ease-in-out, border 0.2s ease-in-out;
                    cursor: pointer;

                    @media (max-width: 790px) {
                        height: 110px;
                    }
            
                    &:hover {
                        filter: saturate(1);
                        border: solid 1px $main-accent-color;
                    }
                }
            }
        }
    }
</style>