<template>
    <aside class="min-h-screen bg-white w-[296px]">
        <h4 class="border-b border-bodyBackground">Bienvenue <span class="text-tertiary">Alice Lamy</span></h4>
        <button 
            class="border-b border-bodyBackground" 
            @click="$emit('someEvent', 'savings')">
                Mes sauvegardes
        </button>
        <button 
            class="border-b border-bodyBackground" 
            @click="$emit('someEvent', 'infos')" >
                Mes informations
        </button>
        <button 
            class="border-b border-bodyBackground" 
            @click="logout()" >
                Déconnexion
        </button>
    </aside>
</template>

<script setup>

const logout = () => {
    console.log('logout')
}

</script>

<style scoped>

aside > * {
    padding: 14px 23px;
}
aside:first-child {
    padding: 30px 23px 15px 23px;
} 


</style>