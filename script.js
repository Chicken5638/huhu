document.addEventListener('DOMContentLoaded', function () {
    var clickText = document.getElementById('click-text');
    var fileInput = document.getElementById('fileInput');
    var img = document.getElementById('upload-image');
    img.style.width = '180px';

    fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            clickText.style.display = 'none';

            reader.onload = function (e) {
                img.src = e.target.result;
            };

            reader.readAsDataURL(fileInput.files[0]);
            init();
        }
    });
});
