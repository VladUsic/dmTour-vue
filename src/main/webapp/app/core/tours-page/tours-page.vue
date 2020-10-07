<template>
    <div>
    <div class="product-filter">
        <select class="select-css">
            <option>Select Country</option>
            <option>Turkey</option>
            <option>USA</option>
            <option>OAE</option>
            <option>Egypit</option>
        </select>
        <select class="select-css">
            <option>Select Budget</option>
            <option>400$ - 600$</option>
            <option>600$-1000$</option>
            <option>2000$-4000$</option>
            <option>5000$-10000$</option>
        </select>
        <select class="select-css">
            <option>Select Hotel Quality</option>
            <option>3*</option>
            <option>4*</option>
            <option>5*</option>
        </select>
    </div>
    <div class="container">
            <div class="grid">
                <div class="content">
                    <ul class="rig columns-4">
                        <li>
                            <a href="#"><img class="product-image" src="https://www.usa.canon.com/internet/wcm/connect/us/dba3e27c-5e21-4810-96b6-45e92985dcd5/me200ssh-3q-300x300.png?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-dba3e27c-5e21-4810-96b6-45e92985dcd5-lgfJMsd&amp;&amp;alt="></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="active fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                                <b-button class="btn btn-default btn-xs pull-right">Order</b-button>
                                <div>
                                <b-button class="btn btn-default btn-xs pull-left" v-b-modal.modal-scrollable>Info</b-button>
                                <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                                    <p class="my-4" v-for="i in 20" :key="i">
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </p>
                                </b-modal>
                                </div>
                        </li>
                        <li>
                            <a href="#"><img src="https://www.usa.canon.com/internet/wcm/connect/us/14dc2051-1e57-4b0c-88c4-fd9ac0731203/lide110-300x300.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-14dc2051-1e57-4b0c-88c4-fd9ac0731203-l5Fo1Si&amp;&amp;alt="></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="http://images.frys.com/art/product/300x300/8789771.01.prod.jpg"></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="http://images.frys.com/art/product/300x300/8891512.01.prod.jpg"></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="http://images.frys.com/art/product/300x300/8331267.06.prod.jpg"></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5ZyysxCXBjRrvOwDDO34f6lrHGpACo6zOEJGxx3iy_lKfcTuO1g"></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="http://images.frys.com/art/product/300x300/8331257.04.prod.jpg"></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                        <li>
                            <a href="#"><img src="https://www.usa.canon.com/internet/wcm/connect/us/b7729990-dc2b-4609-b469-9661e0fa7af2/eos-c300pl-cinema-camera-300x300-v2.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-b7729990-dc2b-4609-b469-9661e0fa7af2-l1HTMdl&amp;&amp;alt="></a>
                            <h4>Image Title</h4>
                            <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star-half-o fa-2x"></i><i class="fa fa-star-o fa-2x"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <div class="price"> $999.99</div>
                            <span style="text-decoration: line-through; color:red;">$1,399.99</span>
                            <hr>
                            <button class="btn btn-default btn-xs pull-right" type="button">
                                <i class="fa fa-cart-arrow-down"></i> Add To Cart
                            </button>
                            <button class="btn btn-default btn-xs pull-left" type="button">
                                <i class="fa fa-eye"></i> Details
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
    <div class="pagination-wrapper">
  <div class="pagination">
    <a class="prev page-numbers" href="javascript:;">prev</a>
    <span aria-current="page" class="page-numbers current">1</span>
    <a class="page-numbers" href="javascript:;">2</a>
    <a class="page-numbers" href="javascript:;">3</a>
    <a class="page-numbers" href="javascript:;">4</a>
    <a class="page-numbers" href="javascript:;">5</a>
    <a class="page-numbers" href="javascript:;">6</a>
    <a class="page-numbers" href="javascript:;">7</a>
    <a class="page-numbers" href="javascript:;">8</a>
    <a class="page-numbers" href="javascript:;">9</a>
    <a class="page-numbers" href="javascript:;">10</a>
    <a class="next page-numbers" href="javascript:;">next</a>
  </div>
</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//----------  responsive breakpoints
//------------------------------------------------------------------------------
@mixin breakpoint ($value) {
  @if $value == 'phone' {
    @media only screen and (min-width: 120px) and (max-width: 767px) { @content; }
  } @else if $value == 'tablet' {
    @media only screen and (min-width: 768px) and (max-width: 1024px) { @content; }
  } @else if $value == 'touch' {
    @media only screen and (min-width: 120px) and (max-width: 1024px) { @content; }
  } @else if $value == 'desktop' {
    @media only screen and (min-width: 1025px) { @content; }
  } @else {
    @media only screen and (max-width: $value) { @content; }
  }
}

