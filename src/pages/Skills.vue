<script setup lang="ts">
    const skillCategories = [
        {
            name: "Game Development & Systems",
            subCategories: [
                {
                    name: "Engines",
                    skills: ["Unreal Engine 4/5", "Unity 3D"]
                },
                {
                    name: "Engine Features",
                    skills: ["NavMesh", "Physics", "UI"]
                },
                {
                    name: "AI & Logic",
                    skills: ["Finite State Machines", "Pathfinding"]
                },
                {
                    name: "Networking & Input",
                    skills: ["Mirror", "LiteNetLib", "XInput"]
                },
                {
                    name: "Architecture & Math",
                    skills: ["OOP", "Design Patterns", "3D Math"]
                },
                {
                    name: "Core Languages",
                    skills: ["C", "C++", "C#", "Java"]
                }
            ]
        },
        {
            name: "Web & Backend Development",
            subCategories: [
                {
                    name: "Backend",
                    skills: ["Node.js", "Express", "ASP.NET", "REST APIs"]
                },
                {
                    name: "Data & Auth",
                    skills: ["JWT", "Mongoose", "SQL", "JSON"]
                },
                {
                    name: "Frontend",
                    skills: ["React", "Vue.js", "TypeScript", "JavaScript"]
                },
                {
                    name: "UI & Design",
                    skills: ["HTML5", "SCSS", "Kendo UI", "Figma"]
                }
            ]
        },
        {
            name: "Workflow & Management",
            subCategories: [
                {
                    name: "Methodologies",
                    skills: ["Agile", "Scrum", "Kanban"]
                },
                {
                    name: "Project Management",
                    skills: ["Jira", "Trello", "Redmine", "Mantis", "Notion"]
                },
                {
                    name: "Version Control",
                    skills: ["P4V", "Git", "Mercurial", "TortoiseSVN"]
                },
                {
                    name: "Infrastructure",
                    skills: ["Docker"]
                }
            ]
        },
        {
            name: "Secondary Skills",
            subCategories: [
                {
                    name: "Multimedia",
                    skills: ["FL Studio", "Adobe Premiere Pro", "Photography"]
                }
            ]
        }
    ];

    const getIconPath = (skill: string) => {
        var fileName = skill.replace("++", "pp").replace("#", "sharp");
        fileName = skill.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
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
                                <div v-for="skill in sub.skills" :key="skill" class="skill-item">
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
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 30px;

                        @include mobile {
                            grid-template-columns: 1fr;
                        }

                        .sub-category {
                            h4 {
                                font-size: 18px;
                                font-weight: 600;
                                margin-bottom: 15px;
                                color: var(--subtext-color);
                            }

                            .skills-grid {
                                display: flex;
                                flex-wrap: wrap;
                                gap: 15px;

                                .skill-item {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    gap: 8px;
                                    width: 80px;

                                    img {
                                        width: 50px;
                                        height: 50px;
                                        object-fit: contain;
                                        border-radius: 8px;
                                        background: rgba(255, 255, 255, 0.05);
                                        padding: 5px;
                                    }

                                    span {
                                        font-size: 12px;
                                        text-align: center;
                                        line-height: 1.2;
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