import Image from 'next/image';

const UrGrey = () => {
    return ( <div className='ur_container'>
         <Image className='ur_pic' src="/navy.png" alt="Ur" width={70} height={70} />
        <div className='bg_box_grey'></div>
    </div> );
}
 
export default UrGrey;