import styled from "styled-components";
import { popularProducts } from "../../data/popular-products";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((p) => (
        <Product id={p.id} img={p.img}></Product>
      ))}
    </Container>
  );
};

// import { useEffect } from "react";
// import {useDispatch,useSelector} from 'react-redux';
// import { getAllProducts } from "../../actions/productAction";
// import { AppState } from "../../redux";
// import ProductItem from "./productItem";
// import styled from 'styled-components'

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-between;
// `;

// const ProductViwew = ()=>{

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllProducts())
//     }, [])

//     const {data, loading, error} = useSelector((state:AppState) => state.product)

//     return(
//         loading ? <p>Ürünler yükleniyor</p> :
//            <>{

//             <Container>
//                 {data.map((item)=>(
//                     <ProductItem data={item}/>
//                 ))}
//             </Container>

// }
//     </>
//     )
// }

// export default ProductViwew;
