<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'Home'}" class="inline-flex items-center h-full px-5">
        Home
    </router-link>
    <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center transition-colors:100 px-2 h-full hover:bg-purple-100">
            Search Meal 
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center transition-colors:100 px-2 h-full hover:bg-purple-100">
            Meals by Letter 
        </router-link>
        <router-link :to="{name: 'Ingredients'}" class="inline-flex items-center transition-colors:100 px-2 h-full hover:bg-purple-100">
            Meals by Ingredients 
        </router-link>
        
    </div>
</header>
</template>