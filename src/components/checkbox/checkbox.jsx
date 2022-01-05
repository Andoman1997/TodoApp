import React from 'react';
import './checkbox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'


export  const Checkbox = ({
 onClick, checked, onDelete, label, onKeyUp,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input tabIndex="-1" type="checkbox" checked={checked} onChange={onClick} />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
    <FontAwesomeIcon icon={faBackspace} size="lg" />
    </button>
  </div>
);
