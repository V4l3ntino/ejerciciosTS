interface PasswordOptions {
  length: number;
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  customSymbols: string;
}

function generatePassword(options: PasswordOptions): string {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = options.customSymbols || '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let allChars = '';
  if (options.useLowercase) allChars += lowercaseChars;
  if (options.useUppercase) allChars += uppercaseChars;
  if (options.useNumbers) allChars += numberChars;
  if (options.useSymbols && symbolChars) allChars += symbolChars;

  if (allChars === '') return ''; 

  let generatedPassword = '';
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  return generatedPassword;
}

