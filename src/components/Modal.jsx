import { useRef, useState } from 'react'

const Modal = () => {
  const [open, setOpen] = useState(true)
  const videoRef = useRef(null)

  const close = () => {
    setOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal-panel">
        <div className="modal-panel__header">
          <span className="modal-panel__title">Joy Vacations — Novedades</span>
          <button className="modal-panel__close" onClick={close} aria-label="Cerrar">✕</button>
        </div>
        <div className="modal-panel__body">
          <video
            ref={videoRef}
            src="/assets/videos/joyVacationNews.MP4"
            controls
            muted
            autoPlay
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
