<template>
	<b-row id="oqfazemos" class="oqfazemos">
		<b-col class="col-12">
			<h1 class="oqf-header text-left">o que<br> fazemos:</h1>
		</b-col>
		<b-col v-for="(servico, index) in servicos" :key="'fazemos-'+index" class="col-6 col-md-4 servico">
			<h4 class="text-left servico-title">{{servico.title}}</h4>
			<div class="servico-border" :style="{background: servico.color, width: '100%', height: '4px'}"></div>
			<div class="text-left servico-text">{{servico.text}}</div>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				servicos: [
					{
						title: 'marketing digital', 
						text: 'Domínio de estratégia de social media, e-mail marketing, links patrocinados, SEO, analytics, entre outros para definir o posicionamento da sua marca.', 
						color: '#0040a6'
					},
					{
						title: 'site', 
						text: 'Além de sites completos, desenvolvemos sites rápidos e temporários que podem impulsionar o alcance do seu produto.', 
						color: '#0040a6'
					},
					{
						title: 'mobile', 
						text: 'As plataformas portáteis de comunicação também estão enquadradas em estratégias para fortalecer os vínculos entre sua empresa e seu cliente.', 
						color: '#0040a6'
					},
					{
						title: 'branding', 
						text: 'O Branding é uma ferramenta do marketing que além de credibilidade passa toda a missão e visão de uma empresa ou produto.', 
						color: '#ffcd00'
					},
					{
						title: 'campanhas integradas', 
						text: 'Desenvolvemos ações que ultrapassam o mundo digital, mas sem perder o veículo com a rede, possibilitado pelo uso de conteúdo multimídia integrado.', 
						color: '#3f3981'
					},
					{
						title: 'mega apresentações', 
						text: 'Criamos apresentações que prendem a atenção do seu público, desde a concepção do roteiro e design até a postura na apresentação.', 
						color: '#00f8c7'
					}
				]
			}
		}
	}
</script>

<style type="text/css">
	.oqf-header {
		font-weight: bold;
		font-size: 5vw;
		color: #000;
	}

	.oqfazemos {
		padding: 0px 120px 64px 120px;
		margin-top: -68px;
	}

	.servico {
		padding-top: 64px;
	}

	.servico-title {
		font-weight: 700;
		font-size: 1.5vw;
		color: #000;
	}

	.servico-border {
	}

	.servico-text {
		width: 80%;
		font-weight: 500;
		font-size: 1.1vw;
		padding-top: 8px;
		color: #000;
	}

	@media (max-width: 576px) {
		.oqfazemos {
			padding: 0px;
			margin-top: 0px;
		}

		.oqf-header {
			font-size: 8vw;
		}

		.servico-title {
			font-size: 3vw;
		}

		.servico-text {
			font-size: 2.8vw;
		}
	}
</style>