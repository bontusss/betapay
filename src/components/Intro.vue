<script setup>

</script>

<template>
    <div class="container">
        <p class="text-center intro-1">
            Simplify team payments with
            payroll tracking software.
        </p>
    </div>
</template>



<style lang="scss" scoped>
.container {
    .intro-1 {
        font-weight: bold;
        font-size: 55px;
        line-height: 100%;
        width: 40rem;
        margin: 20px auto;
    }
    .box {
        margin: 10px 10px;
    }
    .free {
        background-color: rgb(253, 169, 13);
        color: white;
        font-weight: 900;
    }
    p,
    li {
        font-size: 20px;
    }
    .intro-img {
        margin: 50px 0px;
        // border: 1px solid red;
        height: 400px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 991px) {
        .intro-1 {
            line-height: 140%;
            font-size: 30px;
            width: 100%;
        }
        .intro-img {
            width: 100%;
        }
    }
}
</style>