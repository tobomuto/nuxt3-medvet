<template>
    <li class="result">
        <Nuxt-Link :to="'/search-results/'+result.name" class="result-container">
            <div class="result-types flex gap-5 mb-2">
                <span class="item-category" v-for="category in result.categories" :key="category">{{ category }}</span>
                <span class="item-race" v-for="race in result.races" :key="race">{{ race }}</span>
            </div>
            <span class="mb-4">{{ result.name }}</span>
            <div class="flex gap-1 text-xs">
                <span class="text-primary font-bold">{{ result.lab }}</span> 
                <span>|</span>
                <span>Mise à jour le {{ result.updated }}</span>
            </div>
        </Nuxt-Link>
    </li>
</template>

<script>
export default {
    props: {
        result: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>