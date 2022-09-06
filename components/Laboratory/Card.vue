<template>
    <li
        class="result"
    >
            <div class="logo-container">
                <img :src="result.logo" :alt="result.name + `'s logo`">
            </div>
        <Nuxt-Link :to="'/laboratory/'+result.name">
            <span class="mb-1">{{ result.name }}</span>
            <span class="text-primary font-bold text-xs">{{ result.products }} produits</span>
        </Nuxt-Link>
    </li>
</template>

<script>
export default {
    props: {
        result: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .result {
        width: 223px;
        height: 200px;
        display: flex;
        flex-direction: column;
        .logo-container {
            height: 118px;
            img {
                height: 100%;
                margin: 0 auto;
                object-fit: fill;
            }
        }
    }
</style>