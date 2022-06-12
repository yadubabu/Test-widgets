import axios from 'axios';
import React, { useEffect, useState } from 'react';


 const Search = () => {
     const [term,setTerm]=useState('programming');
     const [results,setResults]=useState([]);
     const [debouncedTerm,setDebouncedTerm]=useState(term); 
     
    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setDebouncedTerm(term);
        },1000);

        return ()=>{
            clearTimeout(timerId);
        }
    },[term]);

    useEffect(()=>{
        const search=async()=>{
            const {data}=await axios.get(`https://en.wikipedia.org/w/api.php`,{
                 params:{
                     action:'query',
                     list:'search',
                     origin:'*',
                     format:'json',
                     srsearch:debouncedTerm
                 },
             });
             setResults(data.query.search);
         };
         search();

    },[debouncedTerm]);

        //  useEffect(()=>{
           

        //     if(term && !results.length){
        //         search();
        //     }else{

        //         const timerId=setTimeout(()=>{
    
        //             if(term){
        
        //                 search();
        //             }
        //         },1000);
        //         return ()=>{
        //             clearTimeout(timerId);
        //         };
        //     }
        //     },[term,results.length]);
            

        const renderResults=results.map(result=>{
            return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go
                    </a>
                </div>

                <div className='content'>
                    <div className='header'>
                        <h2>{result.title}</h2>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                </div>
            </div>
            )
        });

        return (
            <div className='ui segment'>
                <form className='ui form' >
                    <div className='field'>
                        
                        <label>Enter Search Term</label>
                        <input value={term} className="input" onChange={(e)=>setTerm(e.target.value)} type="text"/>
                    </div>
                </form>
                {renderResults}
            </div>
        )
        }
export default Search;