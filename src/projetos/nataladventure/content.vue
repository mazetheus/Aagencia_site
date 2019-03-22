<template>
	<b-row class="content-inner">
		<b-col :class="'images ' + media.class" v-for="media in medias">
			<b-img v-if="media.src" :src="require('./'+media.src)" fluid></b-img>
			<div v-if="media.content" v-html="media.content"></div>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	import '../media.css'
	export default {
		name: 'Content',
		data() {
			return {
				medias: [
					{
						src: "img1.jpg", 
						class: 'col-12'
					},
					{
						content: "<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/286050585?byline=0&portrait=0' style='position:absolute;top:0;left:0;width:100%;height:100%;' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src='https://player.vimeo.com/api/player.js'><\/script>",
						class: "col-12"
					}
				]
			}
		}
	}
</script>