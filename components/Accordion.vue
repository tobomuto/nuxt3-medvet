<template>
    <details class="w-full cursor-pointer">
        <summary>
            <h6>{{ title }}</h6>
        </summary>
        <ul>
            <li>chat</li>
            <li>chien</li>
            <li>...</li>
        </ul>
    </details>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<style lang='scss'>

    details > summary {
        list-style: none;
    }
    details{
        overflow: hidden;
    }
    details[open] summary ~ * {
        animation: sweep .5s ease-in-out;
    }

    @keyframes sweep {
        0%    {opacity: 0; transform: translateY(-100%)}
        100%  {opacity: 100%; transform: translateY(0%)}
    }

    details > summary::-webkit-details-marker {
        display: none;
    }

</style>