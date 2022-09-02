<template>
    <section>
        <SearchWidget class="mb-4" />
        <div class="flex items-center justify-between flex-wrap mb-4">
            <span>{600} résultats trouvés</span>
            <div class="flex items-center gap-8 items-center text-xs">
                <span class="text-disabled">Trier par</span>
                <span class="font-bold text-primary cursor-pointer">Ordre</span>
                <span class="font-bold cursor-pointer">Nombre de produits</span>
                <ButtonBase class="button_small_primary_dark text-sm">
                    Télécharger la liste
                </ButtonBase>
            </div>
        </div>
        <ListingResults searchTypeResults='items' :datas='resultsItems'/>
    </section>
</template>

<script setup>

definePageMeta({
    layout: "listing",
});

const resultsItems = [
    {
        name: 'ABCEDYL@PA',
        lab: 'Laboratoire Boiron',
        updated: '1 février 2021',
        categories: ['Médicament', 'Solution'],
        races: ['chien', 'chat']
    },
    {
        name: 'ABCEDYL@PA',
        lab: 'Laboratoire Boiron',
        updated: '1 février 2021',
        categories: ['Médicament', 'Solution'],
        races: ['chien', 'chat']
    },
];

</script>

<style>

</style>