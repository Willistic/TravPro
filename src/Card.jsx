import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./index.css"

function Card({ hotels }) {
  return (
    <div className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {hotels.map((data) => (
            <article className='bg-white shadow p-5' key={data.listing_id}>
                <button style={{backgroundColor: "#efc713", float: "right"}}>On Map</button>
                <h3 className='text-2xl mb-3'>{data.company}</h3>
                <p>{data.city}</p>
                <p>{data.phone}</p>
                <p>{data.addr1}</p>
                <p>{data.category}</p>
                <ArrowForwardIcon style={{ border: "1px solid", borderRadius: "50%"}} />
            </article>
        ))}
    </div>
  )
}

export default Card