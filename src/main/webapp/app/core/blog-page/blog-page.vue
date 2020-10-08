<template>
<div>
    <hero-component class="header"></hero-component>
    <div class="main-div">
    <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div class="fakeimg" style="height:200px;">Image</div>
                <p>Some text..</p>
            </div>
            <div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <div class="fakeimg" style="height:200px;">Image</div>
                <p>Some text..</p>
            </div>
        </div>
        <div class="rightcolumn">
            <div class="card">
                <h2>About Me</h2>
                <div class="fakeimg" style="height:100px;">Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div class="card">
                <h3>Popular Post</h3>
                <div class="fakeimg">Image</div><br>
                <div class="fakeimg">Image</div><br>
                <div class="fakeimg">Image</div>
            </div>
            <div class="card">
                <h3>Follow Me</h3>
                <p>Some text..</p>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<style scoped>
.main-div{
    background-color: #1B002B;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
    float: left;
    width: 75%;
}

/* Right column */
.rightcolumn {
    float: left;
    width: 25%;
    padding-left: 20px;
}

/* Fake image */
.fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
}

/* Add a card effect for articles */
.card {
    background-color: white;
    padding: 20px;
    margin-bottom: 10px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}



/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
    .leftcolumn, .rightcolumn {
        width: 100%;
        padding: 0;
    }
}

</style>
<script lang="ts" src="./blog.page.ts">
</script>
