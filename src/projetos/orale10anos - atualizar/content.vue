<template>
	<b-row class="contet">
		<b-col :class="'images ' + image.class" v-for="image in images">
			<b-img :src="require('./'+image.src)" fluid></b-img>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		name: 'Content',
		data() {
			return {
				images: [
					{src: "img1.jpg", class: 'col-12'},
					{src: "img2.png", class: 'col-12'}
				]
			}
		}
	}
</script>

<style type="text/css">
	.images {
		padding: 16px;
	}
</style>