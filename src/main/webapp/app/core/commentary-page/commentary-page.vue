<template>
<div>
    <h1 class="title"> Comments </h1>
<!--  Media Container  -->
    <div class="container">
        <b-row class="row">
            <div class="col-md-8">
                <div class="comments-list">
                    <div class="media"  >
                        <div class="media-body">
                            <div class="avatar"><img src="http://lorempixel.com/40/40/people/1/"></div>
                            <h4 class="media-heading user_name">Baltej Singh</h4>
                            <b-card>
                                <b-media>
                                    <template v-slot:aside>
                                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                                    </template>

                                    <h5 class="media-title">Media Title</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <p>
                                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </b-media>
                            </b-card>
                            <div class="raiting-box">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                    <div class="media"  >
                        <div class="media-body">
                            <div class="avatar"><img src="http://lorempixel.com/40/40/people/1/"></div>
                            <h4 class="media-heading user_name">Baltej Singh</h4>
                            <b-card>
                                <b-media>
                                    <template v-slot:aside>
                                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                                    </template>

                                    <h5 class="media-title">Media Title</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <p>
                                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </b-media>
                            </b-card>
                            <div class="raiting-box">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                    <div class="media"  >
                        <div class="media-body">
                            <div class="avatar"><img src="http://lorempixel.com/40/40/people/1/"></div>
                            <h4 class="media-heading user_name">Baltej Singh</h4>
                            <b-card>
                                <b-media>
                                    <template v-slot:aside>
                                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                                    </template>

                                    <h5 class="media-title">Media Title</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <p>
                                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </b-media>
                            </b-card>
                            <div class="raiting-box">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                    <div class="media"  >
                        <div class="media-body">
                            <div class="avatar"><img src="http://lorempixel.com/40/40/people/1/"></div>
                            <h4 class="media-heading user_name">Baltej Singh</h4>
                            <b-card>
                                <b-media>
                                    <template v-slot:aside>
                                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                                    </template>

                                    <h5 class="media-title">Media Title</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <p>
                                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </b-media>
                            </b-card>
                            <div class="raiting-box">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-row>
    </div>
<!--  Write a Comment Button  -->
    <div class="add-comentary">
        <b-button class="btn btn-default btn-xs pull-left" v-b-modal.modal-scrollable>Write Commentary</b-button>
        <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                <div class="card-body text-center"> <img src=" https://i.imgur.com/d2dKtI7.png" height="100" width="100">
                    <div class="comment-box text-center">
                        <h4>Add a comment</h4>
                        <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label> </div>
                        <div class="comment-area"> <textarea class="form-control" placeholder="what is your view?" rows="4"></textarea> </div>
                        <div class="text-center mt-4"> <button class="btn btn-success send px-5">Send message <i class="fa fa-long-arrow-right ml-1"></i></button> </div>
                    </div>
                </div>
        </b-modal>
    </div>
<!--  Pagination Nav  -->
    <div class="row justify-content-center">
        <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
    </div>
</div>
</template>

<style scoped>
.add-comentary{
    display: flex;
    justify-content: center;
    margin: 40px;
}
.title{
    text-align: center;
}
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}
input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type=submit]:hover {
    background-color: #45a049;
}
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
* {
    box-sizing: border-box;
}




.comment-box {
    padding: 5px
}
.comment-area textarea {
    resize: none;
    border: 1px solid #ff0000
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #ffffff;
    outline: 0;
    box-shadow: 0 0 0 1px rgb(255, 0, 0) !important
}
.send {
    color: #fff;
    background-color: #ff0000;
    border-color: #ff0000
}
.send:hover {
    color: #fff;
    background-color: #f50202;
    border-color: #f50202
}
.rating {
    display: inline-flex;
    margin-top: -10px;
    flex-direction: row-reverse
}
.rating>input {
    display: none
}
.rating>label {
    position: relative;
    width: 28px;
    font-size: 35px;
    color: #ff0000;
    cursor: pointer
}
.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0
}
.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important
}
.rating>input:checked~label:before {
    opacity: 1
}
.rating:hover>input:checked~label:before {
    opacity: 0.4
}



.media-heading {

    display:flex ;
    justify-content: center;
    }
.row{
justify-content: center;
}
img{
    border-radius: 30px;
    height: 50px;
    width: 50px;
}
.media{
    margin: 100px;
}
.media-title{
    display: flex;
    justify-content: center;
}
.avatar{
    display: flex;
    justify-content: center;
}
.raiting-box{
    display: flex;
    justify-content: center;
}
</style>
<script lang="ts" src="./commentary.page.ts">
</script>
