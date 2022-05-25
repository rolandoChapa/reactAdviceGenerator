import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card'
import GetAdvice from './getAdvice'
import './index.css'
import 'flowbite'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  	<div className="flex justify-center items-center h-screen">
  	<GetAdvice />
  	</div>
  </React.StrictMode>
)