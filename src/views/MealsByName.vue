<template>

<div class="p-8 pb-0">
  <input 
        type="text" 
        class="rounded border-2 border-grey-200 w-full p-2" 
        placeholder="search for meals"
        v-model="keyword"
        @change="searchMeals"
        >

</div>

<Meals :meals="meals"></Meals>



</template>
   
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import Meals from "../components/Meals.vue";
import store from "../store";
  
const keyword = ref('');
const meals = computed(()=> store.state.searchedMeals);
const route = useRoute();

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name

  if (keyword.value) {
    searchMeals();
  }
})

</script>