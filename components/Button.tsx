import Image from "next/image"

type ButtonProps={
    type:'button'|'submit',
    title:string,
    icon?:string,
    bg:string,
}
const Button = ({type,title,icon,bg}:ButtonProps) => {
  return (
    <button type={type} className={`flex items-center justify-center gap-3 rounded-full border ${bg} px-8 py-4  transition-all `}>
     {icon && <Image src={icon} alt="icon" width={20} height={20}/> } {title}
    </button>
  )
}

export default Button
