import '../assets/styles/JobStatistics.scss'
import VerticalBarChart from "./VerticalBarChart"

function JobStatistics(): JSX.Element {
    return(
        <div className='jobstatistics'>

            <div className="title">
                <div className="left-element">Job Statistics</div>
                <div className="right-element">
                    <div className='drop-down-year'>
                        <select>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                </div>
            </div>
            
            <VerticalBarChart/>
        </div>
    )
}
export default JobStatistics