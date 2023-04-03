<template>
    <div class="eastern conference">
      <h1>Eartern Conference</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>Win%</th>
            <th>GB</th>
            <th>CONF</th>
            <th>DIV</th>
            <th>HOME</th>
            <th>ROAD</th>
            <!-- <th>OT</th> -->
            <th>LAST10</th>
            <th>STREAK</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in easternConference" :key="team.TeamID">
            <td>
              <!-- <img :src="team.Key" :alt="team.name + ' logo'" width="20" height="20"> -->
              <img :src="`../../public/logos/${team.Key}.svg`" alt="">
                <!-- {{ team.Key }} -->
            </td>
            <td>{{ team.Wins }}</td>
            <td>{{ team.Losses }}</td>
            <td>{{ team.Percentage }}</td>
            <td>{{ team.GamesBack }}</td>
            <td>{{ team.ConferenceWins }}-{{ team.ConferenceLosses }}</td>
            <td>{{ team.DivisionWins }}-{{ team.DivisionLosses }}</td>
            <td>{{ team.HomeWins }}-{{ team.HomeLosses }}</td>
            <td>{{ team.AwayWins }}-{{ team.AwayLosses }}</td>
            <td>{{ team.LastTenWins }}-{{ team.LastTenLosses }}</td>
            <td>{{ team.Streak }}</td>
            <td>{{ team.ConferenceRank }}</td>
            <!-- <td>{{ team.streak }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>


    <div class="western conference">
      <h1>Western Conference</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>Win%</th>
            <th>GB</th>
            <th>CONF</th>
            <th>DIV</th>
            <th>HOME</th>
            <th>ROAD</th>
            <!-- <th>OT</th> -->
            <th>LAST10</th>
            <th>STREAK</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in westernConference" :key="team.TeamID">
            <td>
              <!-- <img :src="team.Key" :alt="team.name + ' logo'" width="20" height="20"> -->
              <img :src="`../../public/logos/${team.Key}.svg`" alt="">
                <!-- {{ team.Key }} -->
            </td>
            <td>{{ team.Wins }}</td>
            <td>{{ team.Losses }}</td>
            <td>{{ team.Percentage }}</td>
            <td>{{ team.GamesBack }}</td>
            <td>{{ team.ConferenceWins }}-{{ team.ConferenceLosses }}</td>
            <td>{{ team.DivisionWins }}-{{ team.DivisionLosses }}</td>
            <td>{{ team.HomeWins }}-{{ team.HomeLosses }}</td>
            <td>{{ team.AwayWins }}-{{ team.AwayLosses }}</td>
            <td>{{ team.LastTenWins }}-{{ team.LastTenLosses }}</td>
            <td>{{ team.Streak }}</td>
            <td>{{ team.ConferenceRank }}</td>
            <!-- <td>{{ team.streak }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type TeamData from '../models/TeamData';

export default defineComponent({
    props: {
        easternConference: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        westernConference: {
            type: Array as PropType<TeamData[]>,
            required: true
        }
    },
    setup (props) {
        console.log(props.westernConference)

        return {}
    }
})
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  font-size: 0.9rem;
  width: 100%;
}

thead th {
  background-color: #333;
  color: #fff;
  font-weight: normal;
  padding: 0.5rem;
  text-align: left;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody td {
  padding: 0.5rem;
  text-align: center;
}

tbody td:first-child {
  text-align: left;
}
.conference {
  margin: 0 1rem;
}
</style>