<template>
    <aside>
        <h4>Bienvenue <span class="text-tertiary">Alice Lamy</span></h4>
        <Nuxt-Link to="#">Mes sauvegardes</Nuxt-Link>
        <Nuxt-Link to="#">Mes informations</Nuxt-Link>
        <Nuxt-Link to="#">Déconnexion</Nuxt-Link>
    </aside>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>

    @import '~/assets/styles/_variables.scss';

    aside {
        width: 296px;
        min-height: 100vh;
        background-color: white;
        > * {
            padding: 14px 23px;
            border-bottom: 1px solid $bodyBackground;
        }
        > :first-child {
            padding: 30px 23px 15px 23px;
        } 
        a {
            display: block;
            font-size: 12px;
            font-family: $fontBold;
        }
    }

</style>