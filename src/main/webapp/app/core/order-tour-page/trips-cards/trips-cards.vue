<template>
    <div class="about-trips">
    <div class="cards-trips">
        <div class="card-grid">
            <a class="card" href="#">
                <div class="card__background"  style="background-image: url(../../../../content/images/vip-tours.jpg)"></div>
                <div class="card__content">
                    <p class="card__category">VIP Tours</p>
                </div>
            </a>
            <a class="card" href="#">
                <div class="card__background"  style="background-image: url(../../../../content/images/air-tours.jpg)"></div>
                <div class="card__content">
                    <p class="card__category">Air Tours</p>

                </div>
            </a>
            <a class="card" href="#">
                <div class="card__background"  style="background-image: url(../../../../content/images/bus-tourss.jpg)"></div>
                <div class="card__content">
                    <p class="card__category">Bus Tours</p>

                </div>
            </a>
            <a class="card" href="#">
                <div class="card__background"  style="background-image: url(../../../../content/images/groups-tours.jpg)"></div>
                <div class="card__content">
                    <p class="card__category">Group Tours</p>

                </div>
            </a>
        </div>
    </div>
    </div>
</template>
<style scoped>
*{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.cards-trips{
    align-items: center;
    display: flex;
    min-height: 100%;
    justify-content: center;

}
.card-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    width: 100%;
}
@media(min-width: 540px){
    .card-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(min-width: 960px){
    .card-grid{
        grid-template-columns: repeat(4, 1fr);
    }

}
.card{
    list-style: none;
    position: relative;
}
.card:before{
    content: '';
    display: block;
    padding-bottom: 150%;
    width: 100%;
}
.card__background{
    background-size: cover;
    background-position: center;
    bottom: 0;
    filter: brightness(1.00) saturate(1.2) contrast(1.00);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center;
    trsnsform: scale(1) translateZ(0);
    transition:
        filter 200ms linear,
        transform 200ms linear;
}
.card:hover .card__background{
    transform: scale(1.05) translateZ(0);
    -webkit-box-shadow: 25px 24px 120px -24px rgba(240,227,82,1);
    -moz-box-shadow: 25px 24px 120px -24px rgba(240,227,82,1);
    box-shadow: 25px 24px 120px -24px rgba(240,227,82,1);
}
.card-grid:hover > .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}
.card__content{
    position: absolute;
    left: 30px;
}
.card__category{
    color: #ffffff;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
</style>
<script lang="ts" src="./trips.cards.ts">
</script>
