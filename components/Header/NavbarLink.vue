<template>
    <li 
        class="nav-dropdown-container text-xs"
        :class="link.id === 'user' ? 'user-link' : '' "
    >
        <ButtonBase
            v-if="link.id === 'user' && connected === true"
            class="my-account"
            role="menuitem"
            tabindex="-1"
            :href="link.href"
        > 
            Mon compte
        </ButtonBase>
        <a
            v-else
            role="menuitem"
            tabindex="-1"
            :href="link.href"
        >
            {{ link.name }}
        </a>
    </li>
</template>

<script>

export default {
    name: 'NavbarLink',
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            connected: true
        }
    }
}
</script>

<style lang='scss' scoped>

    @import '~/assets/styles/_variables.scss';

    .nav-dropdown-container {
        position: relative;
        height: 70px;
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        cursor: pointer;
        a {
            display: inline-flex;
            align-items: center;
            font-family: $fontBold;
            text-transform: capitalize;
            div {
                color: $primary;
                transform: rotate(0);
                transition: .3s;
            }
        }
        &.user-link {
            display: flex;
            align-items: center;
            span:nth-child(1) {
                font-size: 12px;
                font-family: $fontBold;
            }
            span:nth-child(2) {
                font-size: 9px;
                color: $primary;
                font-family: $fontRegular;
            }
            .my-account {
                @include button(small, primary, dark);
                display: flex;
                justify-content: center;
            }
        }
    }

</style>