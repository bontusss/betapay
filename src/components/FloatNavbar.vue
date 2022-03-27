
<script setup>
import { FloatMenu } from 'vue-float-menu'
const items = [
    { name: "Why?" },
    {
        name: "Features",
        subMenu: {
            name: "Payroll",
            items: [{ name: "Copy" }, { name: "Paste" }],
        },
    },
    {
        name: "Open Recent"
    },
    {
        name: "Save",
    }
]
const handleSelection = (selectedItem) => {
    console.log(selectedItem);
};
</script>
<template>
    <float-menu
        :positon="'top right'"
        :dimension="150"
        :menu-dimension="{ height: 400, width: 300 }"
        :menu-data="items"
        :on-selected="handleSelection"
    >Menu</float-menu>
</template>


<style lang="css" scoped>
</style>