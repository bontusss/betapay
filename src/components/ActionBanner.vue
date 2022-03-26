<script setup>
</script>

<template>
    <div class="container">
        <div class="box text-center">
            <p class="title">Swift and reliable salary payments with less effort</p>
            <p class="text-secondary">User-friendly hiring software that delivers immediate results</p>
            <section class="img">
                <img src="@/assets/bnv.webp" alt />
            </section>
            <section class="action">
                <p class="dec">Ready to pay 100k+ employees automatically without stress?</p>
                <p
                    class="text-secondary sub-dec"
                >Create your company in less than 5 minutes. Sign up now and get notified when we launch.</p>
                <button class="btn btn-primary rounded">Notify me</button>
                <p class="p-3">
                    Already have an account?
                    &nbsp;
                    <a href="#">Sign in</a>
                </p>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    height: 40rem;
    background-color: #f8f9fa;
    border-radius: 15px;
    .title {
        font-size: 30px;
        font-weight: bold;
        padding-top: 6rem;
    }
    img {
        height: 80%;
        width: 80%;
    }
    .action {
        .dec {
            font-size: 22px;
            font-weight: bold;
        }
        .sub-dec {
            font-size: 18px;
        }
        button {
            font-weight: bolder;
        }
        a {
            text-decoration: none;
        }
    }
}
</style>