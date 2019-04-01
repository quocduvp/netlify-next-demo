import { useState, useEffect } from 'react'
import axios from 'axios'
// 
import Layout from "../components/Layout";

const Product = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios({
            "async": true,
            "crossDomain": true,
            "url": "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc",
            "method": "GET"
        }).then(res => {
            setProduct(res.data.items)
        })
        // console.log(product)
    })

    return (
        <Layout title={"Product page"}>
            <div className="container-fluid pt-3">
                <div className="row">
                {
                    product.map((v, i) => {
                        return(
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