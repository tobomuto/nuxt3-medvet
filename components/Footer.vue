<template>
    <footer role="contentinfo">
        <div class="footer__wrapper">
            <div class="flex flex-col">
                <span class="text-xl font-bold"><span class="text-primary">Med</span>'Vet</span>
                <p class="text-xs">Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs perspicabilis hanc condidisse Perseus memoratur, Iovis filius et Danaes.</p>
                <a href="#" class="text-sm">En savoir plus</a>
                <span class="text-xs">© COPYRIGHT 2022 - Tous Droits Réservés</span>
            </div>
            <nav class="flex flex-col">
                <h5>Plan du site</h5>
                <a href="#">Produits</a>
                <a href="#">Laboratoire</a>
                <a href="#">Lexique</a>
                <a href="#">À propos</a>
            </nav>
            <div class="flex flex-col">
                <h5>Mentions légales</h5>
                <a href="#">Contenu éditorial</a>
                <a href="#">Conception réalisation du site</a>
                <a href="#">Hébergement du site</a>
                <a href="#">Propriété intellectuelle</a>
                <a href="#">Cookies</a>
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
footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: $darkGrayBackground;
    color: white;
    .footer__wrapper {
        display: grid;
        grid-template-columns: minmax(auto, 600px) repeat(2, minmax(auto, 200px)) auto;
        gap: 2rem;
        max-width: $maxWidth;
        margin: 0 auto;
        padding: 45px 50px;
        & > div:nth-child(1) {
            padding-right: clamp(0rem, -78.125rem + 104.17vw, 15.625rem);
        }
        h5 {
            color: $primaryLight;
            margin-bottom: 8px;
        }
        a {
            font-size: 12px;
            line-height: 2em;
        }
    }
}
</style>