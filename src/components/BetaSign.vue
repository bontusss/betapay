<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'
const email = ref('')
const info = ref('')
const form = ref(null)
const sendMail = () => {
    try {
        info.value = 'Saving your email...'
        console.log('Saving your email...');
        emailjs.sendForm('service_lpg5723', 'template_oap4gwp', form.value, 'Ox9MOpM6hkRIg9bJG')
        console.log('Your email is saved and you will be notified when we launch.')
        info.value = 'Your email is saved and you will be notified when we launch.'
    } catch (error) {
        info.value = error.message
        console.log(error);
    }
    email.value = ''
    setInterval(() => {
        info.value = ''
    }, 5000)
}

</script>

<template>
    <div class="container">
        <div class="beta text-center">
            <p class="beta-text">Don't miss out. Get notified when we launch our beta.</p>
            <img src="@/assets/arrow.png" alt />
            <div class="input-box mx-auto">
                <form ref="form" @submit.prevent="sendMail">
                    <input
                        type="email"
                        placeholder="emma@gmail.com"
                        v-model="email"
                        name="user_email"
                    />
                    <button class="btn btn-dark mb-1 shadow-none" type="submit">Notify me</button>
                </form>
                <p class="info">{{ info }}</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import "@/assets/base.scss";

.beta {
    background-color: $card-color;
    height: 500px;
    border-radius: 20px;

    .beta-text {
        font-weight: bolder;
        font-size: 35px;
        width: 700px;
        padding: 60px 0;
        text-align: center;
        margin: auto;
        line-height: 100%;
    }
    img {
        margin-top: -50px;
    }
    .input-box {
        width: 600px;
        border: 1px solid black;
        height: 50px;
        margin-top: 20px;
        input {
            height: 40px;
            margin-top: 5px;
            padding: 0 10px;
        }
        input::placeholder {
            padding: 0 10px;
            color: gray;
        }
        input[type="email"]:active {
            border: 0;
        }
        .btn {
            margin-left: 20px;
        }
        .info {
            margin: 20px 0;
        }
    }

    @media (max-width: 991px) {
        .input-box {
            width: 100%;
            border: 0;
            input {
                width: 40%;
            }
        }

        .beta-text {
            width: 90%;
        }

        .beta {
            margin-top: -90px;
        }
        .btn {
            margin-left: 10px;
        }
    }
}
</style>