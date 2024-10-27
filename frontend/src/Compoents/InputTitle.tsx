import { ChangeEvent } from "react"

interface inputTitleType {
    title : string,
    placeholder:string,
    onchange:(e : ChangeEvent<HTMLInputElement>) => void,
    type? : string 
}

export const InputTitle = ({title,placeholder,onchange,type} : inputTitleType) =>{
    return(
        <div>
            <label className="block text-base font-medium mb-2">{title}</label>
            <input
                type={type || "text"}
                id="inputId"
                className="border-2 border-slate-300 rounded-md p-1.5  text-lg w-full mb-3" 
                placeholder={placeholder}
                onChange={onchange}
            />
        </div>
    )
}