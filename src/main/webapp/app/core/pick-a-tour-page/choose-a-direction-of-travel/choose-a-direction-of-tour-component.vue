<template>
    <div class="container">
        <div class="cover">
            <form  class="flex-form" action="/tour-page">
                <input type="search" placeholder="Where do you want to go?">
                <input type="date">
                <input type="date">
                <input type="submit" value="Search">
            </form>

        </div>
    </div>
</template>

<style scoped>
input input{
    text-align:center;
}
.cover  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;
}
.flex-form input[type="submit"] {
    background: #1B002B;
    border: 1px solid #1B002B;
    color: #fff;
    padding: 0 30px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
}
input[type="search"] {
    flex-basis: 700px;
    margin-right: 20px;
    outline: none;
}
input[type="date"] {
    flex-basis: 50px;
    margin-right: 20px;
    outline: none;

}
.flex-form button[type="submit"]:hover {
    background: #fcb045;
    border: 1px solid #fcb045;
}
input[type="search"]:hover {
    -webkit-box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    -moz-box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    transform: scale(1.020);
    transition: 0.3s ease-in;
    cursor: pointer;

}
input[type="date"]:hover {

    -webkit-box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    -moz-box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    box-shadow: 10px 10px 245px -21px rgba(254,224,132,1);
    transform: scale(1.020);
    transition: 0.3s ease-in;
    cursor: pointer;

}
.flex-form {
    display: flex;
    position: absolute;
    width: 1000px;
    border-radius: 10px;
    margin-left: 20px;
}
.flex-form > * {
    border: 0;
    line-height: 50px;
    font-size: 1rem;
    border-radius: 10px;
}
@media all and (max-width:800px) {
    body {
        font-size: 0.9rem;
    }
    .flex-form {
        width: 100%;
        flex-direction: column;
        margin-bottom: 80px;

    }
    input[type="search"] {
        flex-basis: 100%;
    }
    input[type="date"] {
        margin-top: 15px;
        flex-basis: 100%;
    }
    input[type="submit"] {
        margin-top: 15px;
        flex-basis: 100%;
        width: 95%;
    }
    .flex-form > * {
        font-size: 0.9rem;
    }
    h1 {
        font-size: 2rem;
    }

}
@media all and (max-width:360px) {
    header nav li{
        margin: 0 10px;
    }
    .flex-form {
        display: flex;

        flex-direction: column;
    }
    button[type="search"] {
        flex-basis: 0;
    }
    label {
        display: none;
    }

}
</style>
<script lang="ts" src="./choose.a.direction.of.tour.ts">
</script>
