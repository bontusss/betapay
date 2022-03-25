<script setup>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <p class="intro-1 box">
                    Salary payment software that helps you pay faster –
                    <span class="free">for free</span>.
                </p>
                <section>
                    <p class="text-secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt optio
                        voluptatibus eius?
                    </p>
                    <ul>
                        <li
                            class="text-secondary"
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi?</li>
                        <li
                            class="text-secondary"
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                        <li
                            class="text-secondary"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis.</li>
                    </ul>
                </section>
                <section class="action-btns d-flex w-70">
                    <button class="btn btn-primary mx-3" type="submit">Get Started</button>
                    <button class="btn btn-white" type="submit">Learn More</button>
                </section>
            </div>
            <div class="col-sm-6">
                <div class="intro-img box">
                    <img src="@/assets/bn.webp" alt />
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.container {
    .intro-1 {
        font-weight: bold;
        font-size: 45px !important;
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
        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 991px) {
        .intro-1 {
            line-height: 140%;
            font-size: 30px !important;
        }
        .intro-img {
            width: 100%;
        }
    }
}
</style>