<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="../css/main.css">
		<title>Sing-up</title>
	</head>
	<body>
		<nav>
			<ul>
				<li><a href="../index.html">Acasa</a></li>
			</ul>
		</nav>
		<h1>Date de inregistrare:</h1>
		
		<form action="template/contact.html" method="GET">
			<table>
				<tr>
					<td>Nume (*)</td>
					<td><input  class="nou" type="text" name="tex1" id="tex1" maxlength="15"></td>
				</tr>
				<tr>
					<td>Prenume</td>
					<td><input  type="text" name="text2" id="tex2" maxlength="15"></td>
				</tr>
				<tr>
					<td>Tel.</td>
					<td><input  type="text" name="numar1" id="numar1" maxlength="10"></td>
				</tr>
				<tr>
					<td>E-mail(*)</td>
					<td><input  class="nou" type="email" name="email1" id="email1" required=""></td>
				</tr>
				<tr>
					<td style="padding: 9px ;"><input type="submit" name="submit" value="Trimite" id="trimite1" ></td><td><button id="trimite2">Renunta</button></td>
				</tr>
			</table>
		</form>
		<br>
		<div style="color:red;" id="div111">Datele cu (*) Sunt obligatorii</div>
		<br>
		<section>
			<table>
			<h2>Curs Valutar:</h2>
				<tr><td>Suma:</td></tr>
					<tr><td><input type="text" id="Suma1"></td>
						<td>Alege: <select id="Select1">
							<option value="Euro">EUR</option>
							<option value="Dolar">USD</option>
							<option value="Yen"> YEN</option>
							<option value="Lira">GBP</option>
				</select>
			</td>
		</tr>
	<tr>
		<td colspan="3" align="center" style="padding: 20px;"><button id="Trimite3">Schimba in Lei</button></td>
	</tr>
</table>

<dir id="Div2"></dir>
		</section>
		

</body>
<script  src="../js/JsCore.js"></script>
</html>
