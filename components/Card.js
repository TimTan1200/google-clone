export default function Card({title, url, color, action, mode, engine, i}) {

    const bg = 'bg-[' + color + ']'

    if (mode == 'theme') {
        return (
            <div className='flex flex-col group' onClick={action}>
                <div className="h-24 w-full overflow-hidden rounded-xl relative">
                    <div className='h-24 w-full rounded-xl bg-center bg-cover group-hover:scale-105 transition-all ease-in' style={{backgroundImage: 'url("' + url + '?ixlib=rb-1.2.1&fit=crop&w=500&q=100")', backgroundColor: color}}></div>
                    <div className={`w-4 h-4 rounded-full absolute bottom-2 left-2 ${bg} `}></div>
                </div>
                <span className="text-sm font-medium pt-1">{title}</span>
            </div>
        )
    } else if (mode == 'engine') {
        return (
            <div className='flex flex-col group' onClick={action}>
                <div className="h-24 w-full overflow-hidden rounded-xl relative cursor-pointer">
                    <div className='h-24 w-full flex justify-center items-center rounded-xl bg-[#212121] group-hover:scale-110 transition-all ease-in'>
                        <span className="text-sm font-medium pt-1">{title}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full absolute bottom-2 left-2 ${engine == i ? 'bg-red-500' : ''} `}></div>
                </div>
            </div>
        )
    }
}