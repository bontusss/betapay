<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="box text-white" id="one">
          <p class="">Payroll Burden</p>
          <p class="amount pb-5">&#8358; 100k</p>
          <RouterLink class="pt-5" to="/dashboard">View List &rarr;</RouterLink>
        </div>
      </div>
      <div class="col-3">
        <div class="box two">
          <p>Employees</p>
          <p class="amount pb-5">20</p>
          <RouterLink class="pt-5 text-primary" to="/dashboard"
            >View List &rarr;</RouterLink
          >
        </div>
      </div>
      <div class="col-3">
        <div class="box three">
          <p>Leave Request</p>
          <p class="amount pb-5">5</p>
          <RouterLink class="pt-5 text-primary" to="/dashboard"
            >View List &rarr;</RouterLink
          >
        </div>
      </div>
      <div class="col-3">
        <div class="box four">
          <p>Subscription</p>
          <p class="amount pb-5">Silver</p>
          <RouterLink class="pt-5 text-primary" to="/dashboard"
            >View Subscriptions &rarr;</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  height: 150px;
  width: 270px;
  background-color: rgb(211, 221, 211);
  margin: 0 10px;
  .amount {
    font-size: 25px;
    font-weight: bold;
  }
  a {
    color: white;
  }
}
#one {
  background-color: #00cc99 !important;
}
.two {
  background-color: rgb(211, 221, 211);
}
</style>
