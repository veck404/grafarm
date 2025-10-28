import Svg1 from '../Svgs/Svg1.svg'
import Svg2 from '../Svgs/Svg2.svg'
import Empty from '../Svgs/Empty.svg'
import Error from '../Svgs/Error.svg'
import Confirm from '../Svgs/Confirm.svg'




import { useState, useEffect } from 'react'

export default function Img({img,...prop}) {
  const [myImg, setMyImg] = useState();
  useEffect(()=>{
    let chosen = null;
    if(img==='1') chosen = Svg1;
    if(img==='2') chosen = Svg2;
    if(img==='Empty') chosen = Empty;
    if(img==='Error') chosen = Error;
    if(img==='Confirm') chosen = Confirm;

    // Fallback to the provided src if no predefined asset matched
    setMyImg(chosen || prop.src);
  },[img, prop.src])

  return (
    <div className={prop.className}>
      <img draggable='false' className='w-full h-full object-contain' src={myImg} alt={prop.alt || ''} />
    </div>
  )
}

