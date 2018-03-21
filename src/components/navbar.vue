<template>
	<div>
		<nav>
			<slot></slot>
			<h1 class="logo"></h1>
			<slot></slot>
		</nav>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}

</script>

<style lang="scss" scoped>

// 导航
nav{
	height:50px;
    line-height:50px;
    position:fixed;
    top:0;
    z-index:5;
    width:100%;
    background:rgba(255,255,255,0.9);
	div{
		position: absolute;
	    height:50px;
	    width:50px;
	    top:0;
	}
	.zone{
		background: url(https://1-im.guokr.com/static/img/slide-1a45d2759b.png) no-repeat left;
		background-size:auto 40%;
		left: 0;
    	width: 100px;
	}
	.logo{
	    background: url(https://1-im.guokr.com/static/img/logo-top-c0e3f7abb3.png) no-repeat center;
	    background-size:100%;
	    width:33px;
	    height:50px;
	    margin:0 auto;
	}
	.search{
		background:url(https://1-im.guokr.com/static/img/search-2624b53ce8.png) right no-repeat;
		background-size:auto 40%;
		right: 10px;
	}
}


</style>