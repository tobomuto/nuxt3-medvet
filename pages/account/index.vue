<template>
    <div class="account-page main-content">
        <AccountSideBar @someEvent="accountState"/>
        <AccountInformations 
            v-if="state.main === 'infos'"
        />
    </div>
</template>

<script setup>

definePageMeta({
    layout: "account",
});

const state = reactive({ main: 'infos' })


const accountState = (emittedState) => {
    console.log(state)
    state.main = emittedState;
}


</script>

<style lang='scss' scoped>
    .account-page {
        display: flex;
        gap: clamp(0.625rem, -9.387rem + 17.8vw, 6.188rem);
        section {
            flex: 1 1 auto;
            max-width: 972px;
            padding: 40px 10px;
            p {
                font-size: 12px;
            }
            h4 {
                margin-bottom: 0.5em;
            }
        }
    }
</style>