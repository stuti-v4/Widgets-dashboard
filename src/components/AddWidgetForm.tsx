import React, { useState } from 'react';
import { WidgetType } from '../types/commonTypes';

import './addWidgetFrom.scss';

const styles = {
  container: 'form__container',
  wrapper: 'form__wrapper',
  header: 'form__header',
  subHeader: 'form__sub-header',
  selectedCta: 'form__selected-cta',
  content: 'form__content',
  actionCta: 'form__action-cta',
}

type Props = {
  categoryId: number;
  onAddWidget: (categoryId: number, widget: WidgetType) => void;
  onCloseForm: () => void;
}

const AddWidgetForm = (props: Props) => {
  const { categoryId, onAddWidget, onCloseForm} = props;

  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(categoryId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWidget: WidgetType = { id: Date.now(), title, text };
    onAddWidget(selectedCategoryId, newWidget);
    setTitle('');
    setText('');
  };

  console.log(selectedCategoryId);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Add Widget</h3>
          <button onClick={onCloseForm}>X</button>
        </div>
        <div>Personalise your dashboard by adding the following widget</div>
        <div className={styles.subHeader}>
          <h2
            className={selectedCategoryId === 1 ? styles.selectedCta : ''}
            onClick={() => setSelectedCategoryId(1)}>
            CSPM
          </h2>
          <h2
            className={selectedCategoryId === 2 ? styles.selectedCta : ''}
            onClick={() => setSelectedCategoryId(2)}>
            Sales Overview
          </h2>
          <h2
            className={selectedCategoryId === 3 ? styles.selectedCta : ''}
            onClick={() => setSelectedCategoryId(3)}>
            Image
          </h2>
          <h2
            className={selectedCategoryId === 4 ? styles.selectedCta : ''}
            onClick={() => setSelectedCategoryId(4)}>
            Ticket
          </h2>
        </div>
        <form className={styles.content} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className={styles.actionCta}>
            <button onClick={onCloseForm}>Cancel</button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetForm;
