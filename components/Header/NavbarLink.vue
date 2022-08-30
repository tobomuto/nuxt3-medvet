<template>
    <li 
        class="nav-dropdown-container text-xs"
        :class="link.id === 'user' ? 'user-link' : '' "
    >
        <a 
            v-if="link.id === 'user' && connected === true"
            class="my-account"
            role="menuitem"
            tabindex="-1"
        >
            mon compte
        </a>
        <a
            v-else
            role="menuitem"
            tabindex="-1"
        >
            {{ link.name }}
        </a>
        <ul class="dropdown-menu list-none p0" role="menu" :aria-label="link.name" aria-expanded="false">
            <li
                v-for="submenu in link.subMenus"
                :key="submenu.name"
            >
                <NuxtLink 
                    :to="submenu.href"
                    class="px-8 cursor-pointer py-3"
                    role="menuitem"
                    tabindex="-1"
                    >
                {{ submenu.name }}
                </NuxtLink>
            </li>
        </ul>
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
        .dropdown-menu {
            display: none;
            position: absolute;
            transform: translatex(-25%);
            top: 70px;
            background-color: white;
            z-index: 10;
            box-shadow: $boxShadowWide;
            border-radius: 0 0 $borderRadius $borderRadius;
            li {
                white-space: nowrap;
                a {
                    text-decoration: none;
                    color: $textMainColor;
                    font-family: $fontRegular;
                }
                &:hover {
                    background-color: $creatingStatus;
                }
            }
        }
    }

    .nav-dropdown-container:hover,
    .nav-dropdown-container:focus {
        a {
            div {
                transform: rotate(-180deg);
            }
        }
        .dropdown-menu {
            display: block;
        }
    }
</style>