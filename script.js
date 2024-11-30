function generarQR() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;

    // Verificar que todos los campos esten completos
    if (!nombre || !telefono || !email || !direccion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // formato vCard para el QR
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${nombre}\nTEL:${telefono}\nEMAIL:${email}\nADR:${direccion}\nEND:VCARD`;

    // Limpiar el canvas para generar el QR
    const qrCanvas = document.getElementById("qr-code");
    qrCanvas.getContext("2d").clearRect(0, 0, qrCanvas.width, qrCanvas.height);

    // Generar el codigo QR
    const qr = new QRious({
        element: qrCanvas,
        value: vCard,
        size: 200,
    });
}