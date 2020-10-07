<template>
    <div class='hero-container'>
        <img :src='background'/>
        <h1>ADVENTURE AWAITS</h1>
    </div>
</template>

<style scoped>
/*Hero Section */
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
.hero-container {
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
}
.hero-container > h1 {
    color: #fff;
    font-size: 80px;
    text-shadow: 1px 1px 2px #FEE084, 0 0 2px darkblue, 0 0 5px #FEE084;
    margin-top: -100px;
}
.hero-container > p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
    text-align: center;

}
@media screen and (max-width: 960px) {
    .hero-container > h1 {
        font-size: 50px;
        margin-top: -150px;
        text-align: center;

    }
}
@media screen and (max-width: 768px) {
    .hero-container > h1 {
        font-size: 50px;
        margin-top: -100px;
        text-align: center;
    }
}
.hero-container > p {
    font-size: 30px;

}
</style>
<script lang="ts" src="./hero.order.page.component.ts">
</script>

