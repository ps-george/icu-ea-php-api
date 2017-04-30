// Function to get url variables
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var id = getUrlVars().id;

fetch('/api/product_sales.php?id='+id)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    $(document).ready(function() {
    $('#example').DataTable( {
        data: responseJson,
        columns: [
            { "data": "Customer.FirstName", "title": "First Name" },
            { "data": "Customer.Surname", "title": "Surname" },
            { "data": "OrderNumber", "title": "Order Number" },
            { "data": "Price", "title": "Price Paid " },
            { "data": "Customer.Email", "title": "Email" }
        ]
    } );
  } );
});
