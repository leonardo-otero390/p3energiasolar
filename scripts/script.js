function sendMessage() {
    const phoneNumber = 556781072168;
    const name = document.querySelector("input").value;

    const message = name ? `Olá,meu nome é ${name}, gostaria de saber mais sobre energia solar!` : `Olá, gostaria de saber mais sobre energia solar!`;
    let URI = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(URI)
}