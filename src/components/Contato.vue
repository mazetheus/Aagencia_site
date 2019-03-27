<template>
	<b-row id="contato" class="contato">
		<b-col class="col-12 col-md-6">
			<h1 class="contato-header text-left">o prazer é<br> todo nosso.</h1>
			<div class="border-space"></div>
			<div class="contato-border"></div>
			<div class="border-space"></div>
			<div class="contato-text-wrap w-75">
				<p class="text-left contato-text" v-for="(info,index) in infos" :key="index">{{info}}</p>
				<p class="text-left contato-text"><a href="https://instagram.com/aagenciadigital" target="_blank"><font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']"></font-awesome-icon></a> &nbsp;&nbsp; <a href="https://api.whatsapp.com/send?phone=558433018085" target="_blank"><font-awesome-icon class="fa-icon whats" :icon="['fab', 'whatsapp']"></font-awesome-icon></a></p>
			</div>
		</b-col>
		<b-col class="aux">
			<div class="contato-mapa">
          <div style="width: 100%"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.275132692238!2d-35.22081748565316!3d-5.816764858980415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255593ea1d46d%3A0x95fe3338b7260095!2sAAG%C3%8ANCIA+DIGITAL!5e0!3m2!1spt-BR!2sbr!4v1544807315379" class="mapa" frameborder="0" style="border:0" allowfullscreen></iframe></div><br />
      </div>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				infos: [
					'Av. Amintas Barros, 2537 - Lagoa Nova, Natal - RN, 59062-350',
					'+55 (84) 3301-8085',
					'atendimento@aagenciadigital.com'
				]
			}
		}
	}
</script>

<style type="text/css">
	.contato {
		padding-top: 64px;
		padding-bottom: 64px;
		color: #000;
	}
	.mapa{
		width: 100%;
		height: 500px;
	}
	.contato-border {
		width: 100%;
		height: 4px;
		background: #ffcd00;
	}

	.contato-header {
		font-weight: bold;
		font-size: 4vw;
	}

	.contato-text {
		padding-top: 16px;
	}

	.contato-header, .contato-text {
		padding-left: 165px;
	}

	.contato-icon{
		display: inline;
		padding-left: 20px !important;
	}

	.contato-mapa {
		padding-right: 136px;
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
	}

	.fa-icon {
		font-size: 18px;
	}

	.border-space {
		padding: 8px 0px;
	}

	.espaco{
		padding: 0px 10px;
	}

	@media (max-width: 768px) {

		.mapa{
			width: 90%;
			height: 200px;
		}
		.contato-header {
			font-size: 8vw;
		}
		.contato-header, .contato-text {
			padding: 0px;
		}

		.contato-mapa {
			padding-right: 0px;
		}
		.contato {
			padding-bottom: 10px;
		}
	}
</style>