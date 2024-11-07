import { useState } from 'react'

function Navbar(props) {
    console.log(props)
    return (
        <div>
            <div className="w-full flex flex-row justify-between align-top">
                <div className="m-0">
                    <p className='m-0 text-2xl'>FSW 2</p>
                </div>
                <div className="flex align-middle">
                    <ul className="flex gap-3 list-none ">
                        <li>
                            <a href="" className="">{props.name[0]}</a>
                        </li>
                        <li>
                            <a href="">{props.name[1]}</a>
                        </li>
                        <li>
                            <a href="">{props.name[2]}</a>
                        </li>
                        <li>
                            <a href="">{props.name[3]}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
