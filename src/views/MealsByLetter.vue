<template>
 <div class="flex justify-center gap-2 mt-2">
   <router-link 
            :to="{name: 'byLetter', params: {letter}}" 
            v-for="letter of letters" 
            :key="letter">
            
            {{ letter }}
        
   </router-link>
 </div>

 <Meals :meals="meals"></Meals>


</template>

<script setup>
import store from '../store';
import Meals from "../components/Meals.vue";
import { computed } from "@vue/reactivity";
import { onMounted, watch } from 'vue';
import { useRoute } from "vue-router";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXZ'.split("");
const meals = computed(() => store.state.mealsByLetters)
const route = useRoute();

watch(route, ()=> {
   store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
   store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>