<script>
  // Certifique-se que isso está no final do body
  document.addEventListener("DOMContentLoaded", function () {
    const btnReveal = document.getElementById("reveal");
    const btnRevealTrue = document.getElementById("reveal-true");
    const fakeMessage = document.getElementById("fake-message");
    const realMessage = document.getElementById("real-message");

    // Ao clicar no primeiro botão, revela a mensagem de brincadeira
    btnReveal.addEventListener("click", function () {
      fakeMessage.classList.remove("hidden");
      btnReveal.style.display = "none"; // esconde o primeiro botão
    });

    // Ao clicar no botão dentro da trollagem, revela a verdadeira mensagem
    btnRevealTrue.addEventListener("click", function () {
      realMessage.classList.remove("hidden");
      btnRevealTrue.style.display = "none"; // esconde o segundo botão
    });
  });
</script>