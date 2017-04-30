<?php

class ICUEActivitiesAPI {
  var $end_point = "https://eactivities.union.ic.ac.uk/API";

  function __construct($csp_code, $api_key, $year) {
    $this->csp_code = $csp_code;
    $opts = array(
      'http'=>array(
        'method'=>"GET",
        'header'=>"X-API-Key: $api_key\r\n"
      )
    );
    $this->context = stream_context_create($opts);
    $this->year = $year;
  }

  function __get($path) {
    return file_get_contents("$this->end_point/$path", false, $this->context);
  }

  function list_csp() {
    return $this->__get("CSP");
  }
  function csp_details() {
    return $this->__get("CSP/$this->csp_code");
  }

  function list_all_products() {
    return $this->__get("CSP/$this->csp_code/Products");
  }
  function product_details($id) {
    return $this->__get("CSP/$this->csp_code/Products/$id");
  }
  function product_sales($id) {
    return $this->__get("CSP/$this->csp_code/Products/$id/Sales");
  }

  function profile_entry() {
    return $this->__get("CSP/$this->csp_code/ProfileEntry");
  }

  function list_purchase_orders() {
    return $this->__get("CSP/$this->csp_code/PurchaseOrders");
  }
  function purchase_order_details($id) {
    return $this->__get("CSP/$this->csp_code/PurchaseOrders/$id");
  }

  function list_committee() {
    return $this->__get("CSP/$this->csp_code/Reports/Committee?year=$this->year");
  }
  function list_members() {
    return $this->__get("CSP/$this->csp_code/Reports/Members?year=$this->year");
  }
  function list_online_sales() {
    return $this->__get("CSP/$this->csp_code/Reports/OnlineSales?year=$this->year");
  }
  function list_products() {
    return $this->__get("CSP/$this->csp_code/Reports/Products?year=$this->year");
  }
  function list_transaction_lines() {
    return $this->__get("CSP/$this->csp_code/Reports/TransactionLines?year=$this->year");
  }

  function list_signups() {
    return $this->__get("CSP/$this->csp_code/Signups");
  }
  function signup_details($id) {
    return $this->__get("CSP/$this->csp_code/Signups/$id");
  }

  function list_whatson() {
    return $this->__get("CSP/$this->csp_code/WhatsOn");
  }
  function whatson_details($id) {
    return $this->__get("CSP/$this->csp_code/WhatsOn/$id");
  }

  function list_years() {
    return $this->__get("CSP/$this->csp_code/Years");
  }
}
?>
