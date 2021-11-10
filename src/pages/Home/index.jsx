import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from "reactstrap";
import Style from 'style-it';

const useStyles = makeStyles((theme) => ({
  scaffold: {

  },
  topContent: {
    background: 'url("images/ecommerce_background.png") no-repeat center center/cover',
    height: '88vh',
    width: '100vw',
  },
  container: {
    paddingLeft: '350px',
    paddingTop: '150px',
  },
  header: {
    fontWeight: '600',
    color: '#FB2E86',
  },
  title: {
    fontWeight: '900',
    fontSize: '38px',
  },
  description: {
    color: '#8A8FB9'
  },
  shopNowBtn: {
    backgroundColor: "#FB2E86",
    border: 'none',
    padding: '10px 25px',
  },
  products: {
    padding: '80px 100px',
  },
  productsHeader: {
    color: '#1A0B5B',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: '900',
    margin: '0 0 10px',
  },
  featuredProductsContainer: {
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: '20px',
    padding: '20px 100px 0',
  },
  featuredProductCard: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 1px 5px #888888',
  },
  featuredProductDescription: {
    display: 'inline-block',
  },
  featuredProductDescription: {
    padding: '15px',
    backgroundColor: '#FFFFFF',
  },
  featuredProductHeader: {
    display: 'inline-block',
    backgroundColor: "#F6F7FB",
    padding: '30px',
    textAlign: 'center',
  },
  featuredChair: {
    width: '150px',
    height: '120px',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#FB2E86',
    fontSize: '20px',
    fontWeight: '600',
    margin: '0',
  },
  threeSymbols: {
    margin: '0 auto',
    textAlign: 'center',
    padding: '0',
  },
  greenSymbol: {
    display: 'inline-block',
    backgroundColor: '#05E6B7',
    borderRadius: '5px',
    width: '25px',
    height: '7px',
  },
  purpleSymbol: {
    display: 'inline-block',
    backgroundColor: '#F701A8',
    borderRadius: '5px',
    width: '25px',
    height: '7px',
    margin: '0 10px'
  },
  blueSymbol: {
    display: 'inline-block',
    backgroundColor: '#00009D',
    borderRadius: '5px',
    width: '25px',
    height: '7px',
  },
  code: {
    textAlign: 'center',
    color: '#151875',
    margin: '10px 0',
    fontWeight: '500',
  },
  price: {
    textAlign: 'center',
    color: '#151875',
    margin: 0,
    fontWeight: '500',
  },
  latestProductsContainer: {
    margin: '60px 0 30px 0',
  },
  latestProductsTagsContainer: {
    margin: '0 auto',
    textAlign: 'center',
  },
  latestProductTag: {
    margin: '0 20px',
    textDecoration: 'none',
    color: '#00009D',
  },
  latestProductImage: {
    backgroundColor: "#F7F7F7",
    padding: '15px 30px',
    textAlign: 'center',
  },
  latestImg: {
    width: '200px',
    height: '200px',
  },
  latestProductDescription: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginTop: '10px',
    fontWeight: '600',
    color: '#151875'
  },
  crossedPrice: {
    marginLeft: '10px',
    color: '#FB2E86',
  },
  featuredProductName: {
    borderBottom: "3px solid #EEEFFB",
    paddingBottom: '2px',
  },
  offerContainer: {
    padding: '30px 100px 0',
  },
  shopexOffers: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    marginTop: '50px',
  },
  offerCard: {
    textAlign: 'center',
    padding: '15px',
    boxShadow: '1px 1px 4px #888888',
  },
  offerCardHeader: {
    margin: '20px 0',
  },
  offerCardImg: {
    marginTop: '20px',
    width: '100px',
    height: '80px',
  },
  uniqueFeatures: {
    background: 'url("images/unique-feature.png") no-repeat center center/cover',
    height: '60vh',
    width: '100vw',
    paddingLeft: '53vw',
    paddingTop: '60px',
  },
  uniqueFeaturesHeader: {
    color: '#151875',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  uniqueFeaturesUl: {
    
  },
  uniqueFeatureLi: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '180px',
    color: '#ACABC3',
    fontSize: '16px',
  },
  uniqueFeatureCircle: {
    marginRight: '10px',
  },
  buttonAndPrice: {
    display: 'flex',
    marginTop: '30px',
  },
  addToCartBtn: {
    backgroundColor: "#FB2E86",
    border: 'none',
    padding: '10px 25px',
    marginRight: '20px',
  },
  uniqueFeatureProduct: {
    margin: '0',
    color: '#151875',
    fontWeight: '600',
  },
  uniqueFeaturePrice: {
    margin: '0',
    color: '#151875',
  },
  trendingProducts: {
    padding: '80px 100px',
  },
  trendingProductsTitle: {
    textAlign: 'center',
    color: '#151875',
    fontSize: '30px',
    fontWeight: '900',
    marginBottom: '40px',
  },
  trendingProductsImagesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    padding: '0 100px',
  },
  trendingProductCard: {
    padding: '10px',
    boxShadow: '1px 1px 5px #888888',
  },
  trendingProductImg: {
    backgroundColor: '#F5F6F8',
    textAlign: 'center',
    padding: '45px 20px',
  },
  trendingProductDescription: {
    padding: '10px',
  },
  trendingProductCardTitle: {
    textAlign: 'center',
    color: '#151875',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  trendingProductCardPriceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  trendingProductCardPrice: {
    color: '#151875',
  },
  trendingProductCardPriceCrossed: {
    color: '#151875',
    opacity: '0.3',
  },
  trendingProductCardImgProduct: {
    width: '180px',
    height: '150px',
  },
  discountProductImagesContainer: {
    padding: '0 100px 0 100px',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    margin: '40px 0 0',
    gridGap: '20px',
  },
  discountProducts: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    height: '300px',
  },
  topDiscountProduct: {
    backgroundColor: '#FFF6FB',
    padding: '15px',
    width: '48%',
    height: '90%',
  },
  bottomDiscountProduct: {
    backgroundColor: '#EEEFFB',
    padding: '15px',
    width: '48%',
    height: '90%',
    marginTop: '80px',
  },
  discountTagImg: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  discountProductTitle: {
    margin: '0 0 10px',
    color: '#151875',
    fontSize: '22px',
    fontWeight: '600',
  },
  discountProductTag: {
    color: '#FB2E86',
  },
  discountProductImg: {
    width: '150px',
    height: '180px',
  },
  discountProductImgBottom: {
    height: '180px',
    width: '250px',
    marginLeft: 'auto',
  },
  executiveProducts: {
  },
  executiveProductCard: {
    display: 'flex',
    marginBottom: '20px',
  },
  executiveProductCardImg: {
    width: '60px',
    height: '60px',
  },
  executiveProductCardDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  executiveProductCardTitle: {
    margin: '0 0 5px',
    color: '#151875',
    fontWeight: '600',
  },
  executiveProductCardPrice: {
    margin: '0',
    color: '#151875',
  },
  executiveProductCardImgContainer: {
    backgroundColor: "#F5F6F8",
    marginRight: '10px',
    padding: '10px 15px',
  },
  discountItemContainer: {
    
  },
  discountItemTitle: {
    textAlign: 'center',
    color: "#151875",
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  discountItemTagsContainer: {
    textAlign: 'center',
  },
  discountItemTagMiddle: {
    margin: '0 45px',
  },
  discountItemTag: {
    textDecoration: 'none',
    color: '#151875',
  },
  discountItemImg: {
    width: '400px',
  },
  discountItemSubContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0 250px 0 200px',
  },
  discountItemDescriptionContainer: {
    paddingTop: '100px',
  },
  discountItemSubTitle: {
    color: '#151875',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  discountItemSubSubtitle: {
    color: "#FB2E86",
    fontSize: '20px',
  },
  discountItemDescription: {
    color: "#B7BACB",
  },
  discountItemPlusContainer: {
    marginBottom: '15px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  discountItemPlus: {
    color: "#B7BACB",
  },
  discountItemCheck: {
    color: "#7569B2",
  },
  topCategoriesContainer: {
    padding: '10px 200px 100px',
  },
  topCategoriesTitle: {
    textAlign: 'center',
    color: "#151875",
    fontSize: '36px',
    fontWeight: 'bold',
  },
  topCategoriesImagesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
  },
  topCategoriesImageContainer: {
    backgroundColor: '#F6F7FB',
    borderRadius: '50%',
    textAlign: 'center',
    padding: '30px',
  },
  topCategoriesImg: {
    width: '120px',
    height: '150px',
  },
  topCategoriesProductName: {
    color: "#151875",
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '10px 0'
  },
  topCategoriesPrice: {
    color: "#151875",
    textAlign: 'center',
    margin: '0',
  },
  newsletterContainer: {
    background: 'url("images/newsletter-bg.png") no-repeat center center/cover',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsletterTitle: {
    color: "#151875",
    fontSize: '36px',
    fontWeight: 'bold',
  },
  newsletterContent: {
    textAlign: 'center',
  },
  sponsorsContainer: {
    textAlign: 'center',
    margin: '80px 0',
  },
  latestBlogContainer: {
    padding: '0 200px 150px',
  },
  latestBlogTitle: {
    textAlign: 'center',
    color: "#151875",
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  latestBlogCardsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '30px',
  },
  latestBlogCard: {
    boxShadow: '1px 1px 5px #888888',
  },
  latestBlogCardDescriptionContainer: {
    padding: '15px',
  },
  latestBlogIcons: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    color: "#151875",
  },
  latestBlogCardTitle: {
    margin: '15px 0',
    color: "#151875",
    fontWeight: 'bold',
    fontSize: '20px',
  },
  latestBlogCardDescription: {
    color: "#72718F",
  },
  latestBlogCardTag: {
    color: "#151875",
  },
  latestBlogImg: {
    width: '100%'
  }
}));

