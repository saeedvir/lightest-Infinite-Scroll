<!DOCTYPE html>
<html>
<head>
	<title>Gowebdev.ir | infinite scroll</title>
<style type="text/css">
	#loadingbox{
		width: 220px;
		height: 20px;
		margin: auto;
	}
	#showloading{
		width: 220px;
		height: 20px;
		margin: auto;
	}
</style>
<!-- Load JavaScript Lib -->
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/infscroll.min.js"></script>

</head>
<body>
<div id="maincnt">
<!-- Load New CNT in  <div class="divbody"> ... New CNT ... </div> -->
	<div class="divbody"> <?php include 'tmp.html';include 'tmp.html';include 'tmp.html';include 'tmp.html'; ?> </div>
<!-- Show Loading... -->
	<div id="loadingbox"><img id="showloading" src="./img/loading.gif"></div>
</div>
</body>
<script type="text/javascript"></script>
</html>

