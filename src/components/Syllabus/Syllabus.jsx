import React from "react"
import { useState } from "react"
import data from "../data"
import './Syllabus.css'



export default function Syllabus() {
const [selected, setSelected] = useState(null)
const [enableMultiSelection, setEnableMultiSelection] = useState(false)
const [multiple, setMultiple] = useState([])

function handleSingleSelection(getCurrentId) {
setSelected(getCurrentId === selected ? null : getCurrentId)
}

function handleMultiSelection(getCurrentId){
let cpyMultiple = [...multiple];
const findindexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

console.log(findindexOfCurrentId)
if (findindexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
else cpyMultiple.splice(findindexOfCurrentId, 1)
setMultiple(cpyMultiple)
}
console.log(selected)
    return <div className="wrapper">
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
{
    data && data.length > 0 ?
    data.map(dataItem => <div className="item">
    <div onClick={
        enableMultiSelection
        ? () => handleMultiSelection(dataItem.id)
       : ()=>handleSingleSelection(dataItem.id)
       }
       className="title">
    <h3>{dataItem.course}</h3>
    <span>Show Syllabus /  Hide Syllabus</span>
    </div>
    {selected === dataItem.id ?
    <div className="content">{dataItem.learnMore}</div>
    : null
}
</div>)
    : <div> No data found! </div>
}
        </div>

    </div>
}