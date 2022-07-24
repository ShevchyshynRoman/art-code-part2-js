import React from 'react';
import './ModalError.scss';

type Props = {
  content: string,
  active: boolean,
  setActive: (isAct: boolean) => void,
};

export const ModalError: React.FC<Props> = ({
  content,
  active,
  setActive,
}) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
    >
      <div className="modal__content">
        <h3>
          {content}
        </h3>
        <button
          type="button"
          className="modal__button"
          onClick={() => setActive(false)}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};
