<template>
  <div class="menu">
    <SelectOptionSeason @changeYear="changeYear($event)" />
    <SelectOptionGroupBy @changeGroupBy="changeGroupBy($event)" />
  </div>
 
  <!-- <div class="menu">
    <label class="season" for="">
      <p>SEASON</p>
      <select v-model="selectedSeason" data-is-touched="false" name="" class="DropDown_select__4pIg9">
        <option v-for="season in seasons" :value="season.id" :key="season.id">{{ season.value }}</option>
      </select>
    </label>
    <label class="group-by" for="">
      <p>GROUP BY</p>
      <select v-model="groupByValue" data-is-touched="false" name="" class="DropDown_select__4pIg9">
        <option :value="0">Conference</option>
        <option :value="1">Division</option>
        <option :value="2">Playoff</option>
      </select>
    </label>
  </div> -->
  <!-- <ul>
    <li v-for="team in westernConference">
      {{ team.Key }}
    </li>
  </ul> -->
  
  <div class="table-container">
    <TeamsByConferenceTable
      v-if="groupByValue === 0"
      :westernConference="westernConference"
      :easternConference="easternConference"
     />
     <TeamsByDivisionTable
      v-if="groupByValue === 1"
      :atlanticDivision="atlanticDivision"
      :centralDivision="centralDivision"
      :southeastDivision="southeastDivision"
      :northwestDivision="northwestDivision"
      :pacificDivision="pacificDivision"
      :southwestDivision="southwestDivision"
     />
     <PlayoffTable
      v-if="groupByValue === 2"
      :playoffEastern="playoffEastern"
      :playoffWestern="playoffWestern"
     />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
// Components 
import TeamsByConferenceTable from '../components/TeamsByConferenceTable.vue';
import TeamsByDivisionTable from '../components/TeamsByDivisionTable.vue'
import PlayoffTable from '../components/PlayoffTable/PlayoffTable.vue'
import SelectOptionSeason from '../components/SelectOptionSeason.vue'
import SelectOptionGroupBy from '../components/SelectOptionGroupBy.vue'

// Models
import type TeamData from '../models/TeamData';

export default defineComponent({
  components: {
    TeamsByConferenceTable,
    TeamsByDivisionTable,
    PlayoffTable,
    SelectOptionSeason,
    SelectOptionGroupBy
  },
  setup () {
    interface SeasonValue {
      id: number,
      value: string
    }

    const selectedSeason = ref<number>(0);

    const standings = ref<TeamData[]>([]);
    const seasons = ref<SeasonValue[]>([
      {
        id: 0,
        value: '2022-23'
      },
      {
        id: 1,
        value: '2021-22'
      },
      {
        id: 2,
        value: '2020-21'
      },
      {
        id: 3,
        value: '2019-20'
      },
    ]);
    const groupByValues = ref([
      {
        id: 0,
        value: 'Conference'
      },
      {
        id: 1,
        value: 'Division'
      },
      {
        id: 2,
        value: 'Playoff'
      },
    ])
    const groupByValue = ref(0);

    const changeYear = (year: string) => {
      console.log(year, selectedSeason.value)
      let season = seasons.value.filter(season => {
        return season.value === year
      })
      selectedSeason.value = season[0].id
    }

    const changeGroupBy = (groupBy: string) => {
      console.log(groupBy, groupByValue.value)
      let group = groupByValues.value.filter(group => {
        return group.value === groupBy
      })
      groupByValue.value = group[0].id
      // let season = seasons.value.filter(season => {
      //   return season.value === year
      // })
      // selectedSeason.value = season[0].id
    }

    const westernConference = computed(() => {
      return standings.value.filter(team => {
        return team.Conference === 'Western'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const easternConference = computed(() => {
      return standings.value.filter(team => {
        return team.Conference === 'Eastern'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const pacificDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Pacific'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const southwestDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Southwest'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const southeastDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Southeast'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const northwestDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Northwest'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const atlanticDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Atlantic'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const centralDivision = computed(() => {
      return standings.value.filter(team => {
        return team.Division === 'Central'
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    });

    const playoffEastern = computed(() => {
      return easternConference.value.filter(team => {
        if (team.ConferenceRank >=1 && team.ConferenceRank <= 10)
          return team
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    })

    const playoffWestern = computed(() => {
      return westernConference.value.filter(team => {
        if (team.ConferenceRank >=1 && team.ConferenceRank <= 10)
          return team
      }).sort((a, b) => a.ConferenceRank - b.ConferenceRank);
    })

    const fetchStandings = async (year: string) => {
      //console.log(year)
      let shortYear = (parseInt(year.slice(0, 4)) + 1).toString();
      //console.log(shortYear)
      var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/Standings/${shortYear}?key=e04825d15612459e8469dff9d6fff439`);
      //var response = await axios.get(`https://api.sportsdata.io/v3/nba/scores/json/ScoresBasic/2023-03-27?key=e04825d15612459e8469dff9d6fff439`);
      standings.value = response.data;
      console.log(standings.value);
    };

    onMounted(() => {
      fetchStandings(seasons.value[selectedSeason.value].value);
    });

    watch(selectedSeason,(value) => {
      //console.log(value)
      fetchStandings(seasons.value[value].value)
    })

    return {
      fetchStandings,
      westernConference, easternConference,
      pacificDivision, southwestDivision, southeastDivision, northwestDivision, atlanticDivision, centralDivision,
      seasons, groupByValue,
      standings,
      selectedSeason,
      playoffEastern, playoffWestern,
      changeYear, changeGroupBy,
      groupByValues
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-content: center;
  p {
    font-size: 2rem;
    font-weight: 600;
  }
  label {
    margin: 0 1rem;
  }
  select {
    font-size: 2rem;
    font-weight: 900;
    border: none;
    background: transparent;
  }
  option {
    background: transparent;
    padding: 1rem;
    margin: 1rem;
  }
}
select option {
  background: transparent;
}
.table-container {
  //max-width: 800px;
  overflow-x: auto;
  //display: flex;
}


</style>