<template>
    <div v-if="playoffEastern && playoffWestern" class="playoff">
        <div class="western-conference">
            <h1>Western Conference</h1>
            <div class="tournament">
                <PlayoffPlayIn :playoffTeams="playoffWestern" />
                <PlayoffRoundOne :playoffTeams="playoffWestern" />
            </div>
        </div>
        <div class="eastern-conference">
            <h1>Eastern Conference</h1>
            <div class="tournament">
                <PlayoffRoundOne :playoffTeams="playoffEastern" />
                <PlayoffPlayIn :playoffTeams="playoffEastern" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import PlayoffPlayIn from './PlayoffPlayIn.vue';
import PlayoffRoundOne from './PlayoffRoundOne.vue';

import type TeamData from '../models/TeamData';

export default defineComponent({
    components: {
        PlayoffPlayIn,
        PlayoffRoundOne

    },
    props: {
        playoffEastern: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        playoffWestern: {
            type: Array as PropType<TeamData[]>,
            required: true
        }
    },
    setup (props) {
        console.log(props.playoffEastern)
        console.log(props.playoffEastern[0].ConferenceRank)
        console.log(props.playoffEastern[1].ConferenceRank)
        console.log(props.playoffEastern[2].ConferenceRank)
        console.log(props.playoffEastern[3].ConferenceRank)
        console.log(props.playoffEastern[4].ConferenceRank)
        console.log(props.playoffEastern[5].ConferenceRank)
        console.log(props.playoffEastern[6].ConferenceRank)
        console.log(props.playoffEastern[7].ConferenceRank)
        console.log(props.playoffEastern[8].ConferenceRank)
        console.log(props.playoffEastern[9].ConferenceRank)

        console.log(props.playoffWestern[0].ConferenceRank)
        console.log(props.playoffWestern[1].ConferenceRank)
        console.log(props.playoffWestern[2].ConferenceRank)
        console.log(props.playoffWestern[3].ConferenceRank)
        console.log(props.playoffWestern[4].ConferenceRank)
        console.log(props.playoffWestern[5].ConferenceRank)
        console.log(props.playoffWestern[6].ConferenceRank)
        console.log(props.playoffWestern[7].ConferenceRank)
        console.log(props.playoffWestern[8].ConferenceRank)
        console.log(props.playoffWestern[9].ConferenceRank)


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