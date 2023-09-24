import '../App.css';
import productImage from '../images/image-product-desktop.jpg';
import cartIcon from '../images/icon-cart.svg'

export default function Card(){
    return(
        <div className="card-body">
            <section className="prod-img">
                {/*<img className='image' src={productImage} alt='bottle of perfume'/>*/}
            </section>
            <section className="prod-details">
                <h1 className='type'>PERFUME</h1>
                <h2 className='title'>Gabrielle Essence Eau De Parfum</h2>
                <p className='desc'>A floral, solar and voluptuous interpretation composed by 
                    <br />Olivier Polge, 
                    Perfumer-Creator 
                    <br />for the House of CHANEL.
                </p>
                <section className='price'>
                    <p className='discount'>$149.99</p>
                    <p className='original-price'>$169.99</p>
                </section>
                <button className='cart'><img className='cart-icon' src={cartIcon} alt='cart icon' /> Add to Cart</button>
            </section>
        </div>
    )
}