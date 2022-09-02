<template>
    <section>
        <h1>Laboratoires</h1>
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
        <ListingResults searchTypeResults='laboratory' :datas='resultsLabs'/>
    </section>
</template>

<script setup>

definePageMeta({
    layout: "listing",
});

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

</script>

<style lang='scss' scoped>


</style>