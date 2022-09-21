<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<style lang='scss'>

@import '~/assets/styles/_variables.scss';

html {
    font-family: $fontRegular;
    color: $textMainColor;
}

body {
    min-height: 100vh;
    background-color: $bodyBackground;
    margin: 0;
    min-height: 100vh;
}

.main-content {
    max-width: $maxWidth;
    margin: 0 auto;
}

input:not(input[type=checkbox]) {
    padding: 1em 2em;
    background: white;
    border: 1px solid $borderColor;
    border-radius: $borderRadius;
    &::placeholder {
        color: $textMainColor;
    }
}

input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    display: grid;
    place-content: center;
    color: currentColor;
    width: 0.9em;
    height: 0.9em;
    border: 1px solid $primary;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    
}

input[type="checkbox"]::before {
    content: "";
    width: 0.6em;
    height: 0.6em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em $primary;
    background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input:focus:not(input[type=checkbox]) {
    border: 1px solid $secondary;
    outline: 2px solid $secondary;
} 

input[type=search] {
    width: 320px;
}

::selection {
    color: white;
    background: $primary;
}

hr {
    border-color: $borderColor;
}

h1, h2, h3, h4, h5, h6 {
    font-family: $fontBold;
}

h1 {
    font-size: 42px;
}

h2 {
    font-size: 32px;
}

h3 {
    font-size: 22px;
}

h4 {
    font-size: 16px;
}

h5 {
    font-size: 14px;
}

h6 {
    font-size: 12px;
}

p {
    line-height: inherit;
}

b {
    font-family: $fontBold;
}

button {
    font-family: $fontBold;
    height: fit-content;
}

.button_large_secondary_light {
    @include button(large, secondary, light);
}

.button_large_secondary_dark {
    @include button(large, secondary, light);
}

.button_large_primary_light {
    @include button(large, primary, light);
}

.button_large_primary_dark {
    @include button(large, primary, dark);
}

.button_small_secondary_light {
    @include button(small, secondary, light);
}

.button_small_secondary_dark {
    @include button(small, secondary, dark);
}

.button_small_primary_light {
    @include button(small, primary, light);
}

.button_small_primary_dark {
    @include button(small, primary, dark);
}
.button_warning {
    @include button(small, primary, dark);
}

.show-more-button {
    padding: 0.7em 2.8em;
    border-radius: $borderRadius;
    border: none;
    color: white;
    background-color: $tertiary;
    font-size: 12px;
    &:hover {
        transition: all 0.3s ease;
        background-color: #DB6646;
    }
}

.container {
    @include container;
}

.shadow {
    box-shadow: $boxShadowLight;
}

.nuxt-link-active {
    color: red;
}

.wrapper {
    max-width: $maxWidth;
    padding: 0 50px;
    margin: 0 auto;
}

.border {
    border: 1px solid $borderColor;
    border-radius: $borderRadius;
}

.border-large {
    border: 1px solid $borderColor;
    border-radius: $borderRadiusPlus;
}


</style>