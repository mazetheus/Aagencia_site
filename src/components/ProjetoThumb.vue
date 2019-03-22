<template>
	<router-link :to="'/projeto/'+projeto" :class="destaque ? 'col-12 p-0' : 'col-6 col-md-4 p-0'">
		<div :style="{background: destaque ? 'rgba(0,59,155, 0.7)' : 'rgba(0,0,0, 0.7)'}" class="projeto-thumb" >
			<b-img :src="destaque ? require('@/projetos/'+projeto+'/destaque.jpg') : require('@/projetos/'+projeto+'/thumb.jpg')" fluid></b-img>
			<div class="mask d-flex" :style="{background: destaque ? 'rgba(0,59,155, 0.7)' : 'rgba(0,0,0, 0.7)'}">
				<h1 :class="destaque ? 'capt-dest mask-h1 mx-auto align-self-center' : 'capt mask-h1 mx-auto align-self-center'">{{dados.name}}</h1>
			</div>
		</div>
	</router-link>
</template>

<script type="text/javascript">
	export default {
		props: {
			projeto: String,
			destaque: Boolean
		},
		data() {
			var json_data = require('@/projetos/'+this.projeto+'/arch.json');
			return {
				dados: json_data
			}
		}
	}
</script>

<style type="text/css" scoped>
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: transparent !important;

		transition: background 0.5s ease;
	}

	.mask:hover {
		width: 100%;
		height: 100%;
		position: absolute;
		background: inherit !important;
		top: 0;

		transition: background 0.5s ease;
	}

	.mask-h1 {
		opacity: 0;
		color: #fff;
		font-size: 4vw;
		transition: opacity 0.5s ease,
								top 1s ease;
	}

	.mask:hover > .mask-h1 {
		color: #fff;
		opacity: 1;
		transition: opacity 0.5s ease,
								top 1s ease;
	}

	.capt-dest {
		font-weight: 900;
		font-size: 6vw;
	}

	@media (max-width: 576px) {
		.mask-h1 {
			font-size: 8vw;
		}
	}
</style>