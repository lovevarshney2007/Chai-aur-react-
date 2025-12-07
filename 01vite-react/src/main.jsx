// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App Lv</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }



const anotherElement = (
    <a href="https://google.com" target='_black'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank' },
    'Click me to visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App/>
    reactElement
    // anotherElement
    // ReactElement
    // <MyApp/>
    // MyApp()
 
)
