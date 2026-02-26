<script setup lang="ts">
    const emit = defineEmits<{
        (e: 'scroll-down'): void
    }>();
</script>

<template>
    <section class="presentation">
        <img src="/images/portrait.webp" alt="Antoine Chaumin - Game Programmer & Web Developer" fetchpriority="high"/>
        <div class="right">
            <h1>Antoine Chaumin</h1>
            <h2>Game programmer<span class="separator"><br/></span>Web developer</h2>
            <p class="quote">"It's all about <span class="accent">Curiosity</span>."</p>
            <button @click="emit('scroll-down')">
                <span>Learn more</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6063 1.00009V22.2133M11.6063
                    22.2133L22.2129 11.6067M11.6063
                    22.2133L0.999687 11.6067"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<style lang="scss">
    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 45px;
        padding: 1rem 3rem;

        img {
            max-width: 50%;
            height: auto;
        }

        @media (max-width: 968px) {
            flex-direction: column;
            padding: 0;

            img {
                max-width: 100%;
                min-height: 0;
                object-fit: contain;
            }

            .right {
                flex: 0 1 auto;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 35px;
            max-width: 50%;

            @media (max-width: 968px) {
                max-width: 100%;
                gap: 25px;
                align-items: center;
            }

            @media (max-width: 540px) {
                zoom: calc(100vw / 540px);
            }

            h1 {
                font-size: 56px;
                line-height: 56px;
                margin: 0;
                margin-bottom: -5px;
                white-space: nowrap;

                @media (max-width: 968px) {
                    font-size: 45px;
                    line-height: 45px;
                }

                @media (max-width: 540px) {
                    font-size: 36px;
                    line-height: 36px;
                }
            }

            h2 {
                text-align: right;
                margin: 0;
                font-size: 34px;
                font-weight: 400;
                line-height: 40px;
                color: var(--subtext-color);

                @media (max-width: 968px) {
                    text-align: center;
                    font-size: 24px;
                    line-height: 32px;

                    .separator {
                        br {
                            display: none;
                        }

                        &::after {
                            content: " - ";
                        }
                    }
                }

                @media (max-width: 540px) {
                    font-size: 20px;
                    line-height: 20px;
                }
            }

            .quote {
                margin: 0;
                font-size: 26px;
                font-weight: 300;
                line-height: 26px;

                @media (max-width: 540px) {
                    font-size: 20px;
                    line-height: 20px;
                    text-align: center;
                }
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background: none;
                border: solid 1px var(--text-color);
                box-shadow: 0 0 1px 0 var(--text-color) inset, 0 0 1px 0 var(--text-color);
                border-radius: 100px;
                padding: 0 20px;
                height: 42px;
                cursor: pointer;
                transition: box-shadow 0.2s ease-in-out,
                    background-color 0.2s ease-in-out;

                @media (max-width: 320px) {
                    font-size: 16px;
                    
                    span {
                        font-size: 16px;
                    }
                }

                &:hover {
                    border-color: $main-accent-color;
                    background: $main-accent-color;
                    box-shadow: 0 0 1px 0 var(--text-color) inset, 0 0 10px $main-accent-color;
                    
                    span {
                        color: $text-color-dark;
                    }

                    svg path {
                        stroke: $text-color-dark;
                    }
                }

                span {
                    margin-bottom: -4px;
                    font-size: 22px;
                }

                svg {
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }
</style>
