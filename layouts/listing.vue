<template>
    <div>
        <div class="sticky-header">
            <HeaderNavbar/>
            <HeaderAlphabet/>
        </div>
        <main>
            <div class="listing-page main-content">
                <FiltersSideBar/>
                <slot/>
            </div>
        </main>
        <Footer/>
    </div>
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
        flex: 1 1 auto;
        max-width: 972px;
        padding: 40px 10px;
    }
}

</style>