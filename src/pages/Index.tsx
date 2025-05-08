
import React from 'react';

const Index = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-auto bg-gradient-to-b from-blue-900 to-black p-4">
      <iframe 
        title="Gerador de Senhas em HTML puro" 
        className="w-full h-full max-w-4xl rounded-lg shadow-2xl" 
        srcDoc={`
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gerador de Senhas</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Inter', sans-serif;
              }
              
              body {
                background: linear-gradient(135deg, #000428, #004e92);
                color: white;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1.5rem;
              }
              
              .container {
                width: 100%;
                max-width: 500px;
              }
              
              .password-generator {
                background: rgba(13, 18, 30, 0.8);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              
              .header {
                padding: 2rem;
                text-align: center;
                background: rgba(255, 255, 255, 0.05);
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
              }
              
              .lock-icon {
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                width: 64px;
                height: 64px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
              }
              
              .title {
                font-size: 1.75rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                background: linear-gradient(to right, #fff, #93c5fd);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              
              .description {
                color: #93c5fd;
                font-size: 0.95rem;
                opacity: 0.9;
              }
              
              .password-display {
                padding: 1.5rem;
                position: relative;
              }
              
              .password-input-container {
                position: relative;
                background: rgba(15, 23, 42, 0.6);
                border-radius: 8px;
                border: 1px solid rgba(59, 130, 246, 0.3);
                transition: all 0.3s ease;
                overflow: hidden;
              }
              
              .password-input-container:focus-within {
                border-color: rgba(59, 130, 246, 0.7);
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
              }
              
              .password-input {
                width: 100%;
                background: transparent;
                padding: 1rem 3rem 1rem 1rem;
                border: none;
                color: white;
                font-family: 'Courier New', monospace;
                font-size: 1.3rem;
                outline: none;
                letter-spacing: 1px;
              }
              
              .action-buttons {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 0.5rem;
              }
              
              .copy-btn, .refresh-btn {
                background: transparent;
                border: none;
                color: #93c5fd;
                cursor: pointer;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s;
              }
              
              .copy-btn:hover, .refresh-btn:hover {
                background: rgba(59, 130, 246, 0.2);
                color: white;
              }
              
              .options {
                padding: 1.5rem;
                background: rgba(15, 23, 42, 0.4);
                border-top: 1px solid rgba(59, 130, 246, 0.1);
              }
              
              .options-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
                color: #e0f2fe;
              }
              
              .option-group {
                margin-bottom: 1.5rem;
              }
              
              .option-label {
                color: #bfdbfe;
                display: block;
                margin-bottom: 0.75rem;
                font-weight: 500;
              }
              
              .length-display {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.75rem;
              }
              
              .length-badge {
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.875rem;
                font-weight: 600;
                min-width: 3rem;
                text-align: center;
              }
              
              .length-slider-container {
                position: relative;
                width: 100%;
                height: 10px;
                margin: 1rem 0;
              }
              
              .length-slider {
                -webkit-appearance: none;
                appearance: none;
                width: 100%;
                height: 6px;
                border-radius: 5px;
                background: rgba(59, 130, 246, 0.2);
                outline: none;
                position: absolute;
                top: 0;
              }
              
              .length-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                cursor: pointer;
                box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
              }
              
              .length-slider::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                cursor: pointer;
                border: none;
                box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
              }
              
              .length-marks {
                display: flex;
                justify-content: space-between;
                margin-top: 6px;
              }
              
              .length-mark {
                font-size: 0.75rem;
                color: #64748b;
              }
              
              .checkbox-group {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0.75rem;
              }
              
              @media (min-width: 640px) {
                .checkbox-group {
                  grid-template-columns: 1fr 1fr;
                }
              }
              
              .checkbox-label {
                display: flex;
                align-items: center;
                color: #e2e8f0;
                cursor: pointer;
                transition: all 0.3s ease;
                padding: 0.5rem;
                border-radius: 0.5rem;
              }
              
              .checkbox-label:hover {
                background: rgba(59, 130, 246, 0.1);
              }
              
              .checkbox-container {
                position: relative;
                width: 20px;
                height: 20px;
                margin-right: 10px;
              }
              
              .checkbox {
                opacity: 0;
                position: absolute;
              }
              
              .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
                width: 20px;
                border-radius: 4px;
                background: rgba(59, 130, 246, 0.2);
                border: 1px solid rgba(59, 130, 246, 0.4);
                transition: all 0.2s ease;
              }
              
              .checkbox:checked ~ .checkmark {
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                border-color: #3b82f6;
              }
              
              .checkmark:after {
                content: "";
                position: absolute;
                display: none;
                left: 7px;
                top: 3px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }
              
              .checkbox:checked ~ .checkmark:after {
                display: block;
              }
              
              .strength-meter {
                margin-top: 1rem;
              }
              
              .strength-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.75rem;
              }
              
              .strength-text {
                font-size: 0.95rem;
                font-weight: 600;
                transition: all 0.3s ease;
              }
              
              .strength-weak { color: #ef4444; }
              .strength-medium { color: #f59e0b; }
              .strength-strong { color: #10b981; }
              
              .strength-bar {
                height: 8px;
                width: 100%;
                background-color: rgba(30, 41, 59, 0.8);
                border-radius: 4px;
                overflow: hidden;
              }
              
              .strength-indicator {
                height: 100%;
                transition: all 0.5s ease;
                border-radius: 4px;
              }
              
              .weak {
                background: linear-gradient(45deg, #ef4444, #dc2626);
                width: 33.333%;
              }
              
              .medium {
                background: linear-gradient(45deg, #f59e0b, #d97706);
                width: 66.666%;
              }
              
              .strong {
                background: linear-gradient(45deg, #10b981, #059669);
                width: 100%;
              }
              
              .generate-btn {
                width: 100%;
                padding: 0.875rem 0;
                margin-top: 1.5rem;
                background: linear-gradient(45deg, #3b82f6, #2563eb);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.2);
              }
              
              .generate-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 15px 20px -3px rgba(59, 130, 246, 0.3);
              }
              
              .generate-btn:active {
                transform: translateY(0);
              }
              
              .generate-btn::after {
                content: "";
                position: absolute;
                top: -50%;
                left: -60%;
                width: 20%;
                height: 200%;
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(30deg);
                transition: all 0.6s;
              }
              
              .generate-btn:hover::after {
                left: 120%;
              }
              
              .toast {
                position: fixed;
                top: 1rem;
                right: 1rem;
                padding: 0.75rem 1.25rem;
                border-radius: 8px;
                background: rgba(15, 23, 42, 0.9);
                backdrop-filter: blur(8px);
                color: white;
                font-size: 0.875rem;
                font-weight: 500;
                z-index: 50;
                transform: translateY(-10px);
                opacity: 0;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              
              .toast.show {
                transform: translateY(0);
                opacity: 1;
              }
              
              .footer {
                text-align: center;
                padding: 1rem 0;
                margin-top: 1.5rem;
                color: #64748b;
                font-size: 0.875rem;
              }
              
              .footer span {
                color: #93c5fd;
              }
              
              .password-tips {
                font-size: 0.875rem;
                color: #94a3b8;
                margin-top: 1rem;
                padding: 0.75rem 1rem;
                background: rgba(15, 23, 42, 0.4);
                border-radius: 8px;
                border-left: 3px solid #3b82f6;
              }
              
              .hidden {
                display: none;
              }
            </style>
          </head>
          <body>
            <div id="toast" class="toast">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              <span id="toast-message">Senha copiada!</span>
            </div>
          
            <div class="container">
              <div class="password-generator">
                <!-- Header -->
                <div class="header">
                  <div class="lock-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h1 class="title">Gerador de Senhas</h1>
                  <p class="description">Crie senhas fortes e seguras com apenas um clique</p>
                </div>
                
                <!-- Password Display -->
                <div class="password-display">
                  <div class="password-input-container">
                    <input type="text" id="password" class="password-input" readonly>
                    <div class="action-buttons">
                      <button id="refreshBtn" class="refresh-btn" title="Gerar nova senha">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M23 4v6h-6"></path>
                          <path d="M1 20v-6h6"></path>
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
                          <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
                        </svg>
                      </button>
                      <button id="copyBtn" class="copy-btn" title="Copiar senha">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div class="password-tips">
                    Use senhas longas com combinação de caracteres diferentes para maior segurança.
                  </div>
                </div>
                
                <!-- Password Options -->
                <div class="options">
                  <h2 class="options-title">Configurações da senha</h2>
                  
                  <!-- Password Length -->
                  <div class="option-group">
                    <div class="length-display">
                      <label class="option-label">Comprimento da senha</label>
                      <span id="lengthValue" class="length-badge">12</span>
                    </div>
                    
                    <div class="length-slider-container">
                      <input type="range" id="lengthSlider" class="length-slider" min="4" max="32" value="12">
                    </div>
                    
                    <div class="length-marks">
                      <span class="length-mark">4</span>
                      <span class="length-mark">12</span>
                      <span class="length-mark">20</span>
                      <span class="length-mark">32</span>
                    </div>
                  </div>
                  
                  <!-- Character Types -->
                  <div class="option-group">
                    <label class="option-label">Incluir na senha</label>
                    <div class="checkbox-group">
                      <label class="checkbox-label">
                        <div class="checkbox-container">
                          <input type="checkbox" id="uppercase" class="checkbox" checked>
                          <span class="checkmark"></span>
                        </div>
                        Letras maiúsculas (A-Z)
                      </label>
                      
                      <label class="checkbox-label">
                        <div class="checkbox-container">
                          <input type="checkbox" id="lowercase" class="checkbox" checked>
                          <span class="checkmark"></span>
                        </div>
                        Letras minúsculas (a-z)
                      </label>
                      
                      <label class="checkbox-label">
                        <div class="checkbox-container">
                          <input type="checkbox" id="numbers" class="checkbox" checked>
                          <span class="checkmark"></span>
                        </div>
                        Números (0-9)
                      </label>
                      
                      <label class="checkbox-label">
                        <div class="checkbox-container">
                          <input type="checkbox" id="symbols" class="checkbox" checked>
                          <span class="checkmark"></span>
                        </div>
                        Símbolos (!@#$%)
                      </label>
                    </div>
                  </div>
                  
                  <!-- Password Strength -->
                  <div class="option-group">
                    <div class="strength-header">
                      <label class="option-label">Força da senha</label>
                      <span id="strengthText" class="strength-text strength-medium">Média</span>
                    </div>
                    <div class="strength-meter">
                      <div class="strength-bar">
                        <div id="strengthIndicator" class="strength-indicator medium"></div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Generate Button -->
                  <button id="generateBtn" class="generate-btn">Gerar nova senha</button>
                </div>
              </div>
              
              <div class="footer">
                Desenvolvido com <span>❤️</span> usando HTML, CSS e JavaScript
              </div>
            </div>
            
            <script>
              // DOM Elements
              const passwordEl = document.getElementById('password');
              const lengthSlider = document.getElementById('lengthSlider');
              const lengthValue = document.getElementById('lengthValue');
              const uppercaseEl = document.getElementById('uppercase');
              const lowercaseEl = document.getElementById('lowercase');
              const numbersEl = document.getElementById('numbers');
              const symbolsEl = document.getElementById('symbols');
              const generateBtn = document.getElementById('generateBtn');
              const copyBtn = document.getElementById('copyBtn');
              const refreshBtn = document.getElementById('refreshBtn');
              const strengthText = document.getElementById('strengthText');
              const strengthIndicator = document.getElementById('strengthIndicator');
              const toast = document.getElementById('toast');
              const toastMessage = document.getElementById('toast-message');
              
              // Character sets
              const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
              const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
              const numberChars = '0123456789';
              const symbolChars = '!@#$%^&*()_-+={}[]|:;"<>,.?/~\`';
              
              // Generate password on page load
              generatePassword();
              
              // Update length value when slider changes
              lengthSlider.addEventListener('input', () => {
                lengthValue.textContent = lengthSlider.value;
                generatePassword();
              });
              
              // Event listeners for checkboxes
              uppercaseEl.addEventListener('change', checkboxChanged);
              lowercaseEl.addEventListener('change', checkboxChanged);
              numbersEl.addEventListener('change', checkboxChanged);
              symbolsEl.addEventListener('change', checkboxChanged);
              
              function checkboxChanged() {
                // Ensure at least one checkbox is checked
                if (!uppercaseEl.checked && !lowercaseEl.checked && 
                    !numbersEl.checked && !symbolsEl.checked) {
                  // If none are checked, default to lowercase
                  lowercaseEl.checked = true;
                  showToast('Pelo menos um tipo de caractere deve ser selecionado');
                }
                generatePassword();
              }
              
              // Event listener for generate button
              generateBtn.addEventListener('click', () => {
                generatePassword();
                animateButton(generateBtn);
              });
              
              // Event listener for refresh button
              refreshBtn.addEventListener('click', () => {
                generatePassword();
                animateButton(refreshBtn);
              });
              
              // Event listener for copy button
              copyBtn.addEventListener('click', () => {
                copyToClipboard();
                animateButton(copyBtn);
              });
              
              function animateButton(button) {
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                  button.style.transform = '';
                }, 100);
              }
              
              function copyToClipboard() {
                navigator.clipboard.writeText(passwordEl.value)
                  .then(() => {
                    showToast('Senha copiada para a área de transferência!');
                  })
                  .catch(() => {
                    showToast('Falha ao copiar. Tente novamente.');
                  });
              }
              
              function showToast(message) {
                toastMessage.textContent = message;
                toast.classList.add('show');
                
                setTimeout(() => {
                  toast.classList.remove('show');
                }, 3000);
              }
              
              // Function to generate a random password
              function generatePassword() {
                let validChars = '';
                let requiredChars = [];
                
                if (uppercaseEl.checked) {
                  validChars += uppercaseChars;
                  requiredChars.push(getRandomChar(uppercaseChars));
                }
                
                if (lowercaseEl.checked) {
                  validChars += lowercaseChars;
                  requiredChars.push(getRandomChar(lowercaseChars));
                }
                
                if (numbersEl.checked) {
                  validChars += numberChars;
                  requiredChars.push(getRandomChar(numberChars));
                }
                
                if (symbolsEl.checked) {
                  validChars += symbolChars;
                  requiredChars.push(getRandomChar(symbolChars));
                }
                
                // If no character types selected, default to lowercase
                if (validChars === '') {
                  validChars = lowercaseChars;
                  lowercaseEl.checked = true;
                  requiredChars.push(getRandomChar(lowercaseChars));
                }
                
                const passwordLength = parseInt(lengthSlider.value);
                
                // Start with required characters
                let password = requiredChars.join('');
                
                // Fill the rest with random characters
                for (let i = password.length; i < passwordLength; i++) {
                  const randomIndex = Math.floor(Math.random() * validChars.length);
                  password += validChars[randomIndex];
                }
                
                // Shuffle the password to mix required characters
                password = shuffleString(password);
                
                // Set password to input field
                passwordEl.value = password;
                
                // Calculate and update password strength
                calculatePasswordStrength(password);
              }
              
              function getRandomChar(charSet) {
                return charSet.charAt(Math.floor(Math.random() * charSet.length));
              }
              
              function shuffleString(str) {
                const array = str.split('');
                for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                }
                return array.join('');
              }
              
              // Function to calculate password strength
              function calculatePasswordStrength(pwd) {
                let strength = 0;
                
                // Length check
                if (pwd.length >= 8) strength += 1;
                if (pwd.length >= 12) strength += 1;
                if (pwd.length >= 16) strength += 1;
                
                // Complexity checks
                if (/[A-Z]/.test(pwd)) strength += 1;
                if (/[a-z]/.test(pwd)) strength += 1;
                if (/[0-9]/.test(pwd)) strength += 1;
                if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;
                
                // Check for variety
                const uniqueChars = new Set(pwd).size;
                if (uniqueChars > pwd.length * 0.7) strength += 1;
                
                // Determine strength category and update UI
                strengthText.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
                strengthIndicator.classList.remove('weak', 'medium', 'strong');
                
                if (strength < 4) {
                  strengthText.textContent = 'Fraca';
                  strengthText.classList.add('strength-weak');
                  strengthIndicator.classList.add('weak');
                } else if (strength < 7) {
                  strengthText.textContent = 'Média';
                  strengthText.classList.add('strength-medium');
                  strengthIndicator.classList.add('medium');
                } else {
                  strengthText.textContent = 'Forte';
                  strengthText.classList.add('strength-strong');
                  strengthIndicator.classList.add('strong');
                }
              }
            </script>
          </body>
          </html>
        `}
      />
    </div>
  );
};

export default Index;
