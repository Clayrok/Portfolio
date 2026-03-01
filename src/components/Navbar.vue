<script setup lang="ts">
    import { ref, type Component } from 'vue';

    const props = defineProps<{
        pages : { navName : string, component: Component }[],
        currentPageIndex : number
    }>();

    const emit = defineEmits<{
        (e: 'nav-link-clicked', index: number): void
    }>();

    const isMenuOpen = ref(false);

    const switchTheme = (): void => {
        const html = document.documentElement;
        if (html.getAttribute('data-theme') === 'light') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', 'light');
        }
    };

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const handleNavClick = (index: number) => {
        if (index !== -1) {
            emit('nav-link-clicked', index);
        }
        isMenuOpen.value = false;
    };
</script>

<template>
    <nav :class="{ open: isMenuOpen }">
        <div class="nav-header-mobile">
            <h1 @click="handleNavClick(0)" tabindex="0" @keydown.enter="handleNavClick(0)">AC</h1>
            <div class="menu-toggle" @click.stop="toggleMenu()" tabindex="0" @keydown.enter="toggleMenu()">
                <svg v-if="!isMenuOpen" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg v-else width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <ul class="nav-links">
            <li class="logo"><h1 @click="handleNavClick(0)" tabindex="0" @keydown.enter="handleNavClick(0)">AC</h1></li>
            <li v-for="(item, index) in pages"
                :key="index"
                :class="{ selected: props.currentPageIndex === index, hidden: item.navName.length === 0 }"
                @click="handleNavClick(index)"
                tabindex="0"
                @keydown.enter="handleNavClick(index)">{{ item.navName }}</li>
        </ul>
        <span class="spacer"></span>
        <ul id="nav-right">
            <li>
                <a href="#">
                    Resumé
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4048 0.5L0.5 0.5L0.5 21.5H16.5V6.96154M10.4048 0.5V6.96154H16.5M10.4048 0.5L16.5 6.96154M3.16667 18.0673H13.8333M3.16667 14.0288H13.8333M3.16667 9.99038H13.8333"
                            stroke="currentColor" stroke-linecap="square" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="mailto:contact.chaumin@gmail.com">
                    Contact
                    <svg style="width: 16px; height: 16px;">
                        <path d="M0.5 15.5L15.5 0.5M15.5
                        0.5H0.5M15.5 0.5V15.5"
                        stroke="currentColor"
                        stroke-opacity="0.866667"
                        stroke-linecap="round"/>
                    </svg>
                </a>
            </li>
            <li @click="switchTheme()" tabindex="0" @keydown.enter="switchTheme()">
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.4961" cy="16" r="5.5" fill="currentColor" stroke="currentColor" stroke-width="3"/>
                    <path d="M15.5 1.5V4.34375" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M15.5 26.6562V29.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M4.34375 15.5L1.49997 15.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M6.35547 6.35449L4.34461 4.34366" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M26.4805 26.4795L24.4696 24.4687" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M4.34375 26.4795L6.3546 24.4687" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M24.4688 6.35449L26.4796 4.34366" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path d="M29.5 15.5L26.6562 15.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    nav {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100rem;
        backdrop-filter: blur(10px);

        .nav-header-mobile {
            display: none;
        }

        @include mobile {
            flex-direction: column;
            border-radius: 0;
            width: 100%;
            height: auto;
            position: relative;
            z-index: 98;

            .nav-header-mobile {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 1rem 2rem;
                border-bottom: 1px solid #808080;
                background-color: var(--background-color);

                h1 {
                    margin: 0;
                    padding: 0;
                }

                .menu-toggle {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
            }

            .nav-links, #nav-right {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: var(--background-color);

                li {
                    width: 100vw;
                    justify-content: center;
                    padding: 1rem 0;
                    margin: 0;
                    border-bottom: 1px solid #808080;

                    &.logo {
                        display: none;
                    }
                }

                h1 {
                    display: none;
                }
            }

            &.open {
                .nav-links, #nav-right {
                    display: flex;
                }
            }

            .spacer {
                display: none;
            }
        }

        h1 {
            padding: 0;
            margin: 0;
            margin-right: 45px;
            transition: text-shadow 0.2s ease-in-out;
            font-family: Kalnia;
            font-size: 2rem;
            font-weight: 400;
            color: $main-accent-color;
            cursor: pointer;

            .menu-toggle {
                display: none;
            }
            
            &:hover {
                text-shadow: 0 0 20px $main-accent-color;
            }
        }

        ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            height: fit-content;
            list-style-type: none;

            li {
                display: flex;
                gap: 6px;
                align-items: center;
                font-size: 1.2rem;
                font-weight: 100;
                padding: 0;
                margin: 0 1rem;
                cursor: pointer;

                &:not(.logo):hover {
                    text-decoration: underline;
                }

                svg {
                    zoom: 0.7;
                }
            }
        }

        #nav-right {
            text-decoration: underline;

            @include mobile {
                text-decoration: none;
            }
        }

        .selected {
            text-decoration: underline;
            font-weight: 800;
            pointer-events: none;
        }
    }
</style>
