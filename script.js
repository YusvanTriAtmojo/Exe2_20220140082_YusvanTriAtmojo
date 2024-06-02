function showAlert() {
    alert(Date(), tampil(), show())
    Date()

    let tanggal = new Date();
    document.getElementById("hasil").innerHTML = tanggal;

    function tampil(){
        alert("Pikaaaaa Chuuuu ⚡️⚡️⚡️")
    }

    function show() {
        alert("Let's Join Us !!!")
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.content-section').forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        } else {
            section.classList.add('active');
        }
    });

    document.querySelectorAll('#sidebar ul li').forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            document.querySelectorAll('#sidebar ul li').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');
            
            let contentId = this.id.replace('menu-', 'content-');
            document.getElementById(contentId).classList.add('active');
            document.getElementById(contentId).style.display = 'block';
        });
    });
});
