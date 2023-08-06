import "./Card.css";
import styles from "./Card.module.css";
import PropTypes from 'prop-types';

export const Card = ({ cardData, title ,size}) => {
  if (!cardData) return null;
  return (
    <div className={`container-${size}`}>
      <div className="title">{title}</div>
      {Object.entries(cardData).map(([k, v],index) => (
        <div key={index} className="cell">
          <div className="value">{k}</div>
          <div className="value">{v}</div>
        </div>
      ))}
    </div>
  );
};
Card.propTypes = { title:PropTypes.string, size: PropTypes.oneOf(['small', 'large'])  };
Card.defaultProps = { title:"Default Title",size:"Large" };