// Colors
$white: #fff;
$black: #000;
$grey: #595959;
$grey-dark: #2b2b2b;
$grey-light: #eee;
$green: #86c023;
$blue: #017ac7;

// Transition
$duration: 400ms;
$easing: ease;



//----------  pagination
//------------------------------------------------------------------------------
.pagination-wrapper {
  text-align: center;
  margin: 40px 0;
}
.pagination {
	display: inline-block;
	height: 70px;
	margin-top: 70px;
	padding: 0 25px;
	border-radius: 35px;
	background-color: $grey-light;

	@include breakpoint(1199px) {
		height: 50px;
		margin-top: 50px;
		padding: 0 10px;
		border-radius: 25px;
	}
}
.page-numbers {
	display: block;
	padding: 0 25px;
	float: left;
	transition: $duration $easing;
	color: $grey;
	font-size: 20px;
	letter-spacing: 0.1em;
	line-height: 70px;

	&:hover,
	&.current {
		background-color: $green;
		color: $white;
	}

	&.prev:hover,
	&.next:hover {
		background-color: transparent;
    color: $green;
	}

	@include breakpoint(1199px) {
		padding: 0 15px;
		font-size: 16px;
		line-height: 50px;
	}

	@include breakpoint(touch) {
		padding: 0 14px;
		display: none;

		&:nth-of-type(2) {
			position: relative;
			padding-right: 50px;

			&::after {
				content: '...';
				position: absolute;
				font-size: 25px;
				top: 0;
				left: 45px;
			}
		}

		&:nth-child(-n+3),
		&:nth-last-child(-n+3) {
			display: block;
		}

		&:nth-last-child(-n+4) {
			padding-right: 14px;

			&::after {
				content: none;
			}
		}
	}
}
//----------  select menu
//-----------------------------------------------------------------------------
.select-css {
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 20%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 10px;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}

@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);
*,
*:before,
*:after {
    box-sizing: border-box;
}
.clearfix:after {
    content: "";
    display: table;
    clear: both;
}
/* Grid layout */
.grid {
    display: grid;
    grid-auto-columns: 1fr 200px;
}
.content {
    grid-column: 1;
}
.sidebar {
    grid-column: 2;
    margin: 5px;
    padding: 5px;
}
.grid > * {
    border: 0px; /* demo only */
}
/* Product Grid */
body {
    background: #fff;
}
h1 {
    font-weight: 500;
    font-size: 20px
}
.product-filter {
    display: flex;
    justify-content: center;
    margin: 10px 10px 10px 10px;
}
.product-filter h1 {
    flex-grow: 1;
}
.sort {
    display: flex;
}
.collection-sort {
    display: flex;
    flex-direction: column;
}
ul.rig {
    list-style: none;
    font-size: 0px;
    margin-left: -2.5%;
    /* should match li left margin */
}
ul.rig li {
    display: inline-block;
    padding: 10px;
    border-radius: 20px;;
    margin: 0 0 2.5% 2.5%;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 16px;
    font-size: 1rem;
    vertical-align: top;
    box-shadow: 0 0 0px #000000;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
ul.rig li img {
    max-width: 80%;
    height: auto;
    margin: 0 0 10px;
}
ul.rig li h3 {
    margin: 0 0 10px;
}
ul.rig li p {
    font-size: 1.0em;
    line-height: 1.5em;
    color: #000000;
}
/* class for 2 columns */
ul.rig.columns-2 li {
    width: 47.5%;
    /* this value + 2.5 should = 50% */
}
/* class for 3 columns */
ul.rig.columns-3 li {
    width: 30.83%;
    /* this value + 2.5 should = 33% */
}
/* class for 4 columns */
ul.rig.columns-4 li {
    width: 22.5%;
    /* this value + 2.5 should = 25% */
}
@media (max-width: 870px) {
    ul.grid-nav li {
        display: inline-block;
        margin: 0 0 5px;
    }

    ul.grid-nav li a {
        display: inline-block;
        margin: 0 0 5px;
    }

    ul.rig {
        margin-left: 0;
    }

    ul.rig li {
        width: 100% !important;
        margin: 0 0 10px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 10px;
    }
}
</style>
<script lang="ts" src="./tours.page.ts">
</script>
