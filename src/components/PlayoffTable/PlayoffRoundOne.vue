<template>
    <div class="playoff-round-1">
        <h2>Playoff Round 1</h2>
        <ul v-if="playoffTeams">
            <li>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[0]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[0]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[0]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[0]?.Wins }}-{{ playoffTeams[0]?.Losses }}
                        </p>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <p>
                            8 Seed
                        </p>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[3]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[3]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[3]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[3]?.Wins }}-{{ playoffTeams[3]?.Losses }}
                        </p>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[4]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[4]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[4]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[4]?.Wins }}-{{ playoffTeams[4]?.Losses }}
                        </p>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[2]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[2]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[2]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[2]?.Wins }}-{{ playoffTeams[2]?.Losses }}
                        </p>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[5]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[5]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[5]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[5]?.Wins }}-{{ playoffTeams[5]?.Losses }}
                        </p>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#">
                        <img :src="`../../public/logos/${playoffTeams[1]?.Key}.svg`" alt="">
                        <span>{{ playoffTeams[1]?.ConferenceRank }}</span>
                        <h3>{{ playoffTeams[1]?.Key }}</h3>
                        <p>
                            {{ playoffTeams[1]?.Wins }}-{{ playoffTeams[1]?.Losses }}
                        </p>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <p>
                            7 Seed
                        </p>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import type { PropType } from 'vue';

import type TeamData from '../../models/TeamData';

export default defineComponent({
    props: {
        playoffTeams: {
            type: Array as PropType<TeamData[]>,
            required: true
        }
    },
    setup (props) {
        //console.log(props.playoffTeams)

        return {}
    }
})
</script>

<style lang="scss" scoped>
.playoff {
    display: flex;
}
ul {
    margin: 0;
    padding: 0;
}
ul li {
    list-style: none;
    padding: 2px 10px;
    margin-bottom: 0.5rem;
    a {
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    border: 1px solid black;
}
ul li div:first-child {
    border-bottom: 1px solid black;
}
h2 {
    font-size: 1rem;
}
.tournament {
    display: flex;
}
img {
    width: 30px;
}
</style>