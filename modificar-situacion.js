function modificarSituacion() {
    // obtener la lista de facturas desde el servidor utilizando una solicitud AJAX
    $.ajax({
        url: '/myapp/facturas',
        method: 'GET',
        success: function(data) {
            // iterar sobre la lista de facturas y actualizar el valor de la propiedad "situacion"
            for (var i = 0; i < data.length; i++) {
                data[i].situacion = 'CAN';
            }
            // enviar una solicitud AJAX al servidor para actualizar las facturas en la base de datos
            $.ajax({
                url: '/myapp/facturas',
                method: 'PUT',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function(response) {
                    console.log('Facturas actualizadas exitosamente');
                },
                error: function(xhr, status, error) {
                    console.log('Error al actualizar las facturas: '
  
