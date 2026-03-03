<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import Categories from '@/components/Categories.vue';
    import { useI18n } from '../composables/useI18n';

    const { t, currentLanguage } = useI18n();
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
            
            if (Object.keys(useI18n().translations.value).length === 0) {
                await useI18n().loadTranslations(currentLanguage.value);
            }
            
            categoriesName.value = worksData.value.categories.map((category: any) => t(`works.categories.${category.name}`));
            changeSelectedCategory(selectedCategoryIndex.value);
        } catch (err) {
            console.error("Erreur lors du chargement de works.json :", err);
        }
    });

    watch(currentLanguage, () => {
        if (worksData.value) {
            categoriesName.value = worksData.value.categories.map((category: any) => t(`works.categories.${category.name}`));
        }
        changeSelectedCategory(selectedCategoryIndex.value);
    });
</script>

<template>
    <section class="works">
        <h2>{{ t('works.title') }}</h2>
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

            @include mini-mobile {
                font-size: 36px;
                line-height: 36px;
            }
        }

        .tile {
            height: 155px;
        }
    }
</style>