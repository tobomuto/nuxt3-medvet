<template>
    <form class="flex w-full">
        <div class="search-widget">
            <div 
                class="flex"
                v-if="searchTypeCategory">
                <select 
                    name="" 
                    id="" >
                    <option value="0">Toutes les catégories</option>
                </select>
                <div class="separator"></div>
            </div>
            <input type="search" placeholder="Rechercher un produit">
        </div>
        <input class="" type="button" value="Rechercher">
    </form>
</template>

<script setup>

    defineProps({
        searchTypeCategory: {
            type: Boolean,
            required: false,
            default: false
        }
    })

</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

    .search-widget {
        display: flex;
        border-radius: 10px 0 0 10px;
        width: 100%;
        padding: 9px 16px;
        border: 1px solid $borderColor;
        select {
            font-size: 12px;
            font-family: $fontBold;
            outline: none;
            padding-right: 1em;
            margin-right: 2em;
        }
        .separator {
            width: 1px;
            height: 100%;
            background-color: $borderColor;
        }
        input[type=search] {
            border: none;
            background: transparent;
            width: 100%;
            outline: none;
            padding: 0 2em;
        }
    }
    input[type=button] {
        border-radius: 0 10px 10px 0;
        background-color: $tertiary;
        color: white;
        font-family: $fontBold;
        border: none;
        cursor: pointer;
        
    }

</style>