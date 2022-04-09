<script setup>
import MailchimpWaitlist from "./MailchimpWaitlist.vue";
</script>

<template>
  <div class="container" id="waitlist">
    <div class="beta text-center">
      <p class="beta-text">
        Don't miss out. Get notified when we launch our beta.
      </p>
      <img src="@/assets/arrow.png" alt />
      <div class="section">
        <div class="mail">
          <MailchimpWaitlist />
        </div>
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

  @media (max-width: 991px) {
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
