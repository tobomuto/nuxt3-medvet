<template>
    <div>
        <div class="laboratory-header">
            <div class="wrapper">
                <Nuxt-Link to="/laboratory" class="text-xs font-bold">Revenir à la liste</Nuxt-Link>
                <h1>{{ laboratory.name }}</h1>
            </div>
        </div>
        <div class="laboratory-content">
            <div class="wrapper flex gap-24">
                <div class="description-container">
                    <h2 class="text-primary font-bold mb-3">Description</h2>
                    <p class="text-xs">{{ laboratory.description }}</p>
                </div>
                <div class="contact-card flex flex-col">
                    <span class="mb-4">contact</span>
                    <h6>Adresse</h6>
                    <p>CEVA Santé animale<br>
                    10 avenue de la Ballastière<br>
                    33500 LIBOURNE</p>
                    <h6>Téléphone</h6>
                    <p>05.57.55.40.40</p>
                    <h6>fax</h6>
                    <p>05.57.55.41.98</p>
                    <ButtonBase class="button_small_secondary_light text-xs mt-6">Site internet</ButtonBase>
                </div>
            </div>
        </div>
        <ListingResults searchTypeResults='laboratory' />
    </div>
</template>

<script>

definePageMeta({
    layout: "home",
});

export default {
    data() {
        return {
            laboratory : {
                name: "Axience",
                description: `Axience est un laboratoire pharmaceutique vétérinaire français créé il y a plus de 20 ans.
                    Axience développe ses propres médicaments à destination du marché européen et commercialise des spécialités destinées aux animaux de compagnie et aux animaux de rente en France.
                    Conformément au nouveau règlement européen 2019/6, Axience acquiert le statut de Distributeur en Gros mais, conserve la possibilité de mettre sur le marché tout type de médicaments vétérinaires (dont psychotropes ou stupéfiants), d’en assurer la publicité par l’intermédiaire d’une force de vente répartie sur l’ensemble du territoire, et d’en effectuer la gestion et le suivi réglementaire (packaging, pharmacovigilance, rappel de lot, …)
                    Les domaines de prédilection majeurs d’Axience sont l’anesthésie et l’analgésie des animaux, la gestion des risques infectieux au sein des cliniques vétérinaires (avec une gamme étendue de désinfectants ciblant les germes vétérinaires et de nombreux antibiotiques).
                    Médicaments, Développement, Ventes`
            }
        }
    }
}
</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

.laboratory-header {
    background-color: $darkGrayBackground;
    color: white;
    padding-top: 41px;
    padding-bottom: 55px;
}
.laboratory-content {
    background-color: white;
    padding: 62px 0 82px 0;
    .description-container {
        width: 70%;
    }
    .contact-card {
        padding: 1.7em;
        background-color: $primary;
        border-radius: $borderRadiusPlus;
        width: 257px;
        height: fit-content;
        translate: 0 -30%;
        span {
            font-size: 10px;
        }
        h6 {
            margin-bottom: 1.3em;
            margin-top: 0.8em;
        }
        p {
            font-size: 12px;
        }
    }
}
</style>