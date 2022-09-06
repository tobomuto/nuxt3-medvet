<template>
    <aside>
        <div>
            <div class="flex justify-between items-center">
                <h6>FILTRER</h6>
                <!-- <span>Tout effacer</span> -->
            </div>
        </div>
        <ul class="flex flex-wrap gap-2" v-if="checkedCategories.length > 0">
            <li class="checked-filter" v-for="checkedCategory in checkedCategories" :key="checkedCategory">
                {{ checkedCategory }}
            </li>
        </ul>
        <div>
            <h6 class="mb-1">Catégories</h6>
            <ul class="flex flex-col gap-2">
                <li
                    v-for="(category, index) in categories"
                    :key="index"
                >
                    <input :id="category.id" :value="category.id" v-model="checkedCategories" type="checkbox">
                    <div class="flex justify-between">
                        <label :for="category.id">{{ category.name }}</label>
                        <span>100</span>
                    </div>
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

let checkedCategories = ref([])
    
</script>

<style lang='scss' scoped>

    @import '~/assets/styles/_variables.scss';

    aside {
        width: 296px;
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
            li.checked-filter {
                font-family: $fontBold;
                font-size: 11px;
                color: $primary;
                padding: 5px 12px;
                border-radius: $borderRadius;
                background-color: #CCEAE9;
            }
            li {
                input {
                    display: none;
                }
                input:checked~div {
                    background-color: #CCEAE9;
                }
                & > div {                    
                    width: 100%;
                    font-size: 11px;
                    border: 1px solid $borderColor;
                    padding: 5px 12px;
                    border-radius: $borderRadius;
                }
                label {
                    cursor: pointer;
                    color: $primary;
                    width: 100%;
                    font-family: $fontBold;
                }
            }
        }
    }
</style>