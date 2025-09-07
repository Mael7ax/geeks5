import {ShopCard} from "./ShopCard.jsx";
import  data from "../../data/ShopCardData.json"
export const ShopProducts = () => {
    const images = [
        "https://www.gadget.kg/upload/catalog/71/item_7051/a6fd9105ab6deff43897306a354a162b.jpg",
        "https://euromebel.kg/upload/resize_cache/iblock/080/940_640_0ce6f211fbe1684de17c1bcd584296260/00029582_00_01.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjp-DSG2zI-cMMdCddfL6HtfeeiuEOIIcSew&s",
        "https://estechno.net/upload/iblock/098/0hpmis3h8grg2u8leekrvujbt5hsrp6w.jpg",
        "https://www.avrora-mebel.ru/wa-data/public/shop/products/42/27/2742/images/6661/6661.750@2x.jpg"
    ]

    return (
        <ShopCard products={data} images={ images}/>
    );
};

