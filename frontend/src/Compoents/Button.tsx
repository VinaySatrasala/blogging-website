export const Button = ({text,onclick}:{text : string,onclick:()=>void}) =>{
    return (
        <div>
            <button className="bg-black text-white p-2.5 rounded-md w-full mt-2" type="submit" onClick={onclick}>{text}</button>
        </div>
    )
}