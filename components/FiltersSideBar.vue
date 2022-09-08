<template>
    <aside>
        <div>
            <div class="flex justify-between items-center">
                <h6>FILTRER</h6>
                <span
                    v-if="checkedCategories.length > 0"
                    @click="deleteAllFilters"
                >Tout effacer</span>
            </div>
        </div>
        <ul class="flex flex-wrap gap-2" v-if="checkedCategories.length > 0">
            <li class="checked-filter" v-for="checkedCategory in checkedCategories" :key="checkedCategory">
                {{ checkedCategory.name }} 
                <span 
                    class="p-1 cursor-pointer"
                    @click="deleteFromChecked(checkedCategory)"
                >
                        X
                    </span>
            </li>
        </ul>
        <div>
            <h6 class="mb-1">Catégories</h6>
            <ul class="flex flex-col gap-2">
                <li
                    v-for="(category, index) in categories"
                    :key="index"
                >
                    <input :id="category.id" :value="category" v-model="checkedCategories" type="checkbox" name="category">
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

<script>

import categories from '@/assets/datas/categories.json';

export default {
    data() {
        return {
            checkedCategories: [],
            categories
        }
    },
    methods: {
        deleteAllFilters() {
            let inputs = document.getElementsByName('category');
            this.checkedCategories.splice(0);

            inputs.forEach(input => {
                if (input.checked) {
                    input.click();
                }
                input.checked = false;
            });
        },
        deleteFromChecked(checkedCategory) {
            categories.forEach(category => {
                if (category.id === checkedCategory.id) {

                    let input = document.querySelector('#'+ category.id);
                    
                    input.click();
                }
            });
        }
    }
}

// let checkedCategories = ref([])

// const deleteAllFilters = () => {
//     let inputs = document.getElementsByName('category');
//     checkedCategories.splice(0);

//     // for (let i = 0; i < inputs.length; i++) {
//     //     if (inputs[i].checked) {
//     //         inputs[i].click();
//     //     }
        
//     // }

//     inputs.forEach(input => {
//         if (input.checked) {
//             input.click();
//         }
//         input.checked = false;
//     });
// }

// const deleteFromChecked = (checkedCategory) => {
//     categories.forEach(category => {
//         if (category.id === checkedCategory.id) {

//             let input = document.querySelector('#'+ category.id);
            
//             input.click();
//         }
//     });
// }

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