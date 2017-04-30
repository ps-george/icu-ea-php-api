<?php
require_once("icu_ea_api.php");
$csp_code = csp_code;
$api_key = 'api_key';
$year = 'year';
$api = new ICUEActivitiesAPI($csp_code, $api_key, $year);
?>
