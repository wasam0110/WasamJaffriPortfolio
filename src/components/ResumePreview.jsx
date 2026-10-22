import { useEffect, useRef, useState } from 'react'
import { Download, ExternalLink, X } from 'lucide-react'

const RESUME_URL = '/WasamJaffri_Resume.pdf.pdf'

export default function ResumePreview() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <>
      <button type="button" className="btn btn-o" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <Download size={14} />Resume
      </button>
      <dialog
        ref={dialogRef}
        className="resume-dialog"
        aria-labelledby="resume-dialog-title"
        onClose={() => setOpen(false)}
      >
        <div className="resume-dialog-head">
          <div>
            <span className="resume-dialog-kicker">DOCUMENT PREVIEW</span>
            <h2 id="resume-dialog-title">Syed Wasam Jaffri — Resume</h2>
          </div>
          <button type="button" className="resume-close" onClick={() => dialogRef.current?.close()} aria-label="Close resume preview">
            <X size={18} />
          </button>
        </div>
        <div className="resume-frame-wrap">
          <iframe src={open ? `${RESUME_URL}#toolbar=0&navpanes=0&view=FitH` : undefined} loading="lazy" title="Resume PDF preview">
            <p>Your browser cannot display the PDF preview. Use the download button below.</p>
          </iframe>
        </div>
        <div className="resume-dialog-actions">
          <a className="btn btn-g" href={RESUME_URL} download><Download size={14} />Download PDF</a>
          <a className="resume-open-link" href={RESUME_URL} target="_blank" rel="noreferrer noopener">Open in new tab <ExternalLink size={13} /></a>
        </div>
      </dialog>
    </>
  )
}
