import type { FC } from "react"
interface Props {
    searches: string[]
}
export const PreviousSearches: FC<Props> = ({ searches }) => {
    return (
        <div className="previous-searches">
            <h3> Busquedas previas </h3>
            <ul className="previous-searches-list">
                {
                    searches.map((gif) => (
                        <li key={gif}> {gif} </li>
                    ))
                }
            </ul>
        </div>
    )
}
