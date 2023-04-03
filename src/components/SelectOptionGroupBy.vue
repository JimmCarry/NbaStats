<template>
    <div class="container">
        <div @click="listActive = !listActive; $emit('changeGroupBy', choosenType)" class="selector" :class="{ 'active': listActive}">
            <h1>{{ choosenType }}</h1>
            <div class="selectField">
                <p>Select a type</p>
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </div>

            <ul v-if="listActive" class="list">
                <li @click="choosenType = standing.value" v-for="standing in typesOfStandings" :key="standing.id" class="options">
                    <p>{{ standing.value }}</p>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup () {
        interface SeasonValue {
            id: number,
            value: string
        }
        const choosenType = ref('Conference')
        const typesOfStandings = ref([
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
            }
        ]);
        const listActive = ref(false);

        return {
            listActive,
            typesOfStandings,
            choosenType
        }
    }
})
</script>

<style lang="scss" scoped>
.arrow {
    transform: rotate(180deg);
    transition: transform 300ms ease;
}
.active .arrow{
    transform: rotate(0);
    transition: transform 300ms ease;
}
.selector {
    width: 350px;
    margin: 0 1rem;
}
.selectField {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 15px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.selectField svg {
    width: 12px;
}
.list {
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    z-index: 10;
}
.options {
    width: 100%;
    padding: 15px;
    list-style: none;
    cursor: pointer;
    box-sizing: border-box;
    p {
        text-align: center;
        font-size: 2rem;
    }
}
.options:hover {
    background: rgba(255, 255, 255, 0.7);
}
h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
}
.container {
    display: flex;
}
</style>