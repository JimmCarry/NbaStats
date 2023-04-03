<template>
    <h1>Atlantic Division</h1>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in atlanticDivision" :key="team.TeamID">
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
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>


    <h1>Central Division</h1>
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
        <tr v-for="team in centralDivision" :key="team.TeamID">
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
          <td>{{ team.DivisionRank }}</td>
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>

    <h1>Southeast Division</h1>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in southeastDivision" :key="team.TeamID">
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
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>

    <h1>Northwest Division</h1>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in northwestDivision" :key="team.TeamID">
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
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>

    <h1>Pacific Division</h1>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in pacificDivision" :key="team.TeamID">
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
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>

    <h1>Southwest Division</h1>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in southwestDivision" :key="team.TeamID">
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
          <!-- <td>{{ team.streak }}</td> -->
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type TeamData from '../models/TeamData';

export default defineComponent({
    props: {
        atlanticDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        centralDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        southeastDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        northwestDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        pacificDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        },
        southwestDivision: {
            type: Array as PropType<TeamData[]>,
            required: true
        }
    },
    setup (props) {
        //console.log(props.westernConference)

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
</style>