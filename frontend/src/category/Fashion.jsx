import React, { useState ,useEffect} from 'react'
import axios from 'axios'
function Fashion() {
    const [fashionItem,setFashionItem] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/api/product/get-all-fashion?fid=${"674ec3653441b8de1b6adb2c"}`)
          .then((d) => setFashionItem(d.data.result))
      }, [])
    return (
        <>
            <section className='min-h-screen h-auto bg-[url(C:\LEARNING\E-Commerce\frontend\src\assets\back.svg)] bg-no-repeat bg-cover'>
                <div className='container grid xl:grid-cols-4 py-5 gap-5 md:grid-cols-2 grid-cols-1'>
                    {
                        fashionItem.length > 0 ? "Items Shows" : "No Items available in fashion"
                    }
                </div>
            </section>
        </>
    )
}

export default Fashion