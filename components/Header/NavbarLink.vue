<template>
    <li 
        class="nav-dropdown-container flex items-center text-xs cursor-pointer"
        :class="link.id === 'user' ? 'user-link' : '' "
    >
        <Nuxt-Link 
            class="inline-flex items-center font-bold capitalize h-[70px]"
            v-if="link.id === 'user' && connected === true"
            :to="link.href">
            <ButtonBase
                class="my-account flex justify-center"
                role="menuitem"
                tabindex="-1"
            > 
                Mon compte
            </ButtonBase>
        </Nuxt-Link>

        <Nuxt-Link
            class="inline-flex items-center font-bold capitalize h-[70px]"
            v-else
            role="menuitem"
            tabindex="-1"
            :to="link.href"
        >
            {{ link.name }}
        </Nuxt-Link>
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
        &.user-link {
            .my-account {
                @include button(small, primary, dark);
            }
        }
    }

</style>