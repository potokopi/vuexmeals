<template>
    <div class="flex justify-center gap-2 mt-2">
     
    </div>
   
    <Meals :meals="meals"></Meals>
   
   
   </template>
   
   <script setup>
   import store from '../store';
   import Meals from "../components/Meals.vue"
   import { computed } from "@vue/reactivity";
   import { onMounted, watch } from 'vue';
   import { useRoute } from "vue-router";
   
   const meals = computed(() => store.state.mealsByIngredients)
   const route = useRoute();
   
   watch(route, ()=> {
      store.dispatch('searchMealsByIngredient', route.params.ingredient)
   })
   
   onMounted(() => {
      store.dispatch('searchMealsByIngredient', route.params.ingredient)
   })
   
   </script>