<template>
	<b-row id="nos" class="nos">
		<b-col class="col-12 col-md-6 p-0">
			<b-img :src="require('@/assets/nos-img.png')" fluid class="nos-img"></b-img>
		</b-col>
		<b-col class="align-self-center">
			<h1 class="nos-header text-left">nós</h1>

			<div class="nos-border"></div>

			<p class="nos-text text-left">Nos descrevemos como seres em aprendizado, abertos a buscar novos meios de tornar realidade aquilo que mais acreditamos: cativar as pessoas, de maneira humana e sincera. Para isso, criamos nossos projetos baseados em estratégias, sempre com muito afeto, responsabilidade e criatividade.</p>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css" scoped>
	.nos {
		padding: 0px;
		color: #000;
	}

	.nos-header {
		font-weight: bold;
		padding-bottom: 16px;
		font-size: 4vw;
	}

	.nos-border {
		background: #ffcd00;
		width: 100%;
		height: 4px;
	}

	.nos-text {
		width: 80%;
		font-size: 14px;
		padding-top: 24px;
	}

	@media (max-width: 768px) {
		.nos-header, .nos-text {
			padding: 16px 120px;
			width: 100%;
		}
	}

	@media (max-width: 576px) {
		.nos-header, .nos-text {
			padding: 16px 0px;
			width: 100%;
		}

		.nos-header {
			font-size: 8vw;
		}
	}
</style>