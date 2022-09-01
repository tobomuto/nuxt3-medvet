<template>
    <header>
        <ul>
            <li
            v-for="(letter, index) in alphabet"
            :key="index"
            >
            <span>{{  letter }}</span>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            alphabet: "abcdefghijklmnopqrstuvwxyz".split("")
        }
    }
}
</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

header {
    background-color: $darkGrayBackground;
    ul {
        max-width: 1140px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(26, auto);
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 37px;
            color: white;
            font-size: 12px;
            background-color: $darkGrayBackground;
            text-transform: uppercase;
            cursor: pointer;
            &:hover {
                background-color: $primary;
            }
        }
    }
}

</style>