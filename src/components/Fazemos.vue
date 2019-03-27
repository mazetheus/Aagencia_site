<template>
	<b-row id="oqfazemos" class="oqfazemos">
		<b-col class="col-12">
			<h1 class="oqf-header text-left">o que<br> fazemos:</h1>
		</b-col>

		<b-col v-for="(servico, index) in servicos" :key="'fazemos-'+index" class="col-6 col-md-4 servico servico-desktop">
			<h4 class="text-left servico-title">{{servico.title}}</h4>
			<div class="servico-border" :style="{background: servico.color, width: '100%', height: '4px'}"></div>
			<div class="text-left servico-text">{{servico.text}}</div>
		</b-col>

		<b-card class="servico-mobile">
			<div class="card-header align-sef-center">
				<a @click="proxServ()"><font-awesome-icon class="icon-right" icon="arrow-circle-left"></font-awesome-icon></a>
				<h4 class="servico-title" :style="{color:servicos[opcao].color}">{{servicos[opcao].title}}</h4>
				<a @click="antServ()"><font-awesome-icon class="icon-left" icon="arrow-circle-right"></font-awesome-icon></a>
			</div>
				<div class="text-left servico-text">{{servicos[opcao].text}}</div>
		</b-card>

	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				servicos: [
					{
						title: 'social media', 
						text: 'Para construir a presença digital da sua empresa e aumentar as vendas, é preciso conteúdo. Desenvolvemos todo o planejamento estratégico para suas redes sociais, desde a concepção até o monitoramento dos resultados.', 
						color: '#0040a6'
					},
					{
						title: 'gestão de mídia', 
						text: 'Utilizamos inteligência de conteúdo para desenvolver campanhas e anúncios pagos nas plataformas digitais, direcionados para o seu público de forma estratégica.', 
						color: '#ffcd00'
					},
					{
						title: 'branding', 
						text: 'Cuidamos de todo o processo de criação e fortalecimento de marca. Do nome à identidade visual até a maneira de se comunicar nas redes sociais, no site da empresa e no ponto de venda.', 
						color: '#0040a6'
					},
					{
						title: 'campanhas integradas', 
						text: 'O posicionamento desejado se constrói através de estratégias que chamem atenção do público e transmitam a essência da sua empresa. Criamos campanhas integradas entre o online e offline.', 
						color: '#ffcd00'
					},
					{
						title: 'construção de sites', 
						text: 'Com um site institucional, seus clientes podem acessar as informações da sua empresa com segurança, credibilidade e facilidade. Desenvolvemos sites responsivos e plataformas de vendas online, sejam elas temporárias ou não.', 
						color: '#0040a6'
					},
					{
						title: 'identidades visuais', 
						text: 'Desenvolvemos identidades sólidas para a sua marca a partir de pesquisas e ideias que transmitam a visão e os valores do seu negócio.', 
						color: '#ffcd00'
					}
				],
				opcao: 0,
			}
		},
		methods: {
			proxServ() {
				this.opcao += 1;
				if (this.opcao >= this.servicos.length) {
					this.opcao = 0;
				}
			},
			antServ() {
				this.opcao -= 1;
				if (this.opcao < 0) {
					this.opcao = this.servicos.length - 1;
				}
			},
		}
	}
</script>

<style type="text/css">
	.servico-mobile{
		display: none;
	}

	.icon-right{
		font-size: 15px;
		position: relative;
		right: 40px;
		color: #3f3981;
	}
	.icon-left{
		font-size: 15px;
		position: relative;
		left: 40px;
		color: #3f3981;
	}
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
		font-size: 25px;
		color: #000;
		position: center;
	}


	.servico-text {
		width: 80%;
		font-weight: 500;
		font-size: 1.1vw;
		padding-top: 8px;
		padding-bottom: 10px;
		color: #000;
	}

	@media only screen and (max-width: 768px) {
		.servico-desktop {
			display: none;
		}
		.servico-mobile{
			display: block;
		}
		.servicos{
			padding: 5px;
			padding-bottom: 20px;
		}
		.servicos-header{
			font-size: 30px;
			padding-bottom: 0px;
		}
		.servico-title{
			font-size: 20px;
			padding: 0px 0px;
			display: inline;
		}

		.servico-text{
			padding-top: 5px;
			margin: 20px;
			padding-left: 20px;
			padding-left: 40px;
		}

		.oqfazemos {
			display:block;
			padding: 0px;
			margin-top: -20px;
			height: 350px;
		}

		.oqf-header {
			font-size: 8vw;
		}

		.servico-text {
			font-size: 2.8vw;
		}
	}
</style>