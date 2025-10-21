function questionPromptFunction() {
  showCustomPrompt().then(result => {
    if (!result) {
      showCustomAlert('Вы не ответили на вопрос!', false, () => questionPromptFunction(), false);
      return;
    }

    const normalized = result.trim().toLowerCase();
    if (normalized === 'да') {
      showCustomAlert('Поздравляем! Вы не шароёб!', true);
    } else if (normalized === 'нет') {
      showCustomAlert('Поздравляем! Вы шароёб!', true);
    } else {
      showCustomAlert('Вы не ответили на вопрос!', false, () => questionPromptFunction(), false);
    }
  });
}

function showCustomPrompt() {
  return new Promise(resolve => {
    const overlay = document.getElementById('customPrompt');
    const box = document.getElementById('promptBox');
    const input = document.getElementById('promptInput');

    overlay.style.display = 'flex';
    setTimeout(() => {
      box.style.opacity = '1';
      box.style.transform = 'scale(1)';
      input.value = '';
      input.focus();
    }, 10);

    const ok = document.getElementById('okBtn');
    const cancel = document.getElementById('cancelBtn');

    function cleanup(val) {
      box.style.opacity = '0';
      box.style.transform = 'scale(0.5)';
      setTimeout(() => overlay.style.display = 'none', 300);

      ok.removeEventListener('click', onOk);
      cancel.removeEventListener('click', onCancel);
      input.removeEventListener('keydown', onKey);
      resolve(val);
    }

    function onOk() { cleanup(input.value.trim()); }
    function onCancel() { cleanup(null); }
    function onKey(e) {
      if (e.key === 'Enter') onOk();
      if (e.key === 'Escape') onCancel();
    }

    ok.addEventListener('click', onOk);
    cancel.addEventListener('click', onCancel);
    input.addEventListener('keydown', onKey);
  });
}

function showCustomAlert(message, showFarmer = false, callback = null, animated = true) {
  const overlay = document.getElementById('customAlert');
  const box = document.getElementById('alertBox');
  const msg = document.getElementById('alertMessage');
  const okBtn = document.getElementById('alertOk');
  const appleWrapper = document.getElementById('alertAppleWrapper');

  msg.textContent = message;
  appleWrapper.style.display = showFarmer ? 'block' : 'none';
  overlay.style.display = 'flex';

  if (animated) {
    setTimeout(() => { box.style.opacity = '1'; box.style.transform = 'scale(1)'; }, 10);
    box.style.transition = 'all 0.3s ease';
  } else {
    box.style.opacity = '1';
    box.style.transform = 'scale(1)';
    box.style.transition = 'none';
  }

  function closeAlert() {
    if (animated) {
      box.style.opacity = '0';
      box.style.transform = 'scale(0.5)';
      setTimeout(() => overlay.style.display = 'none', 300);
    } else {
      overlay.style.display = 'none';
    }
    okBtn.removeEventListener('click', closeAlert);
    if (callback) callback();
  }

  okBtn.addEventListener('click', closeAlert);
}

function showMiniAlert(text, callback) {
  const mini = document.getElementById('miniAlert');
  const msg = document.getElementById('miniAlertText');
  const btn = document.getElementById('miniAlertOk');
  msg.textContent = text;
  mini.style.display = 'block';
  btn.onclick = () => {
    mini.style.display = 'none';
    if (callback) callback();
  };
}