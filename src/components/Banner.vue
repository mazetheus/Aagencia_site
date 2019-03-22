<template>
	<div class="banner">
	    <div>
				<b-carousel
					id="carousel-fade"
					style="text-shadow: 0px 0px 2px #000"
					fade
					controls
					img-width="100%"
					img-height="auto"
				>
					<b-carousel-slide :img-src="require('../assets/bannero1.png')" />
					<b-carousel-slide :img-src="require('../assets/bannero2.png')" />
				</b-carousel>
			</div>
	</div>
</template>

<style type="text/css">
	.topo-img {
		padding: 0px;
	}
</style>