
class SpecialHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
          <div id='preloader'>
        <div class='loader'>
            <img src="img/logo/motion-news-logo.png" width="200" alt="">
        </div>
    </div><!-- Preloader -->
    
         <header id="header" class="header sticky-header">

        <div class="top-header bg-dark">
            <div class="container">
                <div class="col-md-6">
                    <ul class="top-info">
                        <li><i class="ti-mobile"></i>91 62054-79618</li>
                        <li><a href="mailto:riyaaarajput90@gmail.com"><i class="ti-email"></i>riyaaarajput90@gmail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-6 text-right sm-text-left">
                    <ul class="top-social">
                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                        <li><a href="#"><i class="ti-twitter"></i></a></li>
                        <li><a href="#"><i class="ti-google"></i></a></li>
                        <li><a href="#"><i class="ti-pinterest"></i></a></li>
                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                       <li class="fz-13" id="current-date"></li>
                    </ul>
                    
                </div>
            </div>
        </div><!-- /.top-header -->   
         
            <div class="mid-header">
                <div class="container">
                    <div class="site-branding full-left">
                        <a href="index.html"><img src="img/logo/motion-news-logo.png" width="150" alt="News24"></a>
                    </div><!-- /.site-branding -->
                    <div class="banner pull-right">
                        <a href="#"><img src="motion-img/head-motion.webp" alt="News24 Banner"></a>
                    </div><!-- /.banner -->
                </div>
            </div><!-- /.mid-header -->    

        <div class="mainmenu-wrap bg-red">
            <div class="container">
                <div class="col-md-9 col-xs-6">
                    <div class="menu-wrap mean-menu">
                        <nav class="mainmenu">
                            <ul id="navi-menu">
                                <li class="current_page_item"><a href="index.html">Home</a></li>
                                <li><a href="sport.html">Sports</a></li>
                                <li><a href="national.html">National</a></li>
                                <li><a href="international.html">International </a></li>
                                <li><a href="entertainment.html">Entertainment</a></li>                              
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <form action="#" class="search-form">
                        <input type="text" placeholder="Search news..">
                        <button class="submit" type="submit"><i class="ti-search"></i></button>
                    </form>
                </div>
                <div class="mobile-menu"></div>
            </div>
        </div><!-- /.mainmenu-wrap -->

    </header><!-- /.header -->
        `
    }
}


class SpecialFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
           <footer class="footer-wrapper bg-dark">
        <div class="footer-widgets padding">
            <div class="container">
                <div class="col-md-4 col-xs-6 sm-padding">
                    <div class="single-widget">
                        <a href="#" class="footer-logo"><img src="img/logo/motion-news-logo.png" style="max-width: 162px;" class="img-responsive" alt="headlinesnation"></a>
                        <p class="text-light no-margin">Motion News is your go-to 24/7 source for real-time updates on global events. We stay ahead of trends and are always first to break the news, ensuring you're informed with the latest happenings around the world.</p>
                    </div>
                </div><!-- widget 1 -->
                <div class="col-md-4 col-xs-6 sm-padding">
                    <div class="single-widget">
                        <h3>Most Viwed</h3>
                        <div class="footer-posts">
                            <div class="footer-post">
                                <span class="date">September 28, 2024</span>
                                <h4><a href="#">Trump opens up new markets with Bibles, silver coins</a></h4>
                            </div>
                            <div class="footer-post">
                                <span class="date">Agust 28, 2024</span>
                                <h4><a href="#">RBI must step in,’ Congress on SBI ‘buying’ equity in defaulter Supreme Infrastructure</a></h4>
                            </div>
                        </div><!-- /.footer-posts -->
                    </div>
                </div><!-- widget 2 -->
                <div class="col-md-4 col-xs-12 sm-padding">
                    <div class="single-widget">
                        <h3>Most Viwed</h3>
                        <ul class="tag-list">
                            <li><a href="#">Worlds</a></li>
                            <li><a href="#">Entertainment</a></li>
                           
                            <li><a href="#">Football</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">International</a></li>
                         
                           
                         
                            <li><a href="#">Race</a></li>
                            <li><a href="#">Football</a></li>
                            
                        </ul>
                    </div>
                </div><!-- widget 3 -->
            </div>
        </div><!-- /.footer-widgets -->
        <div class="footer-copyright ptb-40">
            <div class="container">
                <div class="col-xs-6 xs-padding xs-text-center">
                    <p class="no-margin fz-13 text-light">&copy; Copyright Motion News 2024, All Rights Reserved</p>
                </div>
                <div class="col-xs-6 xs-padding">
                    <ul class="footer-social text-right xs-text-center">
                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                        <li><a href="#"><i class="ti-twitter"></i></a></li>
                        <li><a href="#"><i class="ti-google"></i></a></li>
                        <li><a href="#"><i class="ti-pinterest"></i></a></li>
                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer><!-- /.footer-wrapper -->
        
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)