<template>
    <section class="relative mb-28">
        <img src="https://placekitten.com/1440/700" alt="background-image">
        <h1>Dictionnaire des médicaments et produits vétérinaires</h1>
        <div class="search-container">
            <h2 class="mb-2">Vous recherchez un</h2>
            <SearchWidget searchTypeCategory />
        </div>
    </section>
</template>

<script setup>

</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';


h1 {
    color: white;
    font-size: 52px;
    width: 863px;
    text-align: center;
    position: absolute;
    transform: translatex(50%);
    bottom: 140px;
    right: 50%;
}
.search-container {
    position: absolute;
    transform: translate(50%, 50%);
    right: 50%;
    bottom: 0;
    width: 62%;
    border-radius: $borderRadiusPlus;
    background-color: white;
    padding: 20px 25px 25px 25px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
}


</style>