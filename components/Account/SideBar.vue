<template>
    <aside>
        <h4>Bienvenue <span class="text-tertiary">Alice Lamy</span></h4>
        <button @click="$emit('someEvent', 'savings')" >Mes sauvegardes</button>
        <button @click="$emit('someEvent', 'infos')" >Mes informations</button>
        <button @click="logout()" >Déconnexion</button>
    </aside>
</template>

<script setup>

const logout = () => {
    console.log('logout')
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