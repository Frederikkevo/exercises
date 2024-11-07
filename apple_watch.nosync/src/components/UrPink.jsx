import Image from 'next/image';

const UrPink = () => {
    return ( <div className='ur_container'>
        <div className='bg_box_pink'></div>
        <Image className='ur_pic' src="/ocean.png" alt="Ur" width={70} height={70} />
        
    </div> );
}
 
export default UrPink;