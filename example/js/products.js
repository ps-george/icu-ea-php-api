fetch('/api/products.php')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    $(document).ready(function() {
    $('#example').DataTable( {
      initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.header()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        },
        data: responseJson,
        columns: [
            { "data": "ID", "title": "Product ID"},
            { "data": "Name", "title": "Name" },
            //{ "data": "ProductLines", "title": "No. Lines"},
            //{ "data": "No. Sales"},
            { "data": "Active", "title": "Active"},
            { "data": "SellingDateStart", "title": "Selling Start Date" },
            { "data": "SellingDateEnd", "title": "Selling End Date" }
        ],
        "columnDefs": [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    return `<a href=\"/product_sales.html?id=${data}\">${data}</a>`;
                },
                "targets": 0
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row) {
                  //console.log(row);
                  return `<a href=\"${row.URL}\">${data}</a>`;
                },
                "targets": 1
            },
            /* Trying to include no. product lines
            {
                "render": function ( data, type, row ) {
                    return data.length;
                },
                "targets": [2]
            },
            Trying to also include no. sold
            {
                "render": function ( data, type, row , full) {
                    var r = 0;
                    console.log(full.fields.ID);
                    var id = full.fields.ID;
                    fetch(`/api/product.php?id=${id}`)
                      .then((response) => response.json())
                      .then((responseJson) => {
                        r = responseJson.length;
                      });
                    return r;
                },
                "targets": [3]
            },*/
            {
                "render": function ( data, type, row ) {
                    //var d = new Date(data);
                    //return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
                    return data.split(' ')[0];
                },
                "targets": [-1,-2]
            }
        ]
    } );
  } );
});
