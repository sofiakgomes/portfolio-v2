import "../css/ShowcaseItem.css";
import { useHistory } from 'react-router-dom';

function ShowcaseItem(props) {
  const history = useHistory();

  return (
    <div
      className="item-container"
      style={{ cursor: props.onClick || props.link ? "pointer" : "unset" }}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        } else if (props.link && props.link[0] === "/") {
          history.push(props.link)
        } else if (props.link) {
          window.open(props.link);
        }
      }}
    >
      {props.caption &&
        <div className="item-overlay">
          <div className="item-text">{props.caption}</div>
        </div>
      }
      <img className="item" src={props.image}></img>
    </div>
    );
  }
  
  export default ShowcaseItem;