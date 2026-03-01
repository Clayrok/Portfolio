<script setup lang="ts">
    import { onMounted, ref } from 'vue';

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
            <h2>About Me</h2>
            <div class="content">
                <div class="section" :class="{ open: openSection === 'first-steps' }">
                    <h3 @click="toggleSection('first-steps')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('first-steps')">First steps</h3>
                    <div class="section-content">
                        <p>
                            <b>Passionate about video games since childhood</b>, I grew up on classics like <b>Doom, UT99, and Fire Emblem across PC, N64,</b> and <b>PSP</b>. 
                            This early fascination naturally led me to become a <b>Game Programmer</b>, bridging the gap between software engineering and creative design.
                        </p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'game-dev' }">
                    <h3 @click="toggleSection('game-dev')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('game-dev')">Game Development Expertise</h3>
                    <div class="section-content">
                        <p>
                            Starting as a self-taught dev before graduating from a specialized school, I solidified my foundations in <b>C++</b> and <b>C#</b>. 
                            In 2019, I joined <b>HandyGames (THQ Nordic)</b> in Germany, focusing on gameplay, UI, and engine tools. 
                            Mastering <b>Unity and Unreal (4 & 5)</b> alongside industry seniors, 
                            I then brought this expertise to the renowned Canadian studio <b>Frima</b> for three years.
                        </p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'web-dev' }">
                    <h3 @click="toggleSection('web-dev')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('web-dev')">Web Development & Full-Stack Skills</h3>
                    <div class="section-content">
                        <p>
                            Upon returning to France, I expanded my horizons into modern web technologies. 
                            Graduating as a <b>Web Developer</b> in early 2026, I now build responsive applications using <b>HTML5, CSS3/SASS, JavaScript, React</b> and <b>SQL/NoSQL</b> databases.
                        </p>
                    </div>
                </div>

                <div class="section" :class="{ open: openSection === 'versatility' }">
                    <h3 @click="toggleSection('versatility')" class="mobile-header" tabindex="0" @keydown.enter="toggleSection('versatility')">Versatility & Collaboration</h3>
                    <div class="section-content">
                        <div class="text-wrapper">
                            <p>
                                Driven by <span class="accent">curiosity</span> and <span class="accent">creativity</span>, I am a strong advocate for <b>Scrum</b> and iterative delivery. 
                                My versatile profile also includes:
                            </p>

                            <ul>
                                <li>Technical Art & UI/UX Design.</li>
                                <li>Multimedia Production (Music, sound design, and video editing).</li>
                            </ul>

                            <p>
                                I find that sharing knowledge within multidisciplinary teams is the most rewarding part of my work.
                            </p>
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

        @media (max-width: 1165px) {
            .left {
                display: none;
            }

            .right {
                max-width: 100%;
            }
        }

        @media (max-width: 460px) {
            padding: 0 1rem;
        }

        .left, .right {
            max-width: 50%;

            @media (max-width: 1165px) {
                max-width: 100%;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: 100%;

            @media (max-width: 460px) {
                
            }

            h2 {
                font-size: 56px;
                line-height: 56px;
                margin: 0;

                @media (max-width: 460px) {
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

        @media (max-width: 790px) {
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
                                color: $main-accent-color;
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
