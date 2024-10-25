export const Button = ({text}:{text : string}) =>{
    return (
        <div>
            <button className="bg-black text-white p-2.5 rounded-md w-full mt-2" type="submit">{text}</button>
        </div>
    )
}