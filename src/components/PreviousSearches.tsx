import type { FC } from "react"
interface Props {
    searches: string[],
    onClicklbl: (arg:string)=>void
}
export const PreviousSearches: FC<Props> = ({ searches, onClicklbl }) => {
    return (
        <div className="previous-searches">
            <h3> Busquedas previas </h3>
            <ul className="previous-searches-list">
                {
                    searches.map((gif) => (
                        <li key={gif} onClick={()=>onClicklbl(gif)} > {gif} </li>
                    ))
                }
            </ul>
        </div>
    )
}
