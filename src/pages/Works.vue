<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import works from '../assets/works/works.json';
    import Categories from '@/components/Categories.vue';
    import TileList from '@/components/TileList.vue';

    interface TileItem {
        title: string;
        subtitle: string;
        year: string;
        img: string;
        folderPath: string,
        alignment: string;
    }

    const selectedCategoryIndex = ref(0);
    const categoriesName = ref<string[]>([]);
    const selectedCategoryWorks = ref<Array<{
            title: string,
            subtitle: string,
            year: string,
            imageUrl: string,
            folderPath : string,
            alignment : string
        }>>([]);

    onMounted(() => {
        works.categories.forEach(category => categoriesName.value.push(category.name));
        changeSelectedCategory(selectedCategoryIndex.value);
    });

    const changeSelectedCategory = async (index: number) => {
        selectedCategoryIndex.value = index;
        selectedCategoryWorks.value = [];

        const selectedCategory = works.categories[index];
        const folders = selectedCategory?.folders || [];
        
        const promises = folders.map(folder => 
            fetch(`src/assets/works/${selectedCategory?.subfolder}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: TileItem) => ({
                    title: data.title,
                    subtitle: data.subtitle,
                    year: data.year || "",
                    imageUrl: `src/assets/works/${selectedCategory?.subfolder}/${folder}/${data.img}`,
                    folderPath: `src/assets/works/${selectedCategory?.subfolder}/${folder}`,
                    alignment: "center" as "left" | "center" | "right"
                }))
                .catch(err => {
                    console.error("Erreur de chargement :", err);
                    return null;
                })
        );
        
        const results = await Promise.all(promises);
        selectedCategoryWorks.value = results.filter((item): item is NonNullable<typeof item> => item !== null);
    };
</script>

<template>
    <section class="works">
        <h2>Works</h2>
        <Categories :selectedCategoryIndex="selectedCategoryIndex" :categories="categoriesName" @category-clicked="changeSelectedCategory"/>
        <TileList :tiles="selectedCategoryWorks" :alignment="'center'"/>
    </section>
</template>

<style lang="scss">
    .works {
        display: flex;
        flex-direction: column;

        h2 {
            width: 100%;
            text-align: center;
            font-size: 56px;
            line-height: 56px;
            margin: 20px 0;

            @media (max-width: 460px) {
                font-size: 36px;
                line-height: 36px;
            }
        }

        .tile {
            height: 155px;
        }
    }
</style>