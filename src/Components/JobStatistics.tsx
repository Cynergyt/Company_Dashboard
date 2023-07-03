import '../assets/styles/JobStatistics.scss'
import VerticalBarChart from "./VerticalBarChart"

function JobStatistics(): JSX.Element {
    return(
        <div className='jobstatistics'>

            <div className="title">
                <div className="left-element">Job Statistics</div>
                
                    
                <div className="right-element">
                    <div
                        className="dot"
                        style={{ backgroundColor: '#0D75BC', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px' }}
                    ></div><div className='text'> Job View</div>

                    
                    <div
                        className="dot"
                        style={{ backgroundColor: '#F3723F', width: '10px', height: '10px', borderRadius: '50%', marginRight: '10px'}}
                    ></div> <div className='text'> Job Applied </div>
                    <div >
                        <select className='drop-down-year'>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                </div>
            </div>
            <div style={{position: "relative", height: "300px"}}>
                <VerticalBarChart/>
            </div>
            
        </div>
    )
}
export default JobStatistics