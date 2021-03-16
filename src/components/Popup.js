import "../css/Popup.css";
import { useRef } from "react";

const popupClass = { null: "", true: "show", false: "hide" }

function Popup(props) {
  const iframeRef = useRef(null);

  const closePopup = () => {
    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"stopVideo"}', '*');
    }, 300);
    props.close();
  }

  return (
    <div
      className={`popup-background ${popupClass[props.isOpen]}`}
      onClick={closePopup}
    >
      <div className="popup-container">
        <iframe
          className="popup-video"
          ref={iframeRef}
          src={props.url + "?enablejsapi=1"}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <span
          class="material-icons popup-close"
          onClick={closePopup}
        >
            cancel
        </span>
      </div>
    </div>
  );
}

export default Popup;