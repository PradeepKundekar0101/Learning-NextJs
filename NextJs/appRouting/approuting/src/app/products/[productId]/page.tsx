type paramsType = { params: { productId: string } }
function Product({params}:paramsType){
    return<>
        {
            params.productId
        }
    </>
}
export default Product;