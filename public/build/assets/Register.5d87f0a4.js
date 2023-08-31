import{u as p,r as f,j as a,a as e,H as g,L as h}from"./app.25d4f07c.js";import{G as w}from"./GuestLayout.67e151ac.js";import{T as m,I as n}from"./TextInput.46afaa53.js";import{I as l}from"./InputLabel.b2109e99.js";import{P as N}from"./PrimaryButton.45a43363.js";import"./ApplicationLogo.089d7d0f.js";function _(){const{data:r,setData:i,post:u,processing:d,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const o=s=>{i(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(w,{children:[e(g,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),u(route("register"))},children:[a("div",{children:[e(l,{forInput:"name",value:"Name"}),e(m,{type:"text",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:o,required:!0}),e(n,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"email",value:"Email"}),e(m,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o,required:!0}),e(n,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password",value:"Password"}),e(m,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o,required:!0}),e(n,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{forInput:"password_confirmation",value:"Confirm Password"}),e(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",handleChange:o,required:!0}),e(n,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e(N,{className:"ml-4",processing:d,children:"Register"})]})]})]})}export{_ as default};
