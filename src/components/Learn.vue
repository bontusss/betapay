<script setup>

</script>
<template>
    <div class="learn">
        <section class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="box">
                        <div class="icon">
                            <span class="material-icons" style="color: blue;">account_balance</span>
                        </div>
                        <p class="title">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, facere.</p>
                        <div class="d-flex justify-content-between pt-4">
                            <p>Learn more about lorem</p>
                            <span class="material-icons">trending_flat</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="box">
                        <div class="icon">
                            <span
                                class="material-icons"
                                style="color: skyblue;"
                            >account_balance_wallet</span>
                        </div>
                        <p class="title">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, facere.</p>
                        <div class="d-flex justify-content-between pt-4">
                            <p>Learn more about lorem</p>
                            <span class="material-icons">trending_flat</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="box">
                        <div class="icon">
                            <span class="material-icons" style="color: orange;">reduce_capacity</span>
                        </div>
                        <p class="title">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, facere.</p>
                        <div class="d-flex justify-content-between pt-4">
                            <p>Learn more about lorem</p>
                            <span class="material-icons">trending_flat</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>



<style lang="scss" scoped>
.learn {
    .box {
        background-color: #f8f9fa;
        height: 400px;
        border-radius: 15px;
        margin: 10px 5px;
        padding: 0 30px;
    }
    .box:hover {
        background-color: #e3e4e6;
        cursor: pointer;
    }
    .title {
        font-size: 21px;
        padding-top: 4rem;
        font-weight: bold;
    }
    .icon {
        .material-icons {
            font-size: 60px;
            padding-top: 40px;
        }
    }
}
</style>