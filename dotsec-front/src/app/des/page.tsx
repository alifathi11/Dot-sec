"use client"

import { useState } from 'react';
import Select from '../../components/Select';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { BCM } from '../../constants/bcmModes';
import { Operation } from '../../constants/operations';

export default function DES() {

  const [key, setKey]             = useState('');
  const [data, setData]           = useState('');
  const [mode, setMode]           = useState('ECB');
  const [operation, setOperation] = useState('Encrypt');
  const [result, setResult]       = useState('');

  const handleClick = () => {
    setResult(`Mock result for ${operation} ${key} ${data} ${mode}`);
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

        <Select 
          id="operation" 
          label="Operation" 
          options={Operation} 
          onChange={(e) => {setOperation(e.target.value)}}
        />

        <Button 
          type="button"
          onClick={handleClick}>
          Run
        </Button>

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