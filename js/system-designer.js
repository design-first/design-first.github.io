jQuery(document).ready(function ($) {
	$('#designer-web').on('click', function () {
		window.open('./designer');
	})

	$('#designer-mac-app-store').on('click', function () {
		window.open('https://itunes.apple.com/us/app/system-designer/id1102494854?l=fr&ls=1&mt=12');
	})

	$('#designer-ios-app-store').on('click', function () {
		window.open('https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1132983280&mt=8');
	})

	$('#designer-google-play-store').on('click', function () {
		window.open('https://play.google.com/store/apps/details?id=com.ecarriou.systemdesignerios');
	})

});