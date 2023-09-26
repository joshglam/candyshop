import CandyCard from "./CandyCard"
import Search from "./Search"

export default function CandyContainer() {
    return (
        <div>
            <p> header for candy container </p>
            <Search />
            <div>
               {/* here you'll .map the candy cards */}
                <CandyCard />
            </div>
        </div>
    )
    )
}