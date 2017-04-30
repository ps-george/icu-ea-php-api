fetch('/api/members.php')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    var dataSet = responseJson;
    $(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { "data": "CID" },
            { "data": "Login" },
            { "data": "FirstName" },
            { "data": "Surname" },
            { "data": "Email" },
            { "data": "MemberType"}
        ],
        "pageLength":25,
        "dom": 'lfrtip'
    } );
  } );
});
