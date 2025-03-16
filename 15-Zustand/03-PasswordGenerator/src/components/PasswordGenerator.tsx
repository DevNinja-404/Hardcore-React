import { useRef, useState } from "react";
import { useStore } from "../store/useStore";
import { BiSolidCopyAlt } from "react-icons/bi";

const PasswordGenerator = () => {
  const {
    length,
    setLength,
    includeNumbers,
    includeSymbols,
    includeLowercase,
    includeUppercase,
    toogleNumbers,
    toogleSymbols,
    toogleLowercase,
    toogleUppercase,
    generatedPassword,
    generatePassword,
  } = useStore();

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef?.current.value);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="w-1/2 bg-white/50 rounded-2xl flex flex-col px-8 py-6 gap-y-6">
      <p className="text-center text-2xl font-semibold">Password Generator</p>
      <div className="flex flex-col gap-y-2 ">
        <label htmlFor="length">Password Length :</label>
        <input
          type="text"
          id="length"
          min={6}
          max={40}
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          placeholder="Enter Length"
          className="px-4 py-2 bg-black/80 w-1/2 text-white rounded-xl  outline-none placeholder:text-white placeholder:pl-1"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            className=""
            id="numbers"
            checked={includeNumbers}
            onChange={toogleNumbers}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            className=""
            id="numbers"
            checked={includeSymbols}
            onChange={toogleSymbols}
          />
          <label htmlFor="numbers">Include Symbols</label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            className=""
            id="numbers"
            checked={includeLowercase}
            onChange={toogleLowercase}
          />
          <label htmlFor="numbers">Include Lowercase</label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            className=""
            id="numbers"
            checked={includeUppercase}
            onChange={toogleUppercase}
          />
          <label htmlFor="numbers">Include Uppercase</label>
        </div>
      </div>
      <div className="text-center" onClick={generatePassword}>
        <button className="bg-green-700 py-2 text-center w-1/2 px-4 rounded-3xl cursor-pointer text-white ">
          Generate Password
        </button>
      </div>
      <div className="flex justify-between items-center px-4 bg-black py-3 rounded-3xl ">
        <input
          className="text-xl text-white w-2/3 px-2 "
          disabled={true}
          value={
            generatedPassword ? generatedPassword : "Plz Generate Password"
          }
          ref={inputRef}
        />
        <button
          onClick={handleCopy}
          className="mr-4 cursor-pointer"
          disabled={generatedPassword === "" ? true : false}
        >
          <BiSolidCopyAlt color="white" size={30} />
        </button>
      </div>
      {isCopied && (
        <div className="px-16 py-3 rounded-2xl absolute right-4 bottom-4 bg-white  ">
          Password Copied to Clipboard
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
