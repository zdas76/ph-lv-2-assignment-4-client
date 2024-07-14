import { Col, Image } from 'antd';
import { NavLink } from 'react-router-dom';

type TItem = {
    _id:string;
    category: string;
    description: string;
    images: string;
    name: string;
    price: number;
    stock: number;
}
export default function Items(item:TItem) {
    console.log(item)
  return (

    <Col sm={24} md={12} lg={8} xl={6} >
        
        <div className='border border-red-50'>
            <p className='text-xl'>{item.name}</p>
            <Image
                width={200}
                src={item.images}
            />
            <p>{item.category}</p>
            <p className='line-clamp-2'>{item.description}</p>
            <NavLink to={`${item._id}`} {...item}>View Detais</NavLink>
            
        </div>
       
    </Col>

  )
}
