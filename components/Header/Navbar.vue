<template>
<header class="header" role="banner">
    <div class="header__wrapper">
        <nuxt-link class="logo-container" to="/">
            <span class="text-3xl text-primary">Med</span><span class="text-3xl">'Vet</span>
        </nuxt-link>
        <nav role="navigation">
            <ul class="header__menu" role="menubar">
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

    .header {
        background-color: white;
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: $maxWidth;
            padding:0 50px;
            .logo-container {
                span {
                    font-family: $fontBold;
                }
                span:nth-child(3) {
                    font-family: $fontRegular;
                }
            }
        }
        &__menu {
            display: flex;
            align-items: center;
            list-style: none;
            gap: 4rem;
        }
    }
    
</style>