
export default function SnackBar({text}:{text:string}) {
    return(
        <>
        <section className=" w-full h-full fixed top-0 left-0 flex justify-start items-start z-50">
        <div className="bg-white rounded-lg z-100 w-[300px] h-[50px] px-5 py-2 mt-22 mr-10 flex  items-center gap-4">
        {text}<span className="icon-smile  text-emerald-600 text-2xl"/>

        </div>
            
        </section>
        </>
    )
}