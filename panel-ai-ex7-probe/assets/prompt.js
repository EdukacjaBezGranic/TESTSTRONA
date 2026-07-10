function copyPrompt() {
  const prompt = document.getElementById('promptText');
  const status = document.getElementById('status');
  navigator.clipboard.writeText(prompt.innerText).then(
    () => { status.textContent = 'Prompt skopiowany do schowka.'; },
    () => { status.textContent = 'Nie udało się skopiować automatycznie. Zaznacz tekst ręcznie.'; }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('[data-copy-prompt]')?.addEventListener('click', copyPrompt);
});
