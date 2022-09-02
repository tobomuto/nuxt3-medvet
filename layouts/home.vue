<template>
    <div>
        <HeaderNavbar/>

        <main>
            <slot />
        </main>
        
        <Footer/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

@import '~/assets/styles/_variables.scss';

</style>