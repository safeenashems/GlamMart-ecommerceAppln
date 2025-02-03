import banner from '../Assets/banner.png';
function Header(){
    return(
        <div className="Header" id="Header">  
         <div class="banner-text">
               <h6> GLOW LIKE NEVER BEFORE</h6>
                <h2>YOUR BEAUTY</h2>
                <h4>YOUR STYLE</h4>
        </div>           
                <img src={banner} className="banner-img" alt="Banner" />
        </div>
    )
}
export default Header;