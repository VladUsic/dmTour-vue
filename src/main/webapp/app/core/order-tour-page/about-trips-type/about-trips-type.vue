<template>
<div class="tours-type-descriptions">
    <!-- The App Section -->
    <div class="container">
        <div class="row">
            <div class="column-66">
                <h1 class="xlarge-font"><b>The App</b></h1>
                <h1 class="large-font" ><b>Why buy it?</b></h1>
                <p><span >Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="column-33">
                <img :src='vipTours' >
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="column-33">
                <img :src='airTours' alt="App" >
            </div>
            <div class="column-66">
                <h1 class="xlarge-font"><b>Clarity</b></h1>
                <h1 class="large-font" ><b>Pixels, who?</b></h1>
                <p><span style="font-size:24px">A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
    <!-- The App Section -->
    <div class="container">
        <div class="row">
            <div class="column-66">
                <h1 class="xlarge-font"><b>The App</b></h1>
                <h1 class="large-font" ><b>Why buy it?</b></h1>
                <p><span>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="column-33">
                <img :src='busTours' >
            </div>
        </div>
    </div>
    <!-- Clarity Section -->
    <div class="container">
        <div class="row">
            <div class="column-33">
                <img :src='groupTours' alt="App" >
            </div>
            <div class="column-66">
                <h1 class="xlarge-font"><b>Clarity</b></h1>
                <h1 class="large-font" ><b>Pixels, who?</b></h1>
                <p><span style="font-size:24px">A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
img:hover{
    transform: scale(1.05) translateZ(0);
    filter: brightness(1.00) saturate(1.2) contrast(1.00);

}
img {
    width: 100%;
    border-radius: 30px;
}
.tours-type-descriptions{
    background-color: #1B002B;
}
* {
    box-sizing: border-box;
}
.container {
    padding: 64px;
}
/* Clear floats */
.row:after {
    content: "";
    display: table;
    clear: both
}
/* 2/3 column */
.column-66 {
    float: left;
    width: 50%;
    padding: 20px;
    color: white;
}
/* 1/3 column */
.column-33 {
    float: left;
    width: 50%;
    padding: 20px;
    color: white;

}
/* Add responsiveness - make the columns appear on top of each other instead of next to each other on small screens */
@media screen and (max-width: 1000px) {
    .column-66,
    .column-33 {
        width: 100%;
        text-align: center;
    }
}
</style>
<script lang="ts" src="./about.trips.type.component.ts">
</script>
