<template>
    <ul 
        class="listing-results"
        :class="[
            searchTypeResults === 'laboratory' ? 'lab-results' 
            : 'items-results']"
    >

        <template v-if="searchTypeResults === 'items'">
            <MedicationCard 
                v-for="result in datas"
                :key='result'
                :result='result'
            />
        </template>

        <template v-if="searchTypeResults === 'laboratory'">
            <LaboratoryCard
                v-for="result in datas"
                :key='result'
                :result='result'
            />
        </template>
    </ul>
    <div class="text-center my-10">
        <p class="text-sm mb-4 italic">Vous avez vu 10 résultats sur 600</p>
        <ButtonBase 
            class="show-more-button"
        >
            Afficher plus
        </ButtonBase>
    </div>
</template>

<script setup>

defineProps({
    searchTypeResults: {
        type: String,
        required: true
    },
    datas: {
        type: Array,
        required: true
    }
});

</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

.listing-results {
    display: flex;
    &.lab-results {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }
    &.items-results {
        flex-direction: column;
        gap: 10px;
    }
    .result {
        background-color: white;
        border-radius: 10px;
        padding: 19px;
    }
}

</style>