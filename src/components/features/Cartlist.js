import React from 'react'

export default function Cartlist(props) {
    return (
        <div className="lg:w-2/3 w-full mx-auto">
            {props.List.length !== 0 ? <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.List.map((obj) => (
                            <tr>
                                <td className="px-4 py-3" id={`Item${props.List.indexOf(obj)}`}>{obj.Item}</td>
                                <td className="px-4 py-3">{obj.Price}</td>
                                <td className="px-4 py-3">
                                    <button id={props.List.indexOf(obj)} onClick={props.RemoveItem}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> : <p className='text-5xl pt-20'>The cart is empty.</p>}
        </div>
    )
}