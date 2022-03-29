<template>
    <!-- todo: use https://github.com/prabhuignoto/vue-float-menu -->
    <div class="container">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BetaPay</a>

                <div class="d-flex">
                    <div class="d-flex">
                        <div class="dropdown me-2">
                            <button
                                class="btn btn-light dropdown-toggle d-none d-lg-block"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >English</button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a class="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another action</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        <button class="btn btn-primary me-3" type="submit">Get started</button>
                        <button class="btn btn-dark d-none d-lg-block" type="submit">Sign In</button>
                    </div>
                </div>
            </div>
            <MobileNavVue />
        </nav>
    </div>
</template>

<script setup>
import MobileNavVue from './MobileNav.vue';
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.navbar {
    border-bottom: 0.5px solid grey;
    .navbar-brand {
        font-weight: bold;
        font-size: 30px;
        color: $base-color;
    }
}

@media (max-width: 991px) {
    .navbar {
        border-bottom: 0;
    }
}
</style>