import axiosClient from "../axiosClient";
// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            // debugger;
            commit('setSearchedMeals', data.meals)
        })
}
// List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a
export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            // debugger;
            commit('setMealsByLetter', data.meals)
        })
}
// Filter by main ingredient
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
export function searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`search.php?s=${ingredient}`)
        .then(({ data }) => {
            // debugger;
            commit('setMealByIngredient', data.meals)
        })
}

