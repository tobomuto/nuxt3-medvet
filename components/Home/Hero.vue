<template>
    <div class="hero">
        <img src="https://placekitten.com/1440/700" alt="background-image">
        <h1>Dictionnaire des médicaments et produits vétérinaires</h1>
        <div class="search-container">
            <h2>Vous recherchez un</h2>
            <form class="flex">
                <div class="search-widget">
                    <select name="" id="">
                        <option value="0">Toutes les catégories</option>
                    </select>
                    <div class="separator"></div>
                    <input type="search" placeholder="Rechercher un produit">
                </div>
                <input class="" type="button" value="Rechercher">
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>

@import '~/assets/styles/_variables.scss';

.hero {
    position: relative;
    margin-bottom: 115px;
    h1 {
        color: white;
        font-size: 52px;
        width: 863px;
        text-align: center;
        position: absolute;
        transform: translatex(50%);
        bottom: 140px;
        right: 50%;
    }
    .search-container {
        position: absolute;
        transform: translate(50%, 50%);
        right: 50%;
        bottom: 0;
        border-radius: 10px;
        background-color: white;
        padding: 20px 25px 25px 25px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
        h2 {
            margin-bottom: 0.5em;
        }
        .search-widget {
            display: flex;
            border-radius: 10px 0 0 10px;
            width: 680px;
            padding: 9px 16px;
            border: 1px solid $borderColor;
            select {
                font-size: 12px;
                font-family: $fontBold;
                outline: none;
                padding-right: 1em;
                margin-right: 2em;
            }
            .separator {
                width: 1px;
                height: 100%;
                background-color: $borderColor;
            }
            input[type=search] {
                border: none;
                background: transparent;
                width: 100%;
                outline: none;
                padding: 0 2em;
            }
        }
        input[type=button] {
            border-radius: 0 10px 10px 0;
            background-color: $tertiary;
            color: white;
            font-family: $fontBold;
            border: none;
            cursor: pointer;
            
        }
    }
}

</style>