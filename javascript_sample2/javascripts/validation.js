document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const emailConfirmInput = document.getElementById('email_confirm');
// Eメール(確認)フォームのinputイベントを監視
emailConfirmInput.addEventListener('input', function () {
  validateEmailMatch(); // Eメールが一致するかどうかの検証を行う関数を呼び出す
});
});

function validateEmailMatch() {
const emailInput = document.getElementById('email');
const emailConfirmInput = document.getElementById('email_confirm');
const errorMessage = document.getElementById('error-message');

if (emailInput.value !== emailConfirmInput.value) {
  if (!errorMessage) {
    const element = document.createElement('p');
    const message = document.createTextNode("Eメールが一致しません");
    element.appendChild(message);
    element.id = 'error-message';
    element.style.color = "#d14539";

    // エラーメッセージを内容フォームの直前に挿入
    const emailConfirmRow = document.querySelector('.contact_content');
    emailConfirmRow.parentNode.insertBefore(element, emailConfirmRow);
    element.classList.add("alert");
    emailConfirmInput.style.backgroundColor = "rgba(230,169,171,0.5)";

   }
  } else {
    form.submit(); 
  }
};