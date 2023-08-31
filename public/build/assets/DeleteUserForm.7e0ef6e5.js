import{a as e,r as l,d as w,j as n,u as b}from"./app.25d4f07c.js";import{T as v,I as N}from"./TextInput.46afaa53.js";import{I as D}from"./InputLabel.b2109e99.js";import{W as y}from"./transition.e77dd649.js";import"./open-closed.f4f7f2c0.js";function x({type:a="submit",className:s="",processing:t,children:o,onClick:r}){return e("button",{type:a,onClick:r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,disabled:t,children:o})}function k({children:a,show:s=!1,maxWidth:t="2xl",closeable:o=!0,onClose:r=()=>{}}){l.exports.useEffect(()=>{document.body.style.overflow=s?"hidden":null},[s]);const i=()=>{o&&r()},d=u=>{u.key==="Escape"&&props.show&&i()};l.exports.useEffect(()=>(document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null}),[]);const m={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[t],c=document.getElementById("modal-root");return w.createPortal(e(y,{show:s,leave:"duration-200",children:n("div",{className:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",children:[e(y.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 transform transition-all",onClick:i,children:e("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})})}),e(y.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e("div",{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${m}`,children:a})})]})}),c)}function C({type:a="button",className:s="",processing:t,children:o,onClick:r}){return e("button",{type:a,onClick:r,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,disabled:t,children:o})}function U({className:a}){const[s,t]=l.exports.useState(!1),o=l.exports.useRef(),{data:r,setData:i,delete:d,processing:m,reset:c,errors:u}=b({password:""}),h=()=>{t(!0)},g=f=>{f.preventDefault(),d(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onError:()=>o.current.focus(),onFinish:()=>c()})},p=()=>{t(!1),c()};return n("section",{className:`space-y-6 ${a}`,children:[n("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(x,{onClick:h,children:"Delete Account"}),e(k,{show:s,onClose:p,children:n("form",{onSubmit:g,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure your want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),n("div",{className:"mt-6",children:[e(D,{for:"password",value:"Password",className:"sr-only"}),e(v,{id:"password",type:"password",name:"password",ref:o,value:r.password,handleChange:f=>i("password",f.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(N,{message:u.password,className:"mt-2"})]}),n("div",{className:"mt-6 flex justify-end",children:[e(C,{onClick:p,children:"Cancel"}),e(x,{className:"ml-3",processing:m,children:"Delete Account"})]})]})})]})}export{U as default};
