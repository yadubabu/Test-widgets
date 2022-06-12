import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import UseStateExe from './components/UseStateExe';
// import Search from './components/Search';
import DropdownList from './components/DropdownList';
import Translate from './components/Translate';

    // const items=[
    //     {
    //     title:'What is React',
    //     content:'React is a front end javascript framework'
    //     },
    //     {
    //         title:'Why use React',
    //         content:'React is a favorite JS library among engineers'
    //         },
    //     {
    //         title:'How do you use React',
    //         content:'You are React by creating Components'
    //     }
    // ]
    const options=[
        {
            label:"The Color Red",
            value:"red"
        },
        {
            label:"The Color Green",
            value:"green"
        },
        {
            label:"The Color Blue",
            value:"blue"
        }
    ]
    const App=()=>{
        const [language,setLanguage]=useState(options[0]);
        const [selected,setSelected]=useState('');

        return(
            <div>
            
            {/* <DropdownList  
         selected={selected}
          onSelectedChange={setSelected}
         options={options}/>
          */}
    
              
        <Translate />
     
            </div>
        )
    }

    export default App;