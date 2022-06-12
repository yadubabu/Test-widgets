
import React, { useState } from 'react';
import DropdownList from './DropdownList';
import Convert from './Convert';
const options=[
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'hindi',
        value:'hi'
    },
       {
           label:'dutch',
           value:'nl'
       }
]

export const Translate = () => {
const [language,setLanguage]=useState(options[0]);
const [text,setText]=useState('');
    return(
        <div>
           <div className='ui form'>
               <div className='field'>
                   <label>Enter Text</label>
                   <input value={text} onChange={(e)=>setText(e.target.value)}/>
               </div>
           </div>
            <DropdownList 
            label="Select a language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            />
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
}

export default Translate;