import '../../App.css'
import './CTALanguage.css'

export default function CTALanguage() {
  return (
    <div className='CTA-language__container'>
        <button className="CTA-language">
        <div className="language__text-flag">
            <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect width="8" height="16" fill="#0E20C2" />{" "}
            <rect x="8" width="8" height="16" fill="white" />
            <rect x="16" width="8" height="16" fill="#FF0000" />
            </svg>
            Français
        </div>
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M3.115 4L10 11.4232L16.885 4L19 6.2965L10 16L1 6.2965L3.115 4Z"
            fill="black"
            />
        </svg>
        </button>
    </div>
  )
}