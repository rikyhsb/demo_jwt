<?php 

require 'jwt.class.php';

if (isset($_GET['act'])) {
	$jwt = new Jwt;
	if ($_GET['act'] == 'generate') {
		$username = $_POST['username'];
		$jwt->generate_jwt($username);
	} else if ($_GET['act'] == 'check') {
		$payload = $_POST['payload'];
		$jwt->check_jwt($payload);
	} else {
		echo "404 Not Found";
	}
} else {
	echo "404 Not Found";
}

?>