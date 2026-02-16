<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import works from '../assets/works/works.json';
    import Categories from '@/components/Categories.vue';
    import WorksList from '@/components/WorksList.vue';

    interface WorkItem {
        title: string;
        platform: string;
        img: string;
    }

    const selectedCategoryIndex = ref(0);
    const categoriesName = ref<string[]>([]);
    const selectedCategoryWorks = ref<Array<{
            title: string,
            platform: string,
            imageUrl: string
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
            fetch(`src/assets/works/${selectedCategory?.name}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: WorkItem) => ({
                    title: data.title,
                    platform: data.platform,
                    imageUrl: `src/assets/works/${selectedCategory?.name}/${folder}/${data.img}`
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
        <WorksList :works="selectedCategoryWorks"/>
    </div>
</template>

<style lang="scss">
    .works {
        display: flex;
        flex-direction: column;
    }
</style>