<script setup lang="ts">
    const skillCategories = [
        {
            name: "Generalist",
            subCategories: [
                {
                    name: "Languages",
                    skills: ["C", "C++", "C#", "Java", "TypeScript", "JavaScript"]
                },
                {
                    name: "Workflow",
                    skills: ["Git", "P4V", "Mercurial", "TortoiseSVN", "Agile", "Scrum", "Kanban"]
                },
                {
                    name: "Tools & Management",
                    skills: ["Jira", "Trello", "Redmine", "Mantis", "Notion", "Docker"]
                },
                {
                    name: "Architecture & Multimedia",
                    skills: ["OOP", "Advanced Design Patterns", "FL Studio", "Adobe Premiere Pro", "Photography"]
                }
            ]
        },
        {
            name: "Game Development",
            subCategories: [
                {
                    name: "Engines",
                    skills: ["Unreal Engine 4/5", "Unity 3D"]
                },
                {
                    name: "Features & Math",
                    skills: ["NavMesh", "Physics", "UMG/UGUI", "3D Math"]
                },
                {
                    name: "Logic & AI",
                    skills: ["Finite State Machines", "Pathfinding"]
                },
                {
                    name: "Networking & Input",
                    skills: ["Mirror", "LiteNetLib", "XInput"]
                }
            ]
        },
        {
            name: "Web Development",
            subCategories: [
                {
                    name: "Frontend",
                    skills: ["Vue.js", "React", "HTML5", "SCSS", "Kendo UI", "Figma"]
                },
                {
                    name: "Backend",
                    skills: ["Node.js", "Express", "ASP.NET", "REST APIs"]
                },
                {
                    name: "Data & Auth",
                    skills: ["JWT", "Mongoose", "SQL", "JSON"]
                }
            ]
        }
    ];

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
        <h2>Skills</h2>
        <div class="categories-scroll-view" data-scrollable>
            <div class="categories-container">
                <div v-for="category in skillCategories" :key="category.name" class="category">
                    <h3>{{ category.name }}</h3>
                    <div class="sub-categories">
                        <div v-for="sub in category.subCategories" :key="sub.name" class="sub-category">
                            <h4>{{ sub.name }}</h4>
                            <div class="skills-grid">
                                <div v-for="skill in sub.skills" :key="skill" class="skill-tag">
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
        padding: 0 2rem;

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
            padding-right: 10px;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-thumb {
                background: $main-accent-color;
                border-radius: 10px;
            }

            .categories-container {
                display: flex;
                flex-direction: column;
                gap: 40px;
                width: 100%;
                max-width: 1000px;
                padding-bottom: 40px;

                .category {
                    h3 {
                        font-size: 28px;
                        color: $main-accent-color;
                        border-bottom: 1px solid $main-accent-color;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
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

                                .skill-tag {
                                    display: flex;
                                    align-items: center;
                                    gap: 8px;
                                    padding: 6px 12px;
                                    background: var(--skill-tag-color);
                                    border: 1px solid rgba(255, 255, 255, 0.1);
                                    border-radius: 20px;
                                    transition: all 0.3s ease;

                                    &:hover {
                                        border: solid 1px $main-accent-color;
                                    }

                                    img {
                                        width: 20px;
                                        height: 20px;
                                        object-fit: contain;
                                    }

                                    span {
                                        font-size: 14px;
                                        font-weight: 500;
                                        white-space: nowrap;
                                        color: $text-color-dark;
                                        padding-top: 3px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>