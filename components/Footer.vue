<template>
    <footer class="w-full bg-darkGrayBackground text-white" role="contentinfo">
        <div class="footer__wrapper max-w-screen-xl px-12 py-11 gap-8 mx-auto">

            <div class="flex flex-col">
                <span class="text-xl font-bold"><span class="text-primary">Med</span>'Vet</span>
                <p class="text-xs">Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs perspicabilis hanc condidisse Perseus memoratur, Iovis filius et Danaes.</p>
                <a class="know-more font-bold text-sm mt-4 mb-8" href="#" >En savoir plus</a>
                <span class="text-xs">© COPYRIGHT 2022 - Tous Droits Réservés</span>
            </div>

            <nav class="flex flex-col">
                <h5 class="text-primaryLight mb-4">Plan du site</h5>
                <NuxtLink class="text-xs leading-6" to="/">Produits</NuxtLink>
                <NuxtLink class="text-xs leading-6" to="/">Laboratoire</NuxtLink>
                <NuxtLink class="text-xs leading-6" to="/">Lexique</NuxtLink>
                <NuxtLink class="text-xs leading-6" to="/">À propos</NuxtLink>
            </nav>

            <div class="flex flex-col">
                <h5 class="text-primaryLight mb-4">Mentions légales</h5>
                <a class="text-xs leading-6" href="#">Contenu éditorial</a>
                <a class="text-xs leading-6" href="#">Conception réalisation du site</a>
                <a class="text-xs leading-6" href="#">Hébergement du site</a>
                <a class="text-xs leading-6" href="#">Propriété intellectuelle</a>
                <a class="text-xs leading-6" href="#">Cookies</a>
            </div>

            <div class="flex flex-col">
                <button class="button_small_primary_dark">Espace laboratoire</button>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.footer__wrapper {
    display: grid;
    grid-template-columns: minmax(auto, 600px) repeat(2, minmax(auto, 200px)) auto;
    & > div:nth-child(1) {
        padding-right: clamp(0rem, -78.125rem + 104.17vw, 15.625rem);
    }
    .know-more {
        display: flex;
        align-items: center;
        &::before {
            content: "";
            display: inline-block;
            width: 1em;
            height: 2px;
            background-color: $primary;
            margin-right: .5em;
        }
    }
}

</style>