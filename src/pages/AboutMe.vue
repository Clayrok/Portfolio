<script setup lang="ts">

</script>

<template>
    <div class="about-me">
        <img src="../assets/images/portrait.png" class="left"/>
        <div class="right">
            <h2>About Me</h2>
            <span>
                <b>Passionate about video games since childhood</b>, I grew up on classics like <b>Doom, UT99, and Fire Emblem across PC, N64,</b> and <b>PSP</b>. 
                This early fascination naturally led me to become a <b>Game Programmer</b>, bridging the gap between software engineering and creative design.

                <h3>Game Development Expertise</h3>
                Starting as a self-taught dev before graduating from a specialized school, I solidified my foundations in <b>C++</b> and <b>C#</b>. 
                In 2019, I joined <b>HandyGames (THQ Nordic)</b> in Germany, focusing on gameplay, UI, and engine tools. 
                Mastering <b>Unity and Unreal (4 & 5)</b> alongside industry seniors, 
                I then brought this expertise to the renowned Canadian studio <b>Frima</b> for three years.

                <h3>Web Development & Full-Stack Skills</h3>
                Upon returning to France, I expanded my horizons into modern web technologies. 
                Graduating as a <b>Web Developer</b> in early 2026, I now build responsive applications using <b>HTML5, CSS3/SASS, JavaScript, React</b> and <b>SQL/NoSQL</b> databases.

                <h3>Versatility & Collaboration</h3>
                Driven by <span class="accent">curiosity</span> and <span class="accent">creativity</span>, I am a strong advocate for <b>Scrum</b> and iterative delivery. 
                My versatile profile also includes:

                <ul>
                    <li>Technical Art & UI/UX Design.</li>
                    <li>Multimedia Production (Music, sound design, and video editing).</li>
                </ul>

                I find that sharing knowledge within multidisciplinary teams is the most rewarding part of my work.
            </span>
        </div>
    </div>
</template>

<style lang="scss">
    .about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 45px;

        .left, .right {
            max-width: 50%;
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
            }

            span {
                font-size: 15px;
                margin: 0;
                margin-top: 35px;
            
                h3 {
                    margin: 0;
                    margin-top: 18px;
                    font-size: 20px;
                    font-weight: 800;
                    line-height: 40px;
                }

                b {
                    text-shadow: 1px 1px 0 var(--shadow-color);
                }

                ul {
                    font-weight: 600;
                }
            }
        }
    }
</style>