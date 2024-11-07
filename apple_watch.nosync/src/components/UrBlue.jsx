import Image from 'next/image';

const UrBlue = () => {
    return ( <div className='ur_container'>
        <Image className='ur_pic' src="/mint.png" alt="Ur" width={70} height={70} />
        <div className='bg_box_blue'></div>
    </div> );
}
 
export default UrBlue;