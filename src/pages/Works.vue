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
    <div class="works">
        <Categories :selectedCategoryIndex="selectedCategoryIndex" :categories="categoriesName" @category-clicked="changeSelectedCategory"/>
        <TileList :tiles="selectedCategoryWorks" :alignment="'center'"/>
    </div>
</template>

<style lang="scss">
    .works {
        display: flex;
        flex-direction: column;

        .tile {
            height: 155px;
        }
    }
</style>