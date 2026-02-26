<script setup lang="ts">
    import { onMounted, ref } from 'vue';
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
    const worksData = ref<any>(null);
    const selectedCategoryWorks = ref<Array<{
            title: string,
            subtitle: string,
            year: string,
            imageUrl: string,
            folderPath : string,
            alignment : string
        }>>([]);

    const changeSelectedCategory = async (index: number) => {
        selectedCategoryIndex.value = index;
        selectedCategoryWorks.value = [];

        if (!worksData.value) return;

        const selectedCategory = worksData.value.categories[index];
        const folders: string[] = selectedCategory?.folders || [];
        
        const promises = folders.map((folder: string) => 
            fetch(`/works/${selectedCategory?.subfolder}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: TileItem) => ({
                    title: data.title,
                    subtitle: data.subtitle,
                    year: data.year || "",
                    imageUrl: `/works/${selectedCategory?.subfolder}/${folder}/${data.img}`,
                    folderPath: `/works/${selectedCategory?.subfolder}/${folder}`,
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

    onMounted(async () => {
        try {
            const response = await fetch('/works/works.json');
            worksData.value = await response.json();
            categoriesName.value = worksData.value.categories.map((category: any) => category.name);
            changeSelectedCategory(selectedCategoryIndex.value);
        } catch (err) {
            console.error("Erreur lors du chargement de works.json :", err);
        }
    });
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