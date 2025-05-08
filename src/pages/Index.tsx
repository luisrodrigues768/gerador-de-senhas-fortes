
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
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              }
              
              body {
                background: linear-gradient(to bottom, #0f172a, #000);
                color: white;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
              }
              
              .container {
                width: 100%;
                max-width: 450px;
              }
              
              .password-generator {
                background-color: rgba(15, 23, 42, 0.7);
                backdrop-filter: blur(8px);
                border-radius: 12px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                overflow: hidden;
                border: 1px solid rgba(30, 58, 138, 0.3);
              }
              
              .header {
                padding: 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              
              .lock-icon {
                color: #60a5fa;
                margin-right: 0.5rem;
              }
              
              .title {
                font-size: 1.5rem;
                font-weight: 700;
              }
              
              .description {
                text-align: center;
                padding: 0 1.5rem 1rem;
                color: #93c5fd;
                font-size: 0.875rem;
              }
              
              .password-display {
                padding: 0 1.5rem 1.5rem;
                position: relative;
              }
              
              .password-input {
                width: 100%;
                background-color: rgba(30, 58, 138, 0.3);
                padding: 0.75rem 1rem;
                border: 1px solid rgba(30, 64, 175, 0.7);
                border-radius: 0.375rem;
                color: white;
                font-family: monospace;
                font-size: 1.25rem;
                outline: none;
              }
              
              .password-input:focus {
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
              }
              
              .copy-btn {
                position: absolute;
                right: 2rem;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                border: none;
                color: #93c5fd;
                cursor: pointer;
                transition: color 0.2s;
              }
              
              .copy-btn:hover {
                color: white;
              }
              
              .options {
                padding: 1.5rem;
                background-color: rgba(30, 58, 138, 0.2);
                border-top: 1px solid rgba(30, 58, 138, 0.3);
              }
              
              .options-title {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }
              
              .option-group {
                margin-bottom: 1.5rem;
              }
              
              .option-label {
                color: #bfdbfe;
                display: block;
                margin-bottom: 0.5rem;
              }
              
              .length-display {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
              }
              
              .length-badge {
                background-color: #1d4ed8;
                padding: 0 0.5rem;
                border-radius: 0.25rem;
              }
              
              .length-controls {
                display: flex;
                align-items: center;
              }
              
              .length-btn {
                background-color: #1e40af;
                color: white;
                width: 2rem;
                height: 2rem;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.2s;
              }
              
              .length-btn:hover {
                background-color: #2563eb;
              }
              
              .length-btn:first-child {
                border-top-left-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;
              }
              
              .length-btn:last-child {
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
              }
              
              .length-slider {
                flex-grow: 1;
                margin: 0 0.5rem;
                accent-color: #2563eb;
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
                color: white;
                cursor: pointer;
              }
              
              .checkbox {
                width: 1.25rem;
                height: 1.25rem;
                margin-right: 0.5rem;
                accent-color: #2563eb;
              }
              
              .strength-meter {
                margin-top: 0.5rem;
              }
              
              .strength-labels {
                display: flex;
                justify-content: space-between;
                margin-top: 0.25rem;
                font-size: 0.75rem;
                color: #93c5fd;
              }
              
              .strength-bar {
                height: 0.5rem;
                width: 100%;
                background-color: #1e3a8a;
                border-radius: 9999px;
                overflow: hidden;
              }
              
              .strength-indicator {
                height: 100%;
                transition: width 0.5s, background-color 0.5s;
              }
              
              .weak {
                background-color: #ef4444;
                width: 33.333%;
              }
              
              .medium {
                background-color: #f59e0b;
                width: 66.666%;
              }
              
              .strong {
                background-color: #10b981;
                width: 100%;
              }
              
              .generate-btn {
                width: 100%;
                padding: 0.75rem 0;
                margin-top: 1.5rem;
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 0.375rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;
                transform: translateY(0);
              }
              
              .generate-btn:hover {
                background-color: #3b82f6;
                transform: translateY(-2px);
              }
              
              .footer {
                text-align: center;
                margin-top: 1rem;
                color: #93c5fd;
                font-size: 0.875rem;
                opacity: 0.8;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="password-generator">
                <!-- Header -->
                <div class="header">
                  <div class="lock-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h1 class="title">Gerador de senhas</h1>
                </div>
                
                <div class="description">
                  Gere instantaneamente uma senha aleatória e segura
                </div>
                
                <!-- Password Display -->
                <div class="password-display">
                  <input type="text" id="password" class="password-input" readonly>
                  <button id="copyBtn" class="copy-btn" title="Copiar senha">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
                
                <!-- Password Options -->
                <div class="options">
                  <h2 class="options-title">Personalize sua senha</h2>
                  
                  <!-- Password Length -->
                  <div class="option-group">
                    <div class="length-display">
                      <label class="option-label">Número de caracteres</label>
                      <span id="lengthValue" class="length-badge">12</span>
                    </div>
                    <div class="length-controls">
                      <button id="decreaseLength" class="length-btn">-</button>
                      <input type="range" id="lengthSlider" class="length-slider" min="4" max="32" value="12">
                      <button id="increaseLength" class="length-btn">+</button>
                    </div>
                  </div>
                  
                  <!-- Character Types -->
                  <div class="option-group">
                    <label class="option-label">Características da senha</label>
                    <div class="checkbox-group">
                      <label class="checkbox-label">
                        <input type="checkbox" id="uppercase" class="checkbox" checked>
                        Letras maiúsculas
                      </label>
                      
                      <label class="checkbox-label">
                        <input type="checkbox" id="lowercase" class="checkbox" checked>
                        Letras minúsculas
                      </label>
                      
                      <label class="checkbox-label">
                        <input type="checkbox" id="numbers" class="checkbox" checked>
                        Números
                      </label>
                      
                      <label class="checkbox-label">
                        <input type="checkbox" id="symbols" class="checkbox" checked>
                        Símbolos
                      </label>
                    </div>
                  </div>
                  
                  <!-- Password Strength -->
                  <div class="option-group">
                    <div class="length-display">
                      <label class="option-label">Força da senha</label>
                      <span id="strengthText">Média</span>
                    </div>
                    <div class="strength-meter">
                      <div class="strength-bar">
                        <div id="strengthIndicator" class="strength-indicator medium"></div>
                      </div>
                      <div class="strength-labels">
                        <span>Fraca</span>
                        <span>Média</span>
                        <span>Forte</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Generate Button -->
                  <button id="generateBtn" class="generate-btn">Gerar nova senha</button>
                </div>
              </div>
              
              <div class="footer">
                Desenvolvido com HTML, CSS e JavaScript
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
              const decreaseLength = document.getElementById('decreaseLength');
              const increaseLength = document.getElementById('increaseLength');
              const strengthText = document.getElementById('strengthText');
              const strengthIndicator = document.getElementById('strengthIndicator');
              
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
              uppercaseEl.addEventListener('change', generatePassword);
              lowercaseEl.addEventListener('change', generatePassword);
              numbersEl.addEventListener('change', generatePassword);
              symbolsEl.addEventListener('change', generatePassword);
              
              // Event listener for generate button
              generateBtn.addEventListener('click', generatePassword);
              
              // Event listener for copy button
              copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(passwordEl.value);
                alert('Senha copiada para a área de transferência!');
              });
              
              // Event listeners for length buttons
              decreaseLength.addEventListener('click', () => {
                const currentValue = parseInt(lengthSlider.value);
                if (currentValue > 4) {
                  lengthSlider.value = currentValue - 1;
                  lengthValue.textContent = lengthSlider.value;
                  generatePassword();
                }
              });
              
              increaseLength.addEventListener('click', () => {
                const currentValue = parseInt(lengthSlider.value);
                if (currentValue < 32) {
                  lengthSlider.value = currentValue + 1;
                  lengthValue.textContent = lengthSlider.value;
                  generatePassword();
                }
              });
              
              // Function to generate a random password
              function generatePassword() {
                let validChars = '';
                
                if (uppercaseEl.checked) validChars += uppercaseChars;
                if (lowercaseEl.checked) validChars += lowercaseChars;
                if (numbersEl.checked) validChars += numberChars;
                if (symbolsEl.checked) validChars += symbolChars;
                
                // If no character types selected, default to lowercase
                if (validChars === '') {
                  validChars = lowercaseChars;
                  lowercaseEl.checked = true;
                }
                
                const passwordLength = parseInt(lengthSlider.value);
                let password = '';
                
                // Generate random characters
                for (let i = 0; i < passwordLength; i++) {
                  const randomIndex = Math.floor(Math.random() * validChars.length);
                  password += validChars[randomIndex];
                }
                
                // Set password to input field
                passwordEl.value = password;
                
                // Calculate and update password strength
                calculatePasswordStrength(password);
              }
              
              // Function to calculate password strength
              function calculatePasswordStrength(pwd) {
                let strength = 0;
                
                // Length check
                if (pwd.length >= 8) strength += 1;
                if (pwd.length >= 12) strength += 1;
                
                // Complexity checks
                if (/[A-Z]/.test(pwd)) strength += 1;
                if (/[a-z]/.test(pwd)) strength += 1;
                if (/[0-9]/.test(pwd)) strength += 1;
                if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;
                
                // Determine strength category and update UI
                if (strength < 3) {
                  strengthText.textContent = 'Fraca';
                  strengthIndicator.className = 'strength-indicator weak';
                } else if (strength < 5) {
                  strengthText.textContent = 'Média';
                  strengthIndicator.className = 'strength-indicator medium';
                } else {
                  strengthText.textContent = 'Forte';
                  strengthIndicator.className = 'strength-indicator strong';
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
