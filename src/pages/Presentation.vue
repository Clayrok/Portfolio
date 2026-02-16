<script setup lang="ts">
    const emit = defineEmits<{
        (e: 'scroll-down'): void
    }>();
</script>

<template>
    <div class="presentation">
        <img src="../assets/images/portrait.png"/>
        <div class="right">
            <h2>Antoine Chaumin</h2>
            <h3>Game programmer<br/>Web developer</h3>
            <h4>"It's all about <span class="accent">Curiosity</span>."</h4>
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
    </div>
</template>

<style lang="scss">
    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 35px;

            h2 {
                font-size: 56px;
                line-height: 56px;
                margin: 0;
                margin-bottom: -5px;
            }

            h3 {
                text-align: right;
                margin: 0;
                font-size: 34px;
                font-weight: 400;
                line-height: 40px;
                color: var(--subtext-color);
            }

            h4 {
                margin: 0;
                font-size: 26px;
                font-weight: 300;
                line-height: 26px;
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