<template>
	<b-container fluid>
		<b-row>
			<b-col class="col-12 p-0">
				<b-img :src="require('@/projetos/'+$route.params.name+'/destaque.jpg')" fluid></b-img>
			</b-col>
		</b-row>
		<b-row class="content">
			<b-col class="col-12 col-md-6 text-left align-self-center">
				<h1 class="textG">{{dados.textG}}</h1>
				<h3 class="textM">{{dados.textM}}</h3>
				<!--<p class="textP" v-html="dados.textP"></p>-->
				<p class="textP" v-html="description"></p>
			</b-col>
			<b-col>
				<b-img :src="require('@/projetos/'+$route.params.name+'/content-img.jpg')" fluid></b-img>
			</b-col>
		</b-row>

		<!--<b-row class="content">

			<b-col v-for="(img,index) in dados.images" :class="'images '+img.class" :key="'proj-img-'+index">
				<b-img :src="require('@/projetos/'+$route.params.name+'/'+img.nm)" fluid></b-img>
			</b-col>

			<b-col v-for="(vid,index) in dados.vid" :class="'videos ' + vid.class" v-html="vid.content" :key="'proj-vid-'+index">
				
			</b-col>
		</b-row>-->
		<component class="content" :is="images"></component>

		<b-row class="content content-inner">
			<b-col class="col-12 last-col">
				<b-button @click="$router.go(-1)" class="btn-back text-uppercase">Voltar para Projetos</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script type="text/javascript">
	export default {
		data() {
			var json = require('@/projetos/'+this.$route.params.name+'/arch.json');
			var description = require('raw-loader!../projetos/'+this.$route.params.name+'/description.html');
			var content = require('@/projetos/'+this.$route.params.name+'/content.vue').default;
			console.log(content)
			return {
				dados: json,
				description: description,
				images: content
			}
		}
	}
</script>

<style type="text/css" scoped>
	.container-fluid {
		padding-bottom: 32px;
	}
	.textG {
		color: #000;
		font-weight: 900;
		font-size: 48px;
	}

	.textM {
		color: #919191;
		font-size: 24px;
		font-weight: 500;
	}

	.textP {
		padding-top: 24px;
		font-size: 14px;
		color: #000;
	}

	.content {
		padding: 32px 128px;
	}

	/*.images {
		padding: 16px;
	}*/

	.last-col {
		padding-top: 96px;
	}

	.btn-back {
		padding: 20px;
		border: none;
		border-radius: 0px;
		font-size: 14px;
		background: #003fa5;
		color: #fff;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.content {
			padding: 32px 96px;
		}
	}

	@media (max-width: 576px) {
		.content {
			padding: 32px 32px;
		}
	}
</style>