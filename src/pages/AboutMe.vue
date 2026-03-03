<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useI18n } from '../composables/useI18n';

    const { t } = useI18n();

    const openSection = ref<string | null>(null);
    const toggleSection = (section: string) => openSection.value = openSection.value === section ? null : section;;

    onMounted(() => {
        toggleSection("first-steps");
    });
</script>

<template>
    <section class="about-me">
        <img src="/images/portrait.webp" class="left" alt="Antoine Chaumin Portrait"/>
        <div class="right">
            <h2>{{ t('about_me.title') }}</h2>
            <div class="content">
                <div class="section" :class="{ open: openSection === 'first-steps' }">
                    <h3 @click="toggleSection('first-steps')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('first-steps')">{{ t('about_me.sections.first_steps.title') }}</h3>
                    <div class="section-content">
                        <p v-html="t('about_me.sections.first_steps.content')"></p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'game-dev' }">
                    <h3 @click="toggleSection('game-dev')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('game-dev')">{{ t('about_me.sections.game_dev.title') }}</h3>
                    <div class="section-content">
                        <p v-html="t('about_me.sections.game_dev.content')"></p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'web-dev' }">
                    <h3 @click="toggleSection('web-dev')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('web-dev')">{{ t('about_me.sections.web_dev.title') }}</h3>
                    <div class="section-content">
                        <p v-html="t('about_me.sections.web_dev.content')"></p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'versatility' }">
                    <h3 @click="toggleSection('versatility')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('versatility')">{{ t('about_me.sections.versatility.title') }}</h3>
                    <div class="section-content">
                        <div class="text-wrapper">
                            <p v-html="t('about_me.sections.versatility.content')"></p>

                            <ul>
                                <li v-for="item in t('about_me.sections.versatility.list')" :key="item">{{ item }}</li>
                            </ul>

                            <p v-html="t('about_me.sections.versatility.footer')"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 45px;
        padding: 0 3rem;

        @include mobile {
            padding: 0;
        }

        @media (max-width: 1300px) {
            .left {
                display: none;
            }

            .right {
                max-width: 100%;
            }
        }

        @include mini-mobile {
            padding: 0 1rem;
        }

        .left, .right {
            max-width: 50%;

            @media (max-width: 1300px) {
                max-width: 100%;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: 100%;

            h2 {
                font-size: 56px;
                line-height: 56px;
                margin: 0;

                @include mini-mobile {
                    font-size: 36px;
                    line-height: 36px;
                }
            }

            .content {
                margin-top: 35px;

                .section {
                    h3 {
                        margin: 0;
                        margin-top: 18px;
                        font-size: 20px;
                        font-weight: 800;
                        line-height: 40px;
                        cursor: default;

                        &.mobile-header {
                            font-size: 18px;
                            line-height: 120%;
                        }
                    }

                    .section-content {
                        p {
                            font-size: 15px;
                            margin: 0;
                        
                            b {
                                text-shadow: 1px 1px 0 var(--shadow-color);
                            }
                        }

                        ul {
                            font-weight: 600;
                            font-size: 15px;
                            margin: 10px 0;
                        }
                    }

                    &:first-child h3 {
                        margin-top: 0;
                    }
                }
            }
        }

        @include mobile {
            .right {
                h2 {
                    margin-bottom: 20px;
                }

                .content {
                    width: 100%;
                    margin-top: 0;

                    .section {
                        border-bottom: 1px solid var(--subtext-color);
                        
                        h3 {
                            cursor: pointer;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 10px 0;
                            margin: 0;

                            &::after {
                                content: '+';
                                font-size: 24px;
                                transition: transform 0.3s ease-in-out;
                                color: var(--main-accent-color);
                            }
                        }

                        .section-content {
                            max-height: 0;
                            overflow: hidden;
                            transition: max-height 0.3s ease-in-out,
                            padding 0.3s ease-in-out;
                        }

                        &.open {
                            h3::after {
                                content: '-';
                            }

                            .section-content {
                                max-height: 500px;
                                padding-bottom: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
