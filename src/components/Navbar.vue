<template>
    <div class="container">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BetaPay</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarOffcanvasLg"
                    aria-controls="navbarOffcanvasLg"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="navbarOffcanvasLg"
                    aria-labelledby="navbarOffcanvasLgLabel"
                >
                    <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Why?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link">Company</a>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div class="dropdown me-2">
                                <button
                                    class="btn btn-light dropdown-toggle"
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
                            <button class="btn btn-primary me-3" type="submit">Get started free</button>
                            <button class="btn btn-dark" type="submit">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
    .navbar-brand {
        font-weight: bold;
        font-size: 30px;
    }
}
</style>