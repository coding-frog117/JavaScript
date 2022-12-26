function ItemImg({image}){
    return <li><img src={image.urls.small} alt={image.alt_description}></img></li>
}

export default ItemImg;