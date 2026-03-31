import { useRef, useState } from 'react'

const SEEN_KEY = 'jvc_welcome_seen'

const Modal = () => {
  const [open, setOpen] = useState(() => !localStorage.getItem(SEEN_KEY))
  const videoRef = useRef(null)

  const close = () => {
    setOpen(false)
    localStorage.setItem(SEEN_KEY, '1')
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
