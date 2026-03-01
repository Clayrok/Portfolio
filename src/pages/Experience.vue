<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Categories from '@/components/Categories.vue';
    import Year from '@/components/Year.vue';

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
    const experienceData = ref<any>(null);
    const selectedExperiences = ref<Array<{
        title: string,
        subtitle: string,
        year: string,
        imageUrl: string,
        logoUrl: string,
        folderPath: string,
        alignment: string
    }>>([]);

    const changeSelectedCategory = async (index: number) => {
        selectedCategoryIndex.value = index;
        selectedExperiences.value = [];

        if (!experienceData.value) return;

        const selectedCategory = experienceData.value.categories[index];
        const folders: string[] = selectedCategory?.folders || [];

        const promises = folders.map((folder: string) =>
            fetch(`/career/${selectedCategory?.subfolder}/${folder}/data.json`)
                .then(response => response.json())
                .then((data: TileItem) => ({
                    title: data.title,
                    subtitle: data.subtitle,
                    year: data.year,
                    imageUrl: `/career/${selectedCategory?.subfolder}/${folder}/${data.img}`,
                    logoUrl: `/career/${selectedCategory?.subfolder}/${folder}/logo.webp`,
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
            experienceData.value = await response.json();
            categoriesName.value = experienceData.value.categories.map((category: any) => category.name);
            changeSelectedCategory(selectedCategoryIndex.value);
        } catch (err) {
            console.error("Erreur lors du chargement de career.json :", err);
        }
    });
</script>

<template>
    <section class="experience">
        <h2>Experience</h2>
        <Categories :categories="categoriesName" :selectedCategoryIndex="selectedCategoryIndex" @category-clicked="changeSelectedCategory"/>
        
        <div class="experience-list" data-scrollable>
            <div class="experience-item" v-for="(exp, index) in selectedExperiences" :key="index">
                <div class="year-col">
                    <Year :year="exp.year" :isNewest="index === 0" :show-line="index !== selectedExperiences.length - 1" />
                </div>
                <div class="info-col">
                    <div class="logo-col">
                        <img :src="exp.logoUrl" :alt="exp.title + ' logo'" />
                    </div>
                    <div class="text-content">
                        <h3>{{ exp.title }}</h3>
                        <h4>{{ exp.subtitle }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .experience {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;

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

        .experience-list {
            --tile-gap: 60px;
            display: flex;
            flex-direction: column;
            gap: var(--tile-gap);
            overflow-y: auto;
            padding: 20px 1rem;
            flex: 1;
            align-items: center;

            @media (max-width: 540px) {
                gap: 20px;
            }

            .experience-item {
                display: flex;
                width: 100%;
                max-width: 1000px;

                @media (max-width: 540px) {
                    flex-direction: column;
                    gap: 10px;
                }

                .year-col {
                    width: 120px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: stretch;

                    @media (max-width: 540px) {
                        width: 100%;
                    }
                }

                .info-col {
                    display: flex;
                    align-items: center;
                    padding-left: 20px;
                    flex: 1;
                    text-align: left;

                    @media (max-width: 540px) {
                        padding-left: 0;
                    }

                    .logo-col {
                        height: 100px;
                        width: 100px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 5px;

                        @include mobile {
                            height: 50px;
                            width: 50px;
                            margin-right: 15px;
                        }

                        img {
                            max-height: 75%;
                            max-width: 75%;
                            object-fit: contain;
                            border-radius: 10px;
                        }
                    }

                    .text-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 10px;

                        h3 {
                            font-family: Koulen;
                            font-size: 82px;
                            line-height: 75px;
                            margin: 0;
                            text-transform: uppercase;
                            color: var(--text-color);
                            font-weight: 300;
                            width: fit-content;

                            @include mobile {
                                font-size: 38px;
                                line-height: 38px;
                            }

                            @include mini-mobile {
                                font-size: 24px;
                                line-height: 24px;
                            }
                        }

                        h4 {
                            font-size: 22px;
                            line-height: 100%;
                            font-weight: 300;
                            margin: 0;
                            color: var(--subtext-color);
                            width: fit-content;

                            @include mobile {
                                font-size: 18px;
                                line-height: 18px;
                            }

                            @include mini-mobile {
                                font-size: 15px;
                                line-height: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>