// ==================== VALIDACIÓN DE FORMULARIO ====================
function validateForm(event) {
  event.preventDefault(); // Prevenir envío inmediato

  const form = event.target;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const privacy = document.getElementById('privacy').checked;

  // Verificar honeypots
  const honeypot1 = document.querySelector('input[name="_honeypot1"]').value;
  const honeypot2 = document.querySelector('input[name="_honeypot2"]').value;
  const honeypot3 = document.querySelector('textarea[name="_honeypot3"]').value;
  if (honeypot1 || honeypot2 || honeypot3) {
    showMessage('Envío bloqueado por sospecha de spam.', 'error');
    return false;
  }

  if (!name || !email || !message) {
    showMessage('Por favor, completa todos los campos requeridos', 'error');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage('Por favor, ingresa un email válido', 'error');
    return false;
  }

  if (!privacy) {
    showMessage('Debes aceptar la Política de Privacidad', 'error');
    return false;
  }

  // Rate limiting: máximo 1 envío por hora por navegador
  const lastSubmit = localStorage.getItem('lastFormSubmit');
  const now = Date.now();
  if (lastSubmit && (now - lastSubmit) < 3600000) { // 1 hora
    showMessage('Solo puedes enviar un mensaje por hora. Inténtalo más tarde.', 'error');
    return false;
  }

  // Ejecutar reCAPTCHA v3
  grecaptcha.ready(function() {
    grecaptcha.execute('TU_CLAVE_DE_SITIO_AQUI', {action: 'submit'}).then(function(token) {
      // Agregar token al form
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'g-recaptcha-response';
      tokenInput.value = token;
      form.appendChild(tokenInput);

      // Guardar timestamp
      localStorage.setItem('lastFormSubmit', now);

      // Mostrar mensaje y enviar
      showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', 'success');
      form.submit();
    });
  });

  return false; // No enviar aún
}

function showMessage(message, type) {
  const messageDiv = document.getElementById('form-message');
  if (messageDiv) {
    messageDiv.textContent = message;
    messageDiv.className = 'form-message ' + type;
    messageDiv.style.display = 'block';
  }
}

// ==================== BANNER DE COOKIES ====================
function initCookieConsent() {
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    showCookieBanner();
  }
}

function showCookieBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-content">
      <div class="cookie-text">
        <p><strong>🍪 Aviso de Cookies</strong></p>
        <p>Utilizamos cookies técnicas para mejorar tu experiencia. Al continuar navegando, aceptas nuestra <a href="privacidad.html" target="_blank">Política de Privacidad</a>.</p>
      </div>
      <div class="cookie-buttons">
        <button id="cookie-accept" class="btn-accept">Aceptar</button>
        <button id="cookie-reject" class="btn-reject">Rechazar</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').remove();
  });
  
  document.getElementById('cookie-reject').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookie-banner').remove();
  });
}

// ==================== MENÚ MÓVIL ====================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar banner de cookies
  initCookieConsent();
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Establecer enlace activo
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
