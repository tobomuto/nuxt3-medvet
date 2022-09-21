<template>
<header class="bg-white" role="banner">
    <div class="flex justify-between items-center mx-auto px-[50px]">
        <nuxt-link class="logo-container" to="/">
            <span class="text-3xl text-primary">Med</span><span class="text-3xl">'Vet</span>
        </nuxt-link>
        <nav role="navigation">
            <ul class="flex items-center gap-16" role="menubar">
                <NavbarLink 
                    v-for="link in headerLinksJSON"
                    :key='link.name'
                    :link=link
                />
            </ul>
        </nav>
    </div>
</header>
</template>

<script>

import NavbarLink from './NavbarLink.vue';
import headerLinksJSON from '~/assets/datas/headerLinks.json';

export default {
    components: {NavbarLink},
    data() {
        return {
            headerLinksJSON,
        }
    }
}
</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

header {
    .logo-container {
        span {
            font-family: $fontBold;
        }
        span:nth-child(3) {
            font-family: $fontRegular;
        }
    }
}
    
</style>