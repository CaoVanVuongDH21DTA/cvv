import React, {useState} from 'react';
import '../style/header.css'
import product from '../product.json';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header () {

    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Kiểm tra nếu có nội dung trong ô tìm kiếm, hiển thị dropdown
        if (value.trim()) {
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
        }
    };

    // Lấy tối đa 6 sản phẩm
    const visibleProducts = product.slice(0, 6);

    return(
        <header>
            <div className="header_top">
                <div className="container">
                    <div className="row-header">
                        <div className="left-header">
                            <a href="/" className="header_logo">
                                <img src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg"/>
                            </a>
                            <div className="header-item menu">
                                <div className="header-text">
                                    <a href="/" className="header_link">
                                        <span className="box-icon">
                                            <i className="bi bi-list"></i>
                                        </span>
                                        <span className="box-text">Danh mục</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="right-header">
                            <div className="header-item search">
                                <div className="search-box">
                                    <form action="/search" className="search_product" id="search_product">
                                        <div className="search-inner">
                                            <input type="hidden" name="tyle" value="product"/>
                                            <input required id="inputSearchAuto" className="inputSearch" maxLength={40}
                                                   autoComplete="off" type="text" size={20}
                                                   placeholder="Bạn cần tìm gì?"
                                                    value={searchTerm}
                                                   onChange={handleInputChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn-search" id="btn-search">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </form>
                                    {isDropdownVisible && (
                                        <div className="search-dropdown">
                                            <div className="resultsContent">
                                                {visibleProducts.map((product) => (
                                                    <div key={product.id} className="item-ult">
                                                        <div className="title">
                                                            <a href="/" title={product.name}>
                                                                {product.name}
                                                            </a>
                                                            <p>
                                                                <span>{product.price}</span>
                                                                <del>{product.originalPrice}</del>
                                                            </p>
                                                        </div>
                                                        <div className="thumbs">
                                                            <a href="/" title={product.name}>
                                                                <img alt={product.name} src={product.imageUrl} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                                {/* Hiển thị liên kết "Xem thêm sản phẩm" nếu có nhiều hơn 5 sản phẩm */}
                                                {product.length > 6 && (
                                                    <div className="view-more">
                                                        <a href="/search">Xem thêm sản phẩm...</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="header-item hotline">
                                <div className="header-text">
                                    <a className="header_link" href="tel:19005301" title="Hotline" aria-label="hotline">
                                        <span className="box-icon">
                                            <i className="bi bi-headset"></i>
                                        </span>
                                        <span className="box-text">
                                            Hotline <br/> 1900.5301
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="header-item showroom">
                                <div className="header-text">
                                    <a className="header_link" href="/" title="hệ thống Showroom"
                                       aria-label="hệ thống Showroom">
                                        <span className="box-icon">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                        <span className="box-text">
                                            Hệ thống <br/> Showroom
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="header-item ordertracking">
                                <div className="header-text">
                                    <a className="header_link" href="/" title="Tra cứu đơn hàng"
                                       aria-label="Tra cứu đơn hàng">
                                        <span className="box-icon">
                                            <i className="bi bi-clipboard2-data"></i>
                                        </span>
                                        <span className="box-text">
                                            Tra cứu <br/> đơn hàng
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="header-item cart">
                                <div className="header-text">
                                    <a className="header_link" href="/" title="Giỏ hàng" aria-label="Giỏ hàng">
                                        <span className="box-icon">
                                            <i className="bi bi-cart"></i>
                                            <span className="count-holder">
                                                <span className="count">0</span>
                                            </span>
                                        </span>
                                        <span className="box-text">
                                            Giỏ <br/> hàng
                                        </span>
                                    </a>
                                </div>
                                <div className="dropdown-cart">
                                    <div className="your-cart">
                                        <div className="cart-title">
                                            <h3>Your Cart</h3>
                                        </div>
                                        <div className="cart-content">
                                            <div className="item-cart">
                                                <div className="img-prd">
                                                    <img src="https://product.hstatic.net/200000722513/product/676vn_21da8c4630014f808b321b3d32118291_69f68ad8d3be44b385bb3da80ec4a9ee_medium.png" alt="product"/>
                                                </div>
                                                <div className="name-prd">
                                                    <h5>Laptop</h5>
                                                </div>
                                                <div className="quanlity">
                                                    <button className="btn-up">
                                                        <i className="bi bi-plus-lg"></i>
                                                    </button>
                                                    <span>1</span>
                                                    <button className="btn-down">
                                                        <i className="bi bi-dash-lg"></i>
                                                    </button>
                                                </div>
                                                <div className="price-prd">
                                                    1000000
                                                </div>
                                                <div className="delete-prd">
                                                    <button className="btn-delete">
                                                        <i className="bi bi-trash3"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-total">
                                            <span>Total: 1000000</span>
                                            <button>Check out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="header-item account">
                                <div className="header-text">
                                    <a className="header_link" href="/" title="Tài khoản" aria-label="Tài khoản">
                                        <span className="box-icon">
                                            <i className="bi bi-person"></i>
                                        </span>
                                        <span className="box-text">
                                            Đăng <br/> nhập
                                        </span>
                                    </a>
                                </div>

                                <div className="header-dropdown">
                                    <div className="box-account">
                                        <p>
                                            <span><i className="bi bi-person-raised-hand"></i></span>
                                            <span>Xin chào, vui lòng đăng nhập</span>
                                        </p>
                                        <div className="btn-login-register">
                                            <button className="btn-account">Đăng nhập</button>
                                            <button className="btn-account">Đăng ký</button>
                                        </div>
                                        <p>
                                            <span><i className="bi bi-question-circle"></i></span>
                                            <a href="/">Trợ giúp</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}