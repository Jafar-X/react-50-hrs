import React from 'react';
import { usePasswordStore } from '../passwordStore';

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

  const handleGeneratePassword = () => generatePassword();

  return (
    <div className="min-h-screen flex items-center justify-center  bg-white">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6 ">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Password Generator
        </h1>
        <label
          htmlFor="length"
          className="block text-sm font-medium text-gray-700"
        >
          Password Length
        </label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          min={4}
          max={64}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-non focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={toggleNumbers}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={toggleSymbols}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Symbols
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercaseLetter}
            onChange={toggleUppercaseLetter}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Uppercase Letter
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeLowercaseLetter}
            onChange={toggleLowercaseLetter}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Lowercase Letter
          </label>
        </div>
        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Generate Password
        </button>
        {generatedPassword && (
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default PasswordGenerationApp;
