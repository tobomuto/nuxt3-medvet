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
                <div class="result-types">
                    <span v-for="type in result.types" :key="type">{{ type }}</span>
                    <span v-for="type in result.races" :key="type">{{ type }}</span>
                </div>
                <span>{{ result.name }}</span>
                <span>{{ result.lab }}</span>
                <span>{{ result.updated }}</span>
            </li>
        </template>

        <template v-if="searchTypeResults === 'laboratory'">
            <li
                v-for="result in datas"
                :key='result'
                class="result"
            >
                <div class="logo-container">
                    <img :src="result.logo" alt="">
                </div>
                <span class="mb-1">{{ result.name }}</span>
                <span class="text-primary font-bold text-xs">{{ result.products }} produits</span>
            </li>
        </template>
    </ul>
    <div class="text-center my-10">
        <p class="text-sm mb-4">Vous avez vu 10 résultats sur 600</p>
        <ButtonBase 
            class="show-more-button"
        >
            Afficher plus
        </ButtonBase>
    </div>
</template>

<script setup>

const resultsItems = [
    {
        name: 'ABCEDYL@PA',
        lab: 'Laboratoire Boiron',
        updated: '1 février 2021',
        types: ['Médicament', 'Solution'],
        races: ['chien', 'chat']
    },
    {
        name: 'ABCEDYL@PA',
        lab: 'Laboratoire Boiron',
        updated: '1 février 2021',
        types: ['Médicament', 'Solution'],
        races: ['chien', 'chat']
    },
];
const resultsLabs = [
    {
        name: 'Adiagene',
        logo: 'https://graphiste.com/blog/wp-content/uploads/2017/06/logo-cheval-9.png',
        products: 300,
    },
    {
        name: 'AGROBIOTHERS',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEGYQcuwq-IZw/company-logo_200_200/0/1605274011276?e=2147483647&v=beta&t=rEbLREHg6AXULh71L_64SqItxUNiEU1xFrnx7HBVc4M',
        products: 200,
    },
];
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
        .result {
            width: 223px;
            height: 200px;
            display: flex;
            flex-direction: column;
            .logo-container {
                height: 118px;
                img {
                    height: 100%;
                    margin: 0 auto;
                    object-fit: fill;
                }
            }
        }
    }
    &.items-results {
        flex-direction: column;
        .result {
            width: 100%;
        }
    }
    .result {
        background-color: white;
        border-radius: 10px;
        padding: 19px;
    }
}

</style>