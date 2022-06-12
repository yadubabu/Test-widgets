import React from 'react';

 const Link = ({className,href,children}) => {
     const onClick=(e)=>{
        if(e.metaKey || e.ctrlKey){
            return;
        }

         e.preventDefault();
         window.history.pushState({},'',href);

         const navState=new PopStateEvent('popstate');
         window.dispatchEvent(navState);
     }
  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
}

export default Link;
