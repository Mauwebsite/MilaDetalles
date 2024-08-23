function goBack() {
    window.history.back();
}

function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
}
function downloadImage() {
    const link = document.createElement('a');
    link.href = 'qr_image.png';
    link.download = 'qr_image.png';
    link.click();
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Mila Detalles',
            text: '¡Echa un vistazo a esta página!',
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