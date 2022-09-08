<template>
    <ul 
        class="listing-results"
        :class="[
            searchTypeResults === 'laboratory' ? 'lab-results' 
            : 'items-results']"
    >

        <template v-if="searchTypeResults === 'items'">
            <li
                v-for="result in datas"
                :key='result'
                class="result"
            >
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
            </li>
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
        .result {
            width: 100%;
            padding: 16px 18px;
            .result-types {   
                span {
                    border-radius: $borderRadius;
                    padding: 0.6em 2em;
                    font-size: 10px;
                    font-family: $fontBold;
                }             
                .item-category {
                    background-color: $tertiaryLight;
                    color: $tertiary;
                }
                .item-race {
                    background-color: $primaryLight;
                    color: $primary;
                }
            }
        }
    }
    .result {
        background-color: white;
        border-radius: 10px;
        padding: 19px;
    }
}

</style>