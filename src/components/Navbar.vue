<script setup lang="ts">
    const switchTheme = (): void => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', 'light');
        }
    };
</script>

<template>
    <nav>
        <h1><a href="/">AC</a></h1>
        <ul>
            <li class="selected"><a href="#">About me</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
        </ul>
        <span class="spacer"></span>
        <ul id="nav-right">
            <li>
                <a href="#">
                    Resumé
                    <svg width="18" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4048 0.5L0.5 0.5L0.5
                        21.5H16.5V6.96154M10.4048
                        0.5V6.96154H16.5M10.4048
                        0.5L16.5 6.96154M3.16667
                        18.0673H13.8333M3.16667
                        14.0288H13.8333M3.16667
                        9.99038H13.8333"
                        fill="none"
                        stroke="currentColor"
                        stroke-opacity="0.866667"
                        stroke-linecap="square"/>
                    </svg>    
                </a>
            </li>
            <li>
                <a href="#">
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
            <li @click="switchTheme()">
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

        h1 {
            padding: 0;
            margin: 0;
            margin-right: 45px;

            a {
                font-family: Kalnia;
                font-size: 2rem;
                font-weight: 400;
                color: $main-accent-color;
                
                &:hover {
                    text-decoration: none;
                }
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
                font-size: 1.2rem;
                font-weight: 100;
                padding: 0;
                margin: 0 1rem;

                a {
                    display: flex;
                    gap: 6px;
                    align-items: center;
                }

                svg {
                    zoom: 0.7;
                }
            }
        }

        #nav-right {
            text-decoration: underline;
        }

        .selected {
            text-decoration: underline;
            font-weight: 800;
            pointer-events: none;
        }
    }
</style>