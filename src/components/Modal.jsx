import { useRef, useState } from "react"


const Modal = () => {
  const [modal, setModal] = useState(true)

  const vidRef = useRef();
  
  const toggleModal = () => {
    const modalDom = document.getElementsByClassName('modal')[0]

    const video = document.getElementsByClassName('video')[0]

    setModal(!modal);
    if(modal) {
      modalDom.classList.remove('active-modal')
    }
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to the start
  };
  

  return (
    
      <div className='modal active-modal'>
      <div className="modal_content">
      <div className="close_btn_container ">
        <button className="close_btn" onClick={toggleModal}>X - Close</button>
      </div>
        <video className="video" controls muted ref={vidRef} autoPlay>
            <source src='/assets/videos/joyVacationNews.MP4' type="video/mp4"/>
        </video>
      </div>
    </div>
)
}

export default Modal