const Home = () => {
  const classes = useStyles();
  return Style.it(`
    .latestProductsImagesContainer {
      padding: 0 100px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      margin: 20px 0 0;
    }

    .firstImageContainer {
      margin: 20px 0 100px 0;
    }
    `,
    <div className={classes.scaffold}>
      <div className={classes.topContent}>
        <div className={classes.container}>
          <p className={classes.header}>Best Furniture For Your Castle...</p>
          <p className={classes.title}>New Furniture Collection<br/>Trends in 2020</p>
          <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adispiscing elit.<br/>Magna in est adipiscing in phasellus non in justo.</p>
          <Button color="primary" className={classes.shopNowBtn}>
            <span>Shop Now</span>            
          </Button>
        </div>
      </div>
      <div className={classes.products}>
        <div className={classes.featuredProducts}>
          <p className={classes.productsHeader}>Featured Products</p>
          <div className={classes.featuredProductsContainer}>
            <div className={classes.featuredProductCard}>
              <div className={classes.featuredProductHeader}>
                <img className={classes.featuredChair} src="images/chair-1.png"/>
              </div>
              <div className={classes.featuredProductDescription}>
                <p className={classes.cardHeader}>Cantilever chair</p>
                <div className={classes.threeSymbols}>
                  <div className={classes.greenSymbol}></div>
                  <div className={classes.purpleSymbol}></div>
                  <div className={classes.blueSymbol}></div>
                </div>
                <p className={classes.code}>Code - Y523201</p>
                <p className={classes.price}>Rp 500.000</p>
              </div>
            </div>
            <div className={classes.featuredProductCard}>
              <div className={classes.featuredProductHeader}>
                <img className={classes.featuredChair} src="images/chair-2.png"/>
              </div>
              <div className={classes.featuredProductDescription}>
                <p className={classes.cardHeader}>Cantilever chair</p>
                <div className={classes.threeSymbols}>
                  <div className={classes.greenSymbol}></div>
                  <div className={classes.purpleSymbol}></div>
                  <div className={classes.blueSymbol}></div>
                </div>
                <p className={classes.code}>Code - Y523201</p>
                <p className={classes.price}>Rp 500.000</p>
              </div>
            </div>
            <div className={classes.featuredProductCard}>
              <div className={classes.featuredProductHeader}>
                <img className={classes.featuredChair} src="images/chair-3.png"/>
              </div>
              <div className={classes.featuredProductDescription}>
                <p className={classes.cardHeader}>Cantilever chair</p>
                <div className={classes.threeSymbols}>
                  <div className={classes.greenSymbol}></div>
                  <div className={classes.purpleSymbol}></div>
                  <div className={classes.blueSymbol}></div>
                </div>
                <p className={classes.code}>Code - Y523201</p>
                <p className={classes.price}>Rp 500.000</p>
              </div>
            </div>
            <div className={classes.featuredProductCard}>
              <div className={classes.featuredProductHeader}>
                <img className={classes.featuredChair} src="images/chair-4.png"/>
              </div>
              <div className={classes.featuredProductDescription}>
                <p className={classes.cardHeader}>Cantilever chair</p>
                <div className={classes.threeSymbols}>
                  <div className={classes.greenSymbol}></div>
                  <div className={classes.purpleSymbol}></div>
                  <div className={classes.blueSymbol}></div>
                </div>
                <p className={classes.code}>Code - Y523201</p>
                <p className={classes.price}>Rp 500.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.latestProductsContainer}>
          <p className={classes.productsHeader}>Latest Products</p>
          <div className={classes.latestProductsTagsContainer}>
            <a className={classes.latestProductTag} href="#">New Arrival</a>
            <a className={classes.latestProductTag} href="#">Best Seller</a>
            <a className={classes.latestProductTag} href="#">Featured</a>
            <a className={classes.latestProductTag} href="#">Special Offer</a>
          </div>
          <div className="latestProductsImagesNthChild">
            <div className="latestProductsImagesContainer firstImageContainer">
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-5.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-6.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-7.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="latestProductsImagesContainer">
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-8.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-9.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
              <div className={classes.latestProductCard}>
                <div className={classes.latestProductImage}>
                  <img className={classes.latestImg} src="images/chair-10.png"/>
                </div>
                <div className={classes.latestProductDescription}>
                  <span className={classes.featuredProductName}>Comfort Handy Craft</span>
                  <div className={classes.latestProductPrice}>
                    <span>Rp 500.000</span>
                    <span className={classes.crossedPrice}><s>Rp 750.000</s></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.offerContainer}>
          <p className={classes.productsHeader}>What Shopex Offer!</p>
          <div className={classes.shopexOffers}>
            <div className={classes.offerCard}>
              <img className={classes.offerCardImg} src="images/offer-1.png"/>
              <p className={classes.offerCardHeader}>Free Delivery</p>
              <p className={classes.offerCardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={classes.offerCard}>
              <img className={classes.offerCardImg} src="images/offer-2.png"/>
              <p className={classes.offerCardHeader}>Free Delivery</p>
              <p className={classes.offerCardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={classes.offerCard}>
              <img className={classes.offerCardImg} src="images/offer-3.png"/>
              <p className={classes.offerCardHeader}>Free Delivery</p>
              <p className={classes.offerCardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className={classes.offerCard}>
              <img className={classes.offerCardImg} src="images/offer-4.png"/>
              <p className={classes.offerCardHeader}>Free Delivery</p>
              <p className={classes.offerCardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.uniqueFeatures}>
        <span className={classes.uniqueFeaturesHeader}>Unique Features Of Latest &<br/>Trending Products</span>
        <div className={classes.uniqueFeaturesUl}>
          <div className={classes.uniqueFeatureLi}><img className={classes.uniqueFeatureCircle} src="images/red-circle.png"/>All frames constructed with hardwood solids and laminates</div>
          <div className={classes.uniqueFeatureLi}><img className={classes.uniqueFeatureCircle} src="images/blue-circle.png"/>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</div>
          <div className={classes.uniqueFeatureLi}><img className={classes.uniqueFeatureCircle} src="images/green-circle.png"/>Arms, backs and seats are structurally reinforced</div>
        </div>
        <div className={classes.buttonAndPrice}>
          <Button color="primary" className={classes.addToCartBtn}>
            <span>Add To Cart</span>            
          </Button>
          <div>
            <p className={classes.uniqueFeatureProduct}>B&B Italian Sofa</p>
            <p className={classes.uniqueFeaturePrice}>Rp 1.500.000</p>
          </div>
        </div>
      </div>
      <div className={classes.trendingProducts}>
        <p className={classes.trendingProductsTitle}>Trending Products</p>
        <div className={classes.trendingProductsImagesContainer}>
          <div className={classes.trendingProductCard}>
            <div className={classes.trendingProductImg}>
              <img className={classes.trendingProductCardImgProduct} src="images/chair-1.png" alt="Ay" />
            </div>
            <div className={classes.trendingProductDescription}>
              <p className={classes.trendingProductCardTitle}>Cantlever chair</p>
              <div className={classes.trendingProductCardPriceContainer}>
                <span className={classes.trendingProductCardPrice}>Rp 250.000</span>
                <span className={classes.trendingProductCardPriceCrossed}><s>Rp 400.000</s></span>
              </div>
            </div>
          </div>
          <div className={classes.trendingProductCard}>
            <div className={classes.trendingProductImg}>
              <img className={classes.trendingProductCardImgProduct} src="images/chair-2.png" alt="Ay" />
            </div>
            <div className={classes.trendingProductDescription}>
              <p className={classes.trendingProductCardTitle}>Cantlever chair</p>
              <div className={classes.trendingProductCardPriceContainer}>
                <span className={classes.trendingProductCardPrice}>Rp 250.000</span>
                <span className={classes.trendingProductCardPriceCrossed}><s>Rp 400.000</s></span>
              </div>
            </div>
          </div>
          <div className={classes.trendingProductCard}>
            <div className={classes.trendingProductImg}>
              <img className={classes.trendingProductCardImgProduct} src="images/chair-3.png" alt="Ay" />
            </div>
            <div className={classes.trendingProductDescription}>
              <p className={classes.trendingProductCardTitle}>Cantlever chair</p>
              <div className={classes.trendingProductCardPriceContainer}>
                <span className={classes.trendingProductCardPrice}>Rp 250.000</span>
                <span className={classes.trendingProductCardPriceCrossed}><s>Rp 400.000</s></span>
              </div>
            </div>
          </div>
          <div className={classes.trendingProductCard}>
            <div className={classes.trendingProductImg}>
              <img className={classes.trendingProductCardImgProduct} src="images/chair-4.png" alt="Ay" />
            </div>
            <div className={classes.trendingProductDescription}>
              <p className={classes.trendingProductCardTitle}>Cantlever chair</p>
              <div className={classes.trendingProductCardPriceContainer}>
                <span className={classes.trendingProductCardPrice}>Rp 250.000</span>
                <span className={classes.trendingProductCardPriceCrossed}><s>Rp 400.000</s></span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.discountProductImagesContainer}>
          <div className={classes.discountProducts}>
            <div className={classes.topDiscountProduct}>
              <p className={classes.discountProductTitle}>23% off in all products</p>
              <div className={classes.discountTagImg}>
                <a className={classes.discountProductTag} href="#">Shop Now</a>
                <img className={classes.discountProductImg} src="images/speaker.png" />
              </div>
            </div>
            <div className={classes.bottomDiscountProduct}>
              <p className={classes.discountProductTitle}>23% off in all products</p>
              <a className={classes.discountProductTag} href="#">View Collection</a>
              <div className={classes.discountTagImg}>
                <img className={classes.discountProductImgBottom} src="images/drawboard.png" />
              </div>
            </div>
          </div>
          <div className={classes.executiveProducts}>
            <div className={classes.executiveProductCard}>
              <div className={classes.executiveProductCardImgContainer}>
                <img className={classes.executiveProductCardImg} src="images/executive-1.png" />
              </div>
              <div className={classes.executiveProductCardDescription}>
                <p className={classes.executiveProductCardTitle}>Executive Seat Chair</p>
                <p className={classes.executiveProductCardPrice}>Rp 400.000</p>
              </div>
            </div>
            <div className={classes.executiveProductCard}>
              <div className={classes.executiveProductCardImgContainer}>
                <img className={classes.executiveProductCardImg} src="images/executive-2.png" />
              </div>
              <div className={classes.executiveProductCardDescription}>
                <p className={classes.executiveProductCardTitle}>Executive Seat Chair</p>
                <p className={classes.executiveProductCardPrice}>Rp 400.000</p>
              </div>
            </div>
            <div className={classes.executiveProductCard}>
              <div className={classes.executiveProductCardImgContainer}>
                <img className={classes.executiveProductCardImg} src="images/executive-3.png" />
              </div>
              <div className={classes.executiveProductCardDescription}>
                <p className={classes.executiveProductCardTitle}>Executive Seat Chair</p>
                <p className={classes.executiveProductCardPrice}>Rp 400.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.discountItemContainer}>
        <p className={classes.discountItemTitle}>Discount Item</p>
        <div className={classes.discountItemTagsContainer}>
          <a className={classes.discountItemTag} href="#">Wood Chair</a>
          <a className={[classes.discountItemTag, classes.discountItemTagMiddle].join(' ')} href="#">Plastic Chair</a>
          <a className={classes.discountItemTag} href="#">Sofa Collection</a>
        </div>
        <div className={classes.discountItemSubContainer}>
          <div className={classes.discountItemDescriptionContainer}>
            <p className={classes.discountItemSubTitle}>20% Discount Of All Products</p>
            <p className={classes.discountItemSubSubtitle}>Eams Sofa Compact</p>
            <p className={classes.discountItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <div className={classes.discountItemPlusContainer}>
              <span className={classes.discountItemPlus}><FontAwesomeIcon className={classes.discountItemCheck} icon={faCheck} /> Material expose like metals</span>
              <span className={classes.discountItemPlus}><FontAwesomeIcon className={classes.discountItemCheck} icon={faCheck} /> Clear lines and geomatric figures</span>
            </div>
            <div className={classes.discountItemPlusContainer}>
              <span className={classes.discountItemPlus}><FontAwesomeIcon className={classes.discountItemCheck} icon={faCheck} /> Simple neutral colours.</span>
              <span className={classes.discountItemPlus}><FontAwesomeIcon className={classes.discountItemCheck} icon={faCheck} /> Material expose like metals.</span>
            </div>
            <Button color="primary" className={classes.shopNowBtn}>
              <span>Shop Now</span>            
            </Button>
          </div>
          <div className={classes.discountProductImageContainer}>
            <img className={classes.discountItemImg} src="images/discount-chair.png" alt="ay" />
          </div>
        </div>
      </div>
      <div className={classes.topCategoriesContainer}>
        <p className={classes.topCategoriesTitle}>Top Categories</p>
        <div className={classes.topCategoriesImagesContainer}>
          <div className={classes.topCategoriesCard}>
            <div className={classes.topCategoriesImageContainer}>
              <img className={classes.topCategoriesImg} src="images/chair-1.png" alt="ay" />
            </div>
            <div className={classes.topCategoriesDescriptionContainer}>
              <p className={classes.topCategoriesProductName}>Mini LCW Chair</p>
              <p className={classes.topCategoriesPrice}>Rp 250.000</p>
            </div>
          </div>
          <div className={classes.topCategoriesCard}>
            <div className={classes.topCategoriesImageContainer}>
              <img className={classes.topCategoriesImg} src="images/chair-2.png" alt="ay" />
            </div>
            <div className={classes.topCategoriesDescriptionContainer}>
              <p className={classes.topCategoriesProductName}>Mini LCW Chair</p>
              <p className={classes.topCategoriesPrice}>Rp 250.000</p>
            </div>
          </div>
          <div className={classes.topCategoriesCard}>
            <div className={classes.topCategoriesImageContainer}>
              <img className={classes.topCategoriesImg} src="images/chair-3.png" alt="ay" />
            </div>
            <div className={classes.topCategoriesDescriptionContainer}>
              <p className={classes.topCategoriesProductName}>Mini LCW Chair</p>
              <p className={classes.topCategoriesPrice}>Rp 250.000</p>
            </div>
          </div>
            <div className={classes.topCategoriesCard}>
            <div className={classes.topCategoriesImageContainer}>
              <img className={classes.topCategoriesImg} src="images/chair-4.png" alt="ay" />
            </div>
            <div className={classes.topCategoriesDescriptionContainer}>
              <p className={classes.topCategoriesProductName}>Mini LCW Chair</p>
              <p className={classes.topCategoriesPrice}>Rp 250.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.newsletterContainer}>
        <div className={classes.newsletterContent}>
          <p className={classes.newsletterTitle}>Get Latest Update By Subscribing<br/>To Our Newsletter</p>
          <Button color="primary" className={classes.shopNowBtn}>
            <span>Shop Now</span>            
          </Button>
        </div>
      </div>
      <div className={classes.sponsorsContainer}>
        <img src="images/sponsors.png" alt="ay"/>
      </div>
      <div className={classes.latestBlogContainer}>
        <p className={classes.latestBlogTitle}>Latest Blog</p>
        <div className={classes.latestBlogCardsContainer}>
          <div className={classes.latestBlogCard}>
            <img className={classes.latestBlogImg} src="images/blog-img-1.png" alt="ay"/>
            <div className={classes.latestBlogCardDescriptionContainer}>
              <div className={classes.latestBlogIcons}>
                <span className={classes.latestBlogAuthor}><img src="images/ic-pen.png" alt="ay"/> SaberAli</span>
                <span className={classes.latestBlogDate}><img src="images/ic-calendar.png" /> 21 August 2020</span>
              </div>
              <p className={classes.latestBlogCardTitle}>Top Essential Trends in 2021</p>
              <p className={classes.latestBlogCardDescription}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              <a className={classes.latestBlogCardTag} href="#">Read More</a>
            </div>
          </div>
          <div className={classes.latestBlogCard}>
            <img className={classes.latestBlogImg} src="images/blog-img-2.png" alt="ay"/>
            <div className={classes.latestBlogCardDescriptionContainer}>
              <div className={classes.latestBlogIcons}>
                <span className={classes.latestBlogAuthor}><img src="images/ic-pen.png" alt="ay"/> SaberAli</span>
                <span className={classes.latestBlogDate}><img src="images/ic-calendar.png" /> 21 August 2020</span>
              </div>
              <p className={classes.latestBlogCardTitle}>Top Essential Trends in 2021</p>
              <p className={classes.latestBlogCardDescription}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              <a className={classes.latestBlogCardTag} href="#">Read More</a>
            </div>
          </div>
          <div className={classes.latestBlogCard}>
            <img className={classes.latestBlogImg} src="images/blog-img-3.png" alt="ay"/>
            <div className={classes.latestBlogCardDescriptionContainer}>
              <div className={classes.latestBlogIcons}>
                <span className={classes.latestBlogAuthor}><img src="images/ic-pen.png" alt="ay"/> SaberAli</span>
                <span className={classes.latestBlogDate}><img src="images/ic-calendar.png" /> 21 August 2020</span>
              </div>
              <p className={classes.latestBlogCardTitle}>Top Essential Trends in 2021</p>
              <p className={classes.latestBlogCardDescription}>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
              <a className={classes.latestBlogCardTag} href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;