import { useState } from 'react'

function Navbar(menu) {
    let [list, setList] = useState("")

    if (menu) {
        list = (
            <>
                <div className="m-0">
                    <p className='m-0 text-2xl'>FSW 2</p>
                </div>
                <div className="flex align-middle">
                    <ul className="flex gap-3 list-none ">
                        <li>
                            <a href="" className="">{menu.name[0]}</a>
                        </li>
                        <li>
                            <a href="">{menu.name[1]}</a>
                        </li>
                        <li>
                            <a href="">{menu.name[2]}</a>
                        </li>
                        <li>
                            <a href="">{menu.name[3]}</a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
    else {
        list = (<h1>Not Found</h1>)
    }

    return (
        <>
            <div className="w-full flex flex-row justify-between align-top">
                {list}
            </div>
        </>
    )
}

export default Navbar
