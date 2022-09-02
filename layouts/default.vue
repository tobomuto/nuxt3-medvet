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

<style lang='scss' scoped>

main {
    padding: 30px 0;
}

</style>