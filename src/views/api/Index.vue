<template>
    <div class="container">
        <div class="loading-status">
            <ul>
                <li v-for="data in fetchData" :key="data.id">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                    <h3>{{ data.section }}</h3>
                    <h3>{{ data.urlType }}</h3>
                    <h3>
                        {{ data.date }}
                    </h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
import type TeamData from '@/models/TeamData';
import type FetchData from '@/models/FetchData';
import { stringifyExpression } from '@vue/compiler-core';

export default defineComponent({
    setup () {
        const teamData = ref<TeamData[]>([]);
        const fetchData = ref<FetchData[]>([]);

        const createFetchData = (status: string, section: string, urlType: string, data: any[]) => {
            console.log()
            let newData = {
                id : 0,
                status: status,
                section: section,
                urlType: urlType,
                date: '03.04.2023',
                data: data
            }
            fetchData.value.push(newData as FetchData);
        };

        const getTeamData = async () => {
            var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=e04825d15612459e8469dff9d6fff439`);
            //var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/ScoresBasic/2023-03-27?key=e04825d15612459e8469dff9d6fff439`);
            teamData.value = response.data;
            createFetchData('new', 'League Feeds', 'Standings', teamData.value);
            console.log(teamData.value);
        };

        const postTeamData = async (data: any[]) => {
            var response = await axios.post(``);
        };

        onMounted(() => {
            getTeamData();
        });

        return {
            getTeamData,
            fetchData
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    color: #000;
}
ul li {
    display: flex;
    background-color: rgba(186, 218, 85, 0.7);
    padding: 0.5rem;
}
svg {
    width: 25px;
}
h3 {
    margin: 0 1rem;
}
</style>