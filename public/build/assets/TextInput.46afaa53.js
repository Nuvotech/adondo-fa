import{a as s,r as e}from"./app.25d4f07c.js";function m({message:r,className:t=""}){return r?s("p",{className:"text-sm text-red-600 "+t,children:r}):null}const g=e.exports.forwardRef(function({type:t="text",name:u,value:a,className:c,autoComplete:i,required:f,isFocused:d,handleChange:x},n){const o=n||e.exports.useRef();return e.exports.useEffect(()=>{d&&o.current.focus()},[]),s("div",{className:"flex flex-col items-start",children:s("input",{type:t,name:u,value:a,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+c,ref:o,autoComplete:i,required:f,onChange:p=>x(p)})})});export{m as I,g as T};
