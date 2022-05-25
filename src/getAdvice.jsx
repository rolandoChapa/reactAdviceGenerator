import React from "react"
import axios from 'axios'
import Card from './Card'

export default function GetAdvice() {

    const [advice, setAdvice] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)

    let url = `https://api.adviceslip.com/advice`


    const getData = () => {
        setIsLoading(true)
        axios.get(url).then((response) => {
            setAdvice(response['data']['slip'])
            setIsLoading(false)
        })
    }

    React.useEffect(() => {
        setIsLoading(true)
        getData()
        setIsLoading(false)
    }, [])





    return (

        <Card
		key={advice.id}
		id={advice.id}
		advice={advice.advice}
		onClick={getData}

		/>

    )
}