import React from 'react';
import { WidgetType } from '../types/commonTypes';

import './widget.scss';

const styles = {
  container: 'widget__container',
  cta: 'widget__cta',
}

type Props = {
  widget: WidgetType;
  onRemove: () => void;
}

const Widget = (prop : Props) => {
  const { widget, onRemove } = prop;
  return (
      <div className={styles.container}>
        <h3>{widget.title}</h3>
        <p>{widget.text}</p>
        <div className={styles.cta}>
          <button onClick={onRemove}>X</button>
        </div>
      </div>
  );
};

export {Widget};
