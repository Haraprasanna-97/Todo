import React from 'react'

export default function Todolist(props) {
    return (
        <div className="lg:w-full w-full mx-auto mb-24">
            {props.List.length !== 0 ? <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Task</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.List.map((item) => (
                            <tr key={item.id}>
                                <td className="px-4 py-3" id={`Item${props.List.indexOf(item)}`}>{item.Task}</td>
                                <td className="px-4 py-3 flex gap-5">
                                    <button id={props.List.indexOf(item)} onClick={props.MarkAsCompleted}>Mark as completed</button>
                                    <button id={item.id} onClick={props.DeleteItem}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> : <p className='text-5xl pt-20'>The list is empty.</p>}
        </div>
    )
}