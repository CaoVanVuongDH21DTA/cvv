import React, {useState} from "react";
import '../style/main.css'
import { Link } from 'react-router-dom';
import productsData from '../product.json'

export default function Main(){

    const itemProductHDToShow = 5; // Số lượng item cần hiển thị
    const totalProductHD = productsData.length; // Tổng số sản phẩm
    const [itemProductHDNumber, setItemProductHDNumber] = useState(0); // Vị trí hiện tại của item

    // Cập nhật vị trí của các item dựa trên số sản phẩm hiện tại
    const updateItemPrdHDList = () => {
        const itemWidth = 100 / itemProductHDToShow;
        const maxTranslateX = (totalProductHD - itemProductHDToShow) * itemWidth;
        const translateX = Math.max(0, Math.min(itemProductHDNumber * itemWidth, maxTranslateX));
        return {
            transform: `translate3d(-${translateX}%, 0, 0)`
        };
    };

    // Đặt kích thước và vị trí item ban đầu
    const setInitialPositionProductHD = () => {
        return {
            flex: `0 0 ${100 / itemProductHDToShow}%`
        };
    };

    // Xử lý nút bấm để trượt sang phải
    const handleRightClick = () => {
        setItemProductHDNumber((prevNumber) => {
            const newIndex = prevNumber + itemProductHDToShow;
            return newIndex >= totalProductHD ? 0 : newIndex; // Quay lại đầu danh sách nếu vượt quá
        });
    };

    // Xử lý nút bấm để trượt sang trái
    const handleLeftClick = () => {
        setItemProductHDNumber((prevNumber) => {
            const newIndex = prevNumber - itemProductHDToShow;
            return newIndex < 0 ? Math.max(0, totalProductHD - itemProductHDToShow) : newIndex;
        });
    };

    return(
        <div className="main">
            <div className="product_horizontal">
                <div className="top-prdhor">
                    <h1>Danh sách sản phẩm Laptop</h1>
                </div>
                <div className="listprd">
                    <div className="owl_stage_outer">
                        <div className="owl_stage" style={updateItemPrdHDList()}>
                            {productsData.map((product) => (
                                <div className="item" key={product.id} style={setInitialPositionProductHD()}>
                                    <div className="out-item">
                                        <Link to={`/product/${product.id}`} className="main_item">
                                            <div className="item-label">
                                            <span className="lb-tragop">
                                                Trả góp 0%
                                            </span>
                                            </div>
                                            <div className="img_item">
                                                <img src={product.imageUrl} alt={product.name}/>
                                            </div>
                                            <h3 className="proloop-name">
                                                <a href={`/product/${product.id}`}>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <div className="proloop-technical">
                                                <div className="profile-technical">
                                                    <i className="bi bi-cpu"></i>
                                                    <span>{product.cpu}</span>
                                                </div>
                                                <div className="profile-technical">
                                                    <i className="bi bi-gpu-card"></i>
                                                    <span>{product.gpu}</span>
                                                </div>
                                                <div className="profile-technical">
                                                    <i className="bi bi-memory"></i>
                                                    <span>{product.ram}</span>
                                                </div>
                                                <div className="profile-technical">
                                                    <i className="bi bi-device-ssd"></i>
                                                    <span>{product.storage}</span>
                                                </div>
                                                <div className="profile-technical">
                                                    <i className="bi bi-tv"></i>
                                                    <span>{product.screen}</span>
                                                </div>
                                                <div className="profile-technical">
                                                    <i className="bi bi-radar"></i>
                                                    <span>{product.refreshRate}</span>
                                                </div>
                                            </div>
                                            <strong className="price">
                                                {Number(product.price).toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}
                                                <small>{product.discount}</small>
                                            </strong>
                                            <div className="vote_txt">
                                                <div className="vote">
                                                    <b>{product.rating}</b>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                                <h4>({product.reviews})</h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="list_nav navHD">
                        <i className="bi bi-chevron-left" onClick={handleLeftClick}></i>
                        <i className="bi bi-chevron-right" onClick={handleRightClick}></i>
                    </div>
                </div>
            </div>

            <div className="block_product">
                <div className="box_content">
                    <ul className="listPrd">
                        {productsData.map((product) => (
                            <li className="item" key={product.id}>
                                <Link to={`/product/${product.id}`} className="main_item">
                                    <div className="item-label">
                                        <span className="lb-tragop">
                                            Trả góp 0%
                                        </span>
                                    </div>
                                    <div className="img_item">
                                        <img src={product.imageUrl} alt={product.name}/>
                                    </div>
                                    <h3 className="proloop-name">
                                        <a href={`/product/${product.id}`}>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="proloop-technical">
                                        <div className="profile-technical">
                                            <i className="bi bi-cpu"></i>
                                            <span>{product.cpu}</span>
                                        </div>
                                        <div className="profile-technical">
                                            <i className="bi bi-gpu-card"></i>
                                            <span>{product.gpu}</span>
                                        </div>
                                        <div className="profile-technical">
                                            <i className="bi bi-memory"></i>
                                            <span>{product.ram}</span>
                                        </div>
                                        <div className="profile-technical">
                                            <i className="bi bi-device-ssd"></i>
                                            <span>{product.storage}</span>
                                        </div>
                                        <div className="profile-technical">
                                            <i className="bi bi-tv"></i>
                                            <span>{product.screen}</span>
                                        </div>
                                        <div className="profile-technical">
                                            <i className="bi bi-radar"></i>
                                            <span>{product.refreshRate}</span>
                                        </div>
                                    </div>
                                    <strong className="price">
                                        {Number(product.price).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        })}
                                        <small>{product.discount}</small>
                                    </strong>
                                    <div className="vote_txt">
                                        <div className="vote">
                                            <b>{product.rating}</b>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <h4>({product.reviews})</h4>
                                    </div>
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <a href="" className="readmore">
                        <span>
                            Xem thêm
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}