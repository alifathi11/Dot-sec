"use client"

import { useState } from 'react';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { BCM } from '../../constants/bcmModes';

export default function DES() {

  const [key, setKey]       = useState('');
  const [data, setData]     = useState('');
  const [mode, setMode]     = useState('ECB');
  const [result, setResult] = useState('');

  const handleClick = () => {
    setResult(`Mock result for ${key} ${data} ${mode}`);
  };

  return (
    <section className="flex items-center flex-col gap-10 w-full">
        <h2 className="calculator-title">DES</h2>

        <form className="flex flex-col items-center gap-5 w-full">
          <Input 
            id="key" 
            name="key" 
            type="text" 
            value={key}
            placeholder="Enter the hex key" 
            onChange={(e) => setKey(e.target.value)} 
          />
          <TextArea 
            id="data" 
            name="data" 
            value={data}
            placeholder="Enter the hex data"
            onChange={(e) => setData(e.target.value)}
            rows={4}
            cols={50}
          />
        </form>

        <Select 
          id="mode" 
          label="Block Chaining Mode" 
          options={BCM} 
          onChange={(e) => {setMode(e.target.value)}}
        />

        <div className="flex gap-5 justify-center">
          <Button 
            type="button"
            onClick={handleClick}>
            Encrypt
          </Button>
  
          <Button 
            type="button"
            onClick={handleClick}>
            Decrypt
          </Button>
        </div>

        <TextArea 
          id="result" 
          name="result" 
          value={result}
          placeholder="Result"
          rows={4}
          cols={50}
          readOnly
        />

    </section>
  )
}