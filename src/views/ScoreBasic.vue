<template>
  <div class="standings">
    <h2>NBA Standings</h2>
    <!-- {{ formattedDate }} -->
    <ul class="container">
      <li v-for="game in schedule" :key="game.GameID">
        <h3>{{ formatTime(new Date(game.DateTime)) }}</h3>
        <h2>{{ game.Status }}</h2>
        <div class="cards">
          <div class="awayTeam team">
            <h1 class="title">
              {{ game.AwayTeam }}
            </h1>
            <img :src="`../../public/logos/${game.AwayTeam}.svg`" alt="">
            <span>{{ game.AwayTeamScore }}</span>
          </div>
          <div class="homeTeam team">
            <h1 class="title">
              {{ game.HomeTeam }}
            </h1>
            <img :src="`../../public/logos/${game.HomeTeam}.svg`" alt="">
            <span>{{ game.HomeTeamScore }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect, computed } from 'vue';
import axios from 'axios';

// Models
import type GameModel from "@/models/GameModel";

//import useTimeFormatter from '../functions/useTimeFormatter.vue'

export default defineComponent({
  props: {
    formattedDate: {
      type: String,
      required: true
    }
  },
  setup (props) {
    console.log('props', props.formattedDate)
    const section = ref('ScoresBasic');
    const schedule = ref<GameModel[]>([]);
    const today = ref<any>(props.formattedDate); 

    const formatTime = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = { 

          hour: 'numeric',
          minute: 'numeric',
        };
      return date.toLocaleTimeString('en-US', options);
    };

    const fetchStandings = async (date: any) => {
      //console.log(date)
      var dateTime = new Date(date)
      var dayOfMonth = dateTime.getDate();
      var yearNow = dateTime.getFullYear();
      var monthOfYear = dateTime.getMonth();
      var allDateNow = `${yearNow}-${monthOfYear + 1}-${dayOfMonth}`;
      console.log(allDateNow)
      var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/${section.value}/${allDateNow}?key=e04825d15612459e8469dff9d6fff439`);
      //var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/ScoresBasic/2023-03-27?key=e04825d15612459e8469dff9d6fff439`);
      schedule.value = response.data;
      console.log(schedule.value)
    }

    const formattedDate = (date: any) => {
      console.log(date)
        // const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const options: Intl.DateTimeFormatOptions = { 
          // year: 'numeric', 
          // month: 'long', 
          // day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        return new Date(date).toLocaleDateString('en-US', options);
    }; 

    const getSchedule = (date: any) => {
      console.log('getSchedule', date);
      fetchStandings(date);
    }

    onMounted(() => {
      getSchedule(today.value);
    });

    watchEffect(() => {
      today.value = props.formattedDate;
      getSchedule(today.value);
    });

    return {
      schedule,
      getSchedule,
      formattedDate,
      formatTime,
      today
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
ul li {
  display: flex;
  margin: 2rem;
  background-color: #bada55;
  padding: 1rem;
  flex-direction: column;
}
.team {
  margin: 0 1rem;
}
.cards {
  display: flex;
}
h3 {
  text-align: center;
}
</style>