// ==================== VALIDACIÓN DE FORMULARIO ====================
function validateForm(event) {
  const form = event.target;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const privacy = document.getElementById('privacy').checked;

  if (!name || !email || !message) {
    event.preventDefault();
    showMessage('Por favor, completa todos los campos requeridos', 'error');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    event.preventDefault();
    showMessage('Por favor, ingresa un email válido', 'error');
    return false;
  }

  if (!privacy) {
    event.preventDefault();
    showMessage('Debes aceptar la Política de Privacidad', 'error');
    return false;
  }

  // Si es un formulario de Netlify, lo dejamos pasar
  // Si no, mostramos mensaje de éxito
  if (!form.hasAttribute('netlify')) {
    showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', 'success');
  }

  return true;
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

  // ==================== ANIMACIÓN BOTÓN WHATSAPP ====================
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    // Mostrar/ocultar botón al scrollear
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      
      // Ocultar si estás en el top, mostrar después de scrollear 300px
      if (scrollTop > 300) {
        whatsappBtn.classList.remove('hidden');
        whatsappBtn.classList.add('pulse');
      } else {
        whatsappBtn.classList.add('hidden');
        whatsappBtn.classList.remove('pulse');
      }
      
      // Mover el botón dinámicamente conforme scrolleas
      const moveAmount = scrollTop * 0.05; // Parallax suave
      whatsappBtn.style.transform = `translateY(${moveAmount}px)`;
    });
    
    // Ocultar botón al cargar si estamos en el top
    if (window.scrollY <= 300) {
      whatsappBtn.classList.add('hidden');
    }
  }
});
