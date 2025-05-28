import React from 'react';
import usePasswordStore from '../passwordStore';

const PasswordGenerationApp = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercaseLetter,
    includeLowercaseLetter,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercaseLetter,
    toggleLowercaseLetter,
    generatePassword,
  } = usePasswordStore();

  return (
    <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="flex felx-col gap-4">
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Password Length
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerationApp;
