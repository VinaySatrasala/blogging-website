export const InputTitle = ({title,placeholder} : {title : string,placeholder:string}) =>{
    return(
        <div>
            <label className="block text-base font-medium mb-2">{title}</label>
            <input
                type="text"
                id="inputId"
                className="border-2 border-slate-300 rounded-md p-1.5  text-lg w-full mb-3" 
                placeholder={placeholder}
            />
        </div>
    )
}