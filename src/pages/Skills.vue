<script setup lang="ts">
    import { computed } from 'vue';
    import { useI18n } from '../composables/useI18n';

    const { t } = useI18n();

    const skillCategories = computed(() => [
        {
            name: t('skills.categories.generalist') as string,
            subCategories: [
                {
                    name: t('skills.sub_categories.languages') as string,
                    skills: ["C", "C++", "C#", "Java", "TypeScript", "JavaScript"]
                },
                {
                    name: t('skills.sub_categories.workflow') as string,
                    skills: ["Git", "P4V", "Mercurial", "TortoiseSVN", "Agile", "Scrum", "Kanban"]
                },
                {
                    name: t('skills.sub_categories.tools_management') as string,
                    skills: ["Jira", "Trello", "Redmine", "Mantis", "Notion", "Docker", "Kilocode", "OpenRouter"]
                },
                {
                    name: t('skills.sub_categories.architecture_multimedia') as string,
                    skills: ["OOP", "Advanced Design Patterns", "FL Studio", "Adobe Premiere Pro", "Photography"]
                }
            ]
        },
        {
            name: t('skills.categories.game_dev') as string,
            subCategories: [
                {
                    name: t('skills.sub_categories.engines') as string,
                    skills: ["Unreal Engine 4/5", "Unity 3D"]
                },
                {
                    name: t('skills.sub_categories.features_math') as string,
                    skills: ["NavMesh", "Physics", "UMG/UGUI", "3D Math"]
                },
                {
                    name: t('skills.sub_categories.logic_ai') as string,
                    skills: ["Finite State Machines", "Pathfinding"]
                },
                {
                    name: t('skills.sub_categories.networking_input') as string,
                    skills: ["Mirror", "LiteNetLib", "XInput"]
                }
            ]
        },
        {
            name: t('skills.categories.web_dev') as string,
            subCategories: [
                {
                    name: t('skills.sub_categories.frontend') as string,
                    skills: ["HTML5", "SCSS", "JQuery", "Vue.js", "React", "React Router", "Kendo UI", "Figma"]
                },
                {
                    name: t('skills.sub_categories.backend') as string,
                    skills: ["Node.js", "Express", "ASP.NET", "REST APIs"]
                },
                {
                    name: t('skills.sub_categories.data_auth') as string,
                    skills: ["JWT", "Mongoose", "SQL", "JSON"]
                }
            ]
        }
    ]);

    const getIconPath = (skill: string) => {
        const fileName = skill.toLowerCase()
            .replace("++", "-plus-plus")
            .replace("#", "-sharp")
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return `/images/skills/${fileName}.webp`;
    };
</script>

<template>
    <section class="skills">
        <h2>{{ t('skills.title') }}</h2>
        <div class="categories-scroll-view" data-scrollable>
            <div class="categories-container">
                <div v-for="category in skillCategories" :key="category.name" class="category">
                    <h3>{{ category.name }}</h3>
                    <div class="sub-categories">
                        <div v-for="sub in category.subCategories" :key="sub.name" class="sub-category">
                            <h4>{{ sub.name }}</h4>
                            <div class="skills-grid">
                                <div v-for="skill in sub.skills" :key="skill" class="tag" tabindex="0">
                                    <img :src="getIconPath(skill)" :alt="skill + ' icon'" />
                                    <span>{{ skill }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow: hidden;

        @include mini-mobile {
            padding: 0 0.5rem;
        }

        h2 {
            font-size: 56px;
            line-height: 56px;
            margin: 20px 0;
            flex-shrink: 0;

            @include mobile {
                font-size: 36px;
                line-height: 36px;
            }
        }

        .categories-scroll-view {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            display: flex;
            justify-content: center;
            max-width: 1000px;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--main-accent-color);
                border-radius: 10px;
            }

            .categories-container {
                display: flex;
                flex-direction: column;
                gap: 40px;
                width: 100%;
                padding-bottom: 40px;

                .category {
                    h3 {
                        font-size: 28px;
                        color: var(--text-color);
                        border-bottom: 1px solid var(--text-color);
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        width: 90%;
                    }

                    .sub-categories {
                        display: flex;
                        flex-direction: column;
                        gap: 25px;

                        .sub-category {
                            h4 {
                                font-size: 14px;
                                font-weight: 600;
                                margin-bottom: 10px;
                                color: var(--subtext-color);
                                text-transform: uppercase;
                                letter-spacing: 1px;
                            }

                            .skills-grid {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>