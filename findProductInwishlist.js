export const findProductInwishlist=(wishlist,prodId)=>{
    const isProductInwishlist=wishlist && wishlist.length > 0 && wishlist.some(({_id})=>_id === prodId);
    return isProductInwishlist;
};