import type { FC } from "react"
import type { Gif } from "../db/data"
interface Props{
    gifsList:Gif[]
}
export const GifsList:FC<Props> = ({gifsList}) => {
    return (
        <div className='gifs-container'>
            {
                gifsList.map((gif) => (
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}
