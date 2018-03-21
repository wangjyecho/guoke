<template>
	<div>
		<main>
			<div class="image"></div>
			<ul class="list">
				<li v-for="data in datalist">
					<p class="time">4小时前</p>
					<div class="downCon">
						<div class="left">
							<h3 class="up">{{data.title}}</h3>
							<p class="down">{{data.summary}}</p>
						</div>
						<div class="right">
							<img :src="data.small_image" alt="">
						</div>
					</div>
				</li>
			</ul>
		</main>

	</div>

</template>

<script>
import axios from 'axios'

	export default{
		data(){
			return{
				datalist:[],
				isShow:true
			}
		},
		mounted(){
			axios.get('/api/articles?retrieve_type=by_subject&channel_key=all&subject_key=all&limit=10&page=1').then(res=>{
				console.log(res.data)
				this.datalist=res.data;
			}).catch(error=>{
				console.log(error)
			})
		}
		
		
	}

</script>

<style lang="scss" scoped>


// 内容区
main{
	overflow:hidden;
	margin-top:50px;
	.image{
        height: 236px;
        background:url(https://1-im.guokr.com/z2R0BxbvV3eS41YQ1ea2IMh2dtifG1Ia3fjNXpfhbaEWBAAAkgIAAFBO.png) no-repeat center;
        background-size:cover;
        position:relative;
        background-color:#000;
	}
	ul{
		li{
			color:#999;
			border-bottom:1px solid #eee;
			padding:20px;
			.time{
				width:100%;
				font-size:12px;
				height:16px;
			}
			.downCon{
				height:95px;
				display:flex;
				overflow:hidden;
				.left{
					flex:1;
					h3{
						height:42px;
						overflow:hidden;
						display:flex;
						margin-top:7.5px;
						font-weight:100;
						color:#3f3f3f;
					}
					.down{
						height:38px;
						overflow:hidden;
						display:flex;
						margin-top:7.5px;
					}
				}
				.right{
					width:120px;
					height:95px;
					margin-left:10px;
					img{
						width:120px;
						height:75px;
					}
				}
			}
		}
	}
}
 

</style>