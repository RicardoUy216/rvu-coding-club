import React from "react"
import { useState } from "react"
import dataFaq from "../dataFaq"
import './Faq.css'



export default function Faq() {
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
        <h2 className="faq">FREQUENTLY ASKED QUESTIONS</h2>
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
{
    dataFaq && dataFaq.length > 0 ?
    dataFaq.map(dataItem => <div className="item">
    <div onClick={
        enableMultiSelection
        ? () => handleMultiSelection(dataItem.id)
       : ()=>handleSingleSelection(dataItem.id)
       }
       className="title">
    <h3>{dataItem.question}</h3>
    <span>Show /Hide answer</span>
    </div>
    {selected === dataItem.id ?
    <div className="content">{dataItem.answer}</div>
    : null
}
</div>)
    : <div> No data found! </div>
}
        </div>

    </div>
}