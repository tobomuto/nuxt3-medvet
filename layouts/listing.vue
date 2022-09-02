<template>
    <div class="sticky-header">
        <HeaderNavbar/>
        <HeaderAlphabet/>
    </div>
    <main>
        <slot/>
    </main>

    <Footer/>

</template>

<script>
export default {

}
</script>

<style lang='scss'>

.sticky-header {
    position: sticky;
    top: 0;
}

.listing-page {
    display: flex;
    gap: clamp(0.625rem, -9.387rem + 17.8vw, 6.188rem);
    section {
        max-width: 972px;
        padding: 40px 10px;
    }
}

</style>