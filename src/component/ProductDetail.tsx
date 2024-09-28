import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../product.json'; // Import dữ liệu từ product.json
import '../style/productDetail.css'

interface Product {
    id: string;
    name: string;
    price: number;
    discount?: string;
    imageUrl: string;
    rating: string;
    reviews: string;
    originalPrice?: number;
}

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>(); // Lấy id từ URL
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [id]);

    const fetchProduct = (id: string) => {
        const foundProduct = productsData.find((prod) => prod.id === id);
        if (foundProduct) {
            // Chuyển đổi price
            setProduct({
                ...foundProduct,
                price: Number(foundProduct.price),
                originalPrice: foundProduct.originalPrice ? Number(foundProduct.originalPrice) : undefined
            });
        } else {
            setProduct(null);
        }
    };

    const formattedPrice = product?.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedOriginalPrice = product?.originalPrice ? product.originalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '';

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="productDetail">
            <div className="product-main">
                <div className="profile-product d-flex flex-wrap">
                    <div className="prd-galery col-lg-5 col-md-12 col-12">
                        <div className="img-prd">
                            <img src={product.imageUrl}
                                 alt={product.name}/>
                        </div>
                    </div>
                    <div className="prd-info col-lg-7 col-md-12 col-12">
                        <div className="info-wrapper">
                            <div className="content">
                                <div className="info-top">
                                    <h1>{product.name}</h1>
                                    <div className="vote_txt">
                                        <div className="vote">
                                            <b>{product.rating}</b>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <a href="/" target="_blank">
                                            Xem đánh giá
                                        </a>
                                    </div>
                                </div>
                                <div className="info-bottom">
                                    <div className="prd-price">
                                        <span className="price">{formattedPrice}</span>
                                        <del>{formattedOriginalPrice}</del>
                                        <span className="percent">{product.discount}</span>
                                    </div>
                                    <div className="prd-actions">
                                        <div className="action-buys">
                                            <button type={"submit"} className="btn-buy" id="btn-buy">
                                                <span>Mua ngay</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="prd-gift-sp">
                                        <p><span
                                            style={{color: "#ff0000"}}><strong>ƯU ĐÃI KHI MUA KÈM PC</strong></span></p>
                                        <p><span>
                                        <i className="bi bi-star-fill"></i>
                                        <a href="/" target="_blank">
                                            <strong>Ưu đãi lên đến 54% khi mua kèm PC</strong>
                                             xem ngay tại đây
                                        </a>
                                    </span></p>
                                        <hr/>
                                        <p><span style={{color: "#ff0000"}}><strong>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.</strong></span>
                                        </p>
                                        <p><span><em>(Hình ảnh PC chỉ mang tính chất minh họa).</em></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
