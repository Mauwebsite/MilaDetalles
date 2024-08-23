function goBack() {
    window.history.back();
}

function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
}
function downloadImage() {
    const link = document.createElement('a');
    link.href = 'images/MilaDetalles-qr.png';
    link.download = 'images/MilaDetalles-qr.png';
    link.click();
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Mila Detalles',
            text: '¡Dale un vistazo a mi sitio web ^^',
            url: window.location.href
        }).then(() => {
            console.log('¡Página compartida con éxito!');
        }).catch((error) => {
            console.error('Error al compartir:', error);
        });
    } else {
        alert('La API de Web Share no es compatible con este navegador.');
    }
}