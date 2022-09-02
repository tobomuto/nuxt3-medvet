<template>
    <aside>
        <div>
            <div class="flex justify-between items-center">
                <h6>FILTRER</h6>
                <!-- <span>Tout effacer</span> -->
            </div>
        </div>
        <div>
            <h6 class="mb-1">Catégories</h6>
            <ul class="flex flex-col gap-2">
                <li
                    v-for="(category, index) in categories"
                    :key="index"
                >
                    <span>{{ category.name }}</span>
                </li>
            </ul>
        </div>
        <div>
            <Accordion title="Espèce"/>
        </div>
    </aside>
</template>

<script setup>

import categories from '@/assets/datas/categories.json';
    
</script>

<style lang='scss' scoped>

    @import '~/assets/styles/_variables.scss';

    aside {
        min-width: 296px;
        min-height: 100vh;
        background-color: white;
        > * {
            padding: 14px 23px;
            border-bottom: 1px solid $bodyBackground;
        }
        > :first-child {
            padding: 30px 23px 15px 23px;
        } 
        > :last-child {
        }
        ul {
            li {
                font-size: 11px;
                font-family: $fontBold;
                border: 1px solid $borderColor;
                padding: 5px 12px;
                color: $primary;
                border-radius: $borderRadius;
                cursor: pointer;
            }
        }
    }
</style>