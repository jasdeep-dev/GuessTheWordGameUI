import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import 'tailwindcss/colors';
import {
  setTheColor
} from './colorSlice';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const colorsPallete = [
  "gray",
  "red",
  "orange",
  "amber",
  "yellow",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
]

const weights = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
]

function textColorClass(color) {
  return `text-${color.split('-')[0]}-${color.split('-')[1]}`;
}

function bgColorClass(color) {
  return `bg-${color.split('-')[0]}-${color.split('-')[1]}`;
}

function bgColor(color, weight) {
  return `bg-${color}-${weight}`;
}

export default function ColorPallete() {
  const dispatch = useDispatch()
  const [dynocolor, setDynoColor] = useState('pink-100');
  const [textcolor, setTextColor] = useState('pink-500');

  return (
    <>
      <Header/>
      <div class="grid grid-cols-3 gap-4">
        <div> 
          <p className={textColorClass(dynocolor)}>Choose the background-color</p>
          {colorsPallete.map(color => (
            <div key={color} className={`color-row ${color}`}>
              {weights.map(weight => (
                <button
                  key={`${color}-${weight}`}
                  className={`w-5 h-5 m-1 ${bgColor(color, weight)} border-1 `}
                  onClick= {()=> dispatch(setTheColor(`${color}-${weight}` || `pink-100`))}
                  // onClick={() => setDynoColor(`${color}-${weight}`)}
                >
                </button>

              ))}
            </div>
          ))}
        </div>
        <div> 
          Choose the text-color
          {colorsPallete.map(color => (
            <div key={color} className={`color-row ${color}`}>
              {weights.map(weight => (
                <button
                  key={`${color}-${weight}`}
                  className={`w-5 h-5 m-1 ${bgColor(color, weight)} border-1 `}
                  onClick={() => setTextColor(`${color}-${weight}`)}
                >
                </button>

              ))}
            </div>
          ))}
        </div>
        <div> 
          Select the backgroundColor
          {colorsPallete.map(color => (
            <div key={color} className={`color-row ${color}`}>
              {weights.map(weight => (
                <button
                  key={`${color}-${weight}`}
                  className={`w-5 h-5 m-1 ${bgColor(color, weight)} border-1 `}
                  onClick={() => setDynoColor(`${color}-${weight}`)}
                >
                </button>

              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
