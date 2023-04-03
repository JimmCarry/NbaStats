<template>
  <header>
    <!-- <div class="date">
      <button @click="decrementDate">-</button>
      <h2>{{ formattedDate }}</h2>
      <button @click="incrementDate">+</button>
    </div> -->
    <!-- <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <main class="wrapper">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
  setup () {
    const currentDate = ref(new Date());

    const formattedDate = computed(() => {
      // const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
      };
      return currentDate.value.toLocaleDateString('en-US', options);
    });

    const incrementDate = () => {
      const newDate = new Date(currentDate.value.getTime() + 24 * 60 * 60 * 1000);
      currentDate.value = newDate;
    };

    const decrementDate = () => {
      const newDate = new Date(currentDate.value.getTime() - 24 * 60 * 60 * 1000);
      currentDate.value = newDate;
    };
    // const today = ref<any>(new Date());
    // const options: Intl.DateTimeFormatOptions = { 
    //   year: 'numeric', 
    //   month: 'long', 
    //   day: 'numeric',
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   second: 'numeric'
    // };
    // const locale = 'cz-cs';
    // const formattedDate = ref(new Intl.DateTimeFormat(locale, options).format(today.value));
    // console.log('formattedDate', formattedDate.value);

    // const getFormattedData = (day: any) => {
    //   return ref(new Intl.DateTimeFormat(locale, options).format(day))
    // }

    // const getFormattedData = computed(() => {
    //   return new Intl.DateTimeFormat(locale, options).format(today.value);
    // });

    // const datePlus = () => {
    //   today.value.setDate(today.value.getDate() + 1)
    //   console.log(today.value)
    // };

    // const dateMinus = () => {
    //   today.value.setDate(today.value.getDate() - 1)
    //   console.log(today.value)
    // };

    // watch(today, () => {
    //   getFormattedData(today.value);
    // });

    return {
      formattedDate,
      incrementDate,
      decrementDate,
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.date {
  display: flex;
}
</style>
