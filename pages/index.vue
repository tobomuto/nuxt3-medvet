<template>
    <div class="home-page main-content">
        <HomeHero />
        <div class="about-container">
            <h2>Premier recueil des spécialités vétérinaires pensé et conçu par les entreprises du <span class="text-secondary">médicament vétérinaire</span></h2>
            <div class="flex justify-between gap-32 items-center mt-6">
                <div class="about-block">
                    <img src="~/assets/img/illu-1.png" alt="">
                    <p>Site accessible à tous les <b>ayants-droit</b> et au <b>grand public</b></p>
                </div>
                <div class="about-block">
                    <img src="~/assets/img/illu-2.png" alt="">
                    <p>Tous les <b>médicaments</b> et <b>produits non-médicamenteux</b> vétérinaires référencés</p>
                </div>
                <div class="about-block">
                    <img src="~/assets/img/illu-3.png" alt="">
                    <p>Site internet <b>mis à jour</b> en temps réel par les laboratoires adhérents</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

definePageMeta({
    layout: "home",
});

</script>

<style lang='scss' scoped>

    @import '~/assets/styles/_variables.scss';

    .home-page {
        background-color: white;
        .about-container {
            max-width: 1046px;
            margin: 0 auto;
            text-align: center;
            padding: 100px 70px;
            .about-block {
                width: 33%;
                img {
                    margin: 0 auto;
                    margin-bottom: 1em;
                }
            }
        }
    }

</style>