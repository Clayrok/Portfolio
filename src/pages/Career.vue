<script setup lang="ts">
    import { ref, onMounted } from 'vue';
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

    const selectedCategoryIndex = ref(0);
    const categoriesName = ref<string[]>([]);
    const careerData = ref<any>(null);
    const selectedExperiences = ref<Array<{
        title: string,
        subtitle: string,
        year: string,
        imageUrl: string,
        folderPath: string,
        alignment: string
    }>>([]);

    const changeSelectedCategory = async (index: number) => {
        selectedCategoryIndex.value = index;
        selectedExperiences.value = [];

        if (!careerData.value) return;

        const selectedCategory = careerData.value.categories[index];
        const folders: string[] = selectedCategory?.folders || [];

        const promises = folders.map((folder: string) =>
            fetch(`/career/${selectedCategory?.subfolder}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: TileItem) => ({
                    title: data.title,
                    subtitle: data.subtitle,
                    year: data.year,
                    imageUrl: `/career/${selectedCategory?.subfolder}/${folder}/${data.img}`,
                    folderPath: `/career/${selectedCategory?.subfolder}/${folder}`,
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

    onMounted(async () => {
        try {
            const response = await fetch('/career/career.json');
            careerData.value = await response.json();
            categoriesName.value = careerData.value.categories.map((category: any) => category.name);
            changeSelectedCategory(selectedCategoryIndex.value);
        } catch (err) {
            console.error("Erreur lors du chargement de career.json :", err);
        }
    });
</script>

<template>
    <section class="career">
        <h2>Career</h2>
        <Categories :categories="categoriesName" :selectedCategoryIndex="selectedCategoryIndex" @category-clicked="changeSelectedCategory"/>
        <TileList :tiles="selectedExperiences" />
    </section>
</template>

<style lang="scss">
    .career {
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
            height: 150px;
        }
    }
</style>