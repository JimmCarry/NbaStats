<template>
    <div class="playin-tournament">
                    <h2>Play-in Tournament</h2>
                    <ul v-if="playoffTeams">
                        <li>
                            <div>
                                <a href="#">
                                    {{ playoffTeams[9]?.Key }}
                                    <img :src="`../../public/logos/${playoffTeams[9]?.Key}.svg`" alt="">
                                    <span>{{ playoffTeams[9]?.ConferenceRank }}</span>
                                    <h3>{{ playoffTeams[9]?.Key }}</h3>
                                    <p>
                                        {{ playoffTeams[9]?.Wins }}-{{ playoffTeams[9]?.Losses }}
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    {{ playoffTeams[10]?.Key }}
                                    <img :src="`../../public/logos/${playoffTeams[10]?.Key}.svg`" alt="">
                                    <span>{{ playoffTeams[10]?.ConferenceRank }}</span>
                                    <h3>{{ playoffTeams[10]?.Key }}</h3>
                                    <p>
                                        {{ playoffTeams[10]?.Wins }}-{{ playoffTeams[10]?.Losses }}
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Winner 9/10</p>
                            </div>
                            <div>
                                <p>Loser 7/8 </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#">
                                    {{ playoffTeams[6]?.Key }}
                                    <img :src="`../../public/logos/${playoffTeams[6]?.Key}.svg`" alt="">
                                    <span>{{ playoffTeams[6]?.ConferenceRank }}</span>
                                    <h3>{{ playoffTeams[6]?.Key }}</h3>
                                    <p>
                                        {{ playoffTeams[6]?.Wins }}-{{ playoffTeams[6]?.Losses }}
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    {{ playoffTeams[7]?.Key }}
                                    <img :src="`../../public/logos/${playoffTeams[7]?.Key}.svg`" alt="">
                                    <span>{{ playoffTeams[7]?.ConferenceRank }}</span>
                                    <h3>{{ playoffTeams[7]?.Key }}</h3>
                                    <p>
                                        {{ playoffTeams[7]?.Wins }}-{{ playoffTeams[7]?.Losses }}
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
        console.log(props.playoffTeams[0])

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