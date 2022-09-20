<template>
    <section>
        <div class="flex justify-between items-center flex-wrap">
            <h1>Mes informations</h1>
            <ButtonBase class="button_small_secondary_dark text-xs">Mettre à jour mes informations</ButtonBase>
        </div>
        <div class="container mb-4">
            <h4>Mes informations</h4>
            <hr class="mt-2 mb-5">
            <p><span class="font-bold">Nom : </span>Lamy</p>
            <p><span class="font-bold">Prénom : </span>Alice</p>
            <p><span class="font-bold">Email : </span>exemple@exemple.com</p>
            <ButtonBase class="button_small_secondary_dark text-xs mt-6">Mettre à jour le mot de passe</ButtonBase>
        </div>
        <div class="container">
            <div class="flex items-center">
                <input type="checkbox" name="newsletter-checkbox" id="newsletter-checkbox">
                <label for="newsletter-checkbox" class="text-xs ml-2">
                    Je souhaite m'inscrire à la newsletter pour recevoir régulièrement des informations sur l'ajout de nouveaux produits ou la modification de produits.
                </label>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>