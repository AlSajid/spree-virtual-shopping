export default function Spinner({msg, color = "text-blue-500"}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={"w-10 h-10 border-x-blue-500 border-4 border-t-0 border-b-0 rounded-full animate-spin " + color}>
            </div>
            {msg && <p className="text-xm text-gray-500 my-3">{msg}...</p>}
        </div>
    );
}