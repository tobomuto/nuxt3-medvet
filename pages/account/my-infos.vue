<template>
    <div class="account-page main-content">
        <AccountSideBar/>
        <section>
            <div class="flex justify-between items-center">
                <h1>Mes informations</h1>
                <ButtonBase class="button_small_secondary_dark text-xs">Mettre à jour mes informations</ButtonBase>
            </div>
            <div class="container mb-4">
                <h4>Mes informations</h4>
                <hr class="mb-5">
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
    </div>
</template>

<script setup>

definePageMeta({
    layout: "account",
});

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