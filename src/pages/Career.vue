<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import experiences from '../assets/career/career.json';
    import Categories from '@/components/Categories.vue';
    import TileList from '@/components/TileList.vue';

    interface TileItem {
        title: string;
        subtitle: string;
        year: string;
        img: string;
        workFolderPath: string,
        alignment: string;
    }

    const categoriesName = ref<string[]>([]);
    const selectedExperiences = ref<Array<{
        title: string,
        subtitle: string,
        year: string,
        imageUrl: string,
        folderPath: string,
        alignment: string
    }>>([]);

    const selectedCategoryIndex = ref(0);
    const handleCategorySelect = (index: number) => changeSelectedCategory(index);

    onMounted(() => {
        experiences.categories.forEach(category => categoriesName.value.push(category.name));
        changeSelectedCategory(selectedCategoryIndex.value);
    });

    const changeSelectedCategory = async (index: number) => {
        selectedCategoryIndex.value = index;
        selectedExperiences.value = [];

        const selectedCategory = experiences.categories[index];
        const folders = selectedCategory?.folders || [];

        const promises = folders.map(folder =>
            fetch(`src/assets/career/${selectedCategory?.subfolder}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: TileItem) => ({
                    title: data.title,
                    subtitle: data.subtitle,
                    year: data.year,
                    imageUrl: `src/assets/career/${selectedCategory?.subfolder}/${folder}/${data.img}`,
                    folderPath: `src/assets/career/${selectedCategory?.subfolder}/${folder}`,
                    alignment: "left"
                }))
                .catch(err => {
                    console.error("Erreur de chargement :", err);
                    return null;
                })
        );

        const results = await Promise.all(promises);
        selectedExperiences.value = results.filter((item): item is NonNullable<typeof item> => item !== null);
    };
</script>

<template>
    <div class="career">
        <Categories :categories="['Professional', 'Education']" :selectedCategoryIndex="selectedCategoryIndex" @category-clicked="handleCategorySelect"/>
        <TileList :tiles="selectedExperiences" />
    </div>
</template>

<style lang="scss">
    .career {
        display: flex;
        flex-direction: column;

        .tile {
            height: 150px;
        }
    }
</style>