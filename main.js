onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
        const text = "Bagaikan bunga yang mekar dengan keindahan sempurna, kau hadir dengan ketulusan yang tak tergantikan. Seperti kelopak yang selalu terbuka, kau membentangkan hatimu untuk peduli pada semua orang, menjadi tempat berteduh bagi jiwa-jiwa yang lelah. Kebaikanmu mekar setiap hari, memberikan kehangatan tanpa pamrih, lebih peduli pada orang lain daripada dirimu sendiri. Kau adalah wanita yang tak pernah layu, tetap harum dan penuh cinta, selamanya menginspirasi.";
        const speed = 60; // kecepatan ketikan dalam milidetik
        let i = 0;
      
        function typeWriter() {
          if (i < text.length) {
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
      
        typeWriter();
      });

      