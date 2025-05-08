
import React, { useState, useEffect } from 'react';

const Index = () => {
  // State for generated password
  const [password, setPassword] = useState('');
  // Password length
  const [length, setLength] = useState(12);
  // Character types
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  // Password strength
  const [passwordStrength, setPasswordStrength] = useState('média');

  // Generate password on load and when options change
  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  // Function to generate a random password
  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+={}[]|:;"<>,.?/~`';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    // If no character type is selected, default to lowercase
    if (validChars === '') {
      validChars = lowercaseChars;
      setIncludeLowercase(true);
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      result += validChars[randomIndex];
    }

    setPassword(result);
    calculatePasswordStrength(result);
  };

  // Calculate password strength
  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    
    // Length check
    if (pwd.length >= 8) strength += 1;
    if (pwd.length >= 12) strength += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(pwd)) strength += 1;
    if (/[a-z]/.test(pwd)) strength += 1;
    if (/[0-9]/.test(pwd)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;
    
    // Determine strength category
    if (strength < 3) {
      setPasswordStrength('fraca');
    } else if (strength < 5) {
      setPasswordStrength('média');
    } else {
      setPasswordStrength('forte');
    }
  };

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Senha copiada para a área de transferência!");
  };

  // Get strength color
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'fraca': return 'bg-red-500';
      case 'média': return 'bg-yellow-400';
      case 'forte': return 'bg-green-500';
      default: return 'bg-yellow-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-blue-950/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-blue-800/30">
          {/* Header */}
          <div className="p-6 flex justify-center items-center">
            <div className="text-blue-400 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Gerador de senhas</h1>
          </div>
          
          <div className="text-center px-6 pb-4">
            <p className="text-blue-300 text-sm mb-4">
              Gere instantaneamente uma senha aleatória e segura
            </p>
          </div>

          {/* Password Display */}
          <div className="px-6 pb-6">
            <div className="relative">
              <input 
                type="text" 
                className="w-full py-3 px-4 rounded-md bg-blue-900/50 text-white font-mono text-xl border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                readOnly
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition"
                onClick={copyToClipboard}
                title="Copiar senha"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Password Options */}
          <div className="bg-blue-900/30 p-6 border-t border-blue-800/30">
            <h2 className="text-xl font-semibold text-white mb-4">Personalize sua senha</h2>
            
            {/* Password Length */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-blue-200">Número de caracteres</label>
                <span className="text-white bg-blue-700 px-2 rounded">{length}</span>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-blue-800 text-white w-8 h-8 rounded-l flex items-center justify-center hover:bg-blue-700 transition"
                  onClick={() => length > 4 && setLength(length - 1)}
                >
                  -
                </button>
                <input 
                  type="range" 
                  min="4" 
                  max="32" 
                  value={length} 
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="flex-1 mx-2 accent-blue-500"
                />
                <button 
                  className="bg-blue-800 text-white w-8 h-8 rounded-r flex items-center justify-center hover:bg-blue-700 transition"
                  onClick={() => length < 32 && setLength(length + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Character Types */}
            <div className="mb-6">
              <label className="text-blue-200 block mb-3">Características da senha</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={includeUppercase} 
                    onChange={() => setIncludeUppercase(!includeUppercase)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded transition"
                  />
                  <span>Letras maiúsculas</span>
                </label>
                
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={includeLowercase} 
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded transition"
                  />
                  <span>Letras minúsculas</span>
                </label>
                
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={includeNumbers} 
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded transition"
                  />
                  <span>Números</span>
                </label>
                
                <label className="flex items-center space-x-2 text-white cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={includeSymbols} 
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded transition"
                  />
                  <span>Símbolos</span>
                </label>
              </div>
            </div>
            
            {/* Password Strength */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-blue-200">Força da senha</label>
                <span className="text-white capitalize">{passwordStrength}</span>
              </div>
              <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getStrengthColor()} transition-all duration-500`}
                  style={{ width: passwordStrength === 'fraca' ? '33%' : passwordStrength === 'média' ? '66%' : '100%' }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-blue-400">Fraca</span>
                <span className="text-xs text-blue-400">Média</span>
                <span className="text-xs text-blue-400">Forte</span>
              </div>
            </div>

            {/* Generate Button */}
            <div className="mt-6">
              <button 
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
                onClick={generatePassword}
              >
                Gerar nova senha
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4 text-blue-300 text-sm opacity-80">
          Desenvolvido com React e TailwindCSS
        </div>
      </div>
    </div>
  );
};

export default Index;
