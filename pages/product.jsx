import { useState, useEffect } from 'react'
import axios from 'axios'
// 
import Layout from "../components/Layout";

const Product = () => {
    const [meta, setMeta] = useState(null)
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios({
                "async": true,
                "crossDomain": true,
                "url": "https://restcountries.eu/rest/v2/all",
                "method": "GET"
            })
            setProduct(result.data)
        };
        fetchData()
        setMeta("AAAAAAA")
    }, [])

    return (
        <Layout title={"Product page"} meta={meta}>
            <div className="container-fluid pt-3">
                <div className="row">
                    {
                        product.map((v, i) => {
                            return (
                                <div className="col-3" key={i}>
                                    <div className="card">
                                        <img className="card-img-top" src="/static/images/image-not-found.png" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{v.name}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </Layout>
    )
}

export default Product