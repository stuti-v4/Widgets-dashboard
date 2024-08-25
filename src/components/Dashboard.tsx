import React, { useState, useEffect } from 'react';

import { Widget } from './Widget';
import TopBar from "./TopBar";
import AddWidgetForm from './AddWidgetForm';
import { Category, WidgetType } from '../types/commonTypes';

import './dashboard.scss';

const styles = {
  container: 'dashboard__container',
  widget: {
    container: 'dashboard__widget-container',
    cta: 'dashboard__widget-cta',
  }
};

const Dashboard = () => {
  const initialData: Category[] = [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, title: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, title: "Widget 2", text: "Random text for Widget 2" }
      ]
    },
    {
      id: 2,
      name: "Sales Overview",
      widgets: [
        { id: 3, title: "Widget 3", text: "Random text for Widget 3" }
      ]
    },
    {
      id: 3,
      name: 'Image',
      widgets: [],
    },
    {
      id: 4,
      name: 'Ticket',
      widgets: [],
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>();
  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : initialData;
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
    console.log(categories);
  }, [categories]);

  const onAddClick = () => {
    setIsOpen(true);
  };

  const onCloseForm = () => {
    setIsOpen(false);
  };

  const addWidget = (categoryId: number, widget: WidgetType) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, widgets: [...category.widgets, widget] };
      }
      return category;
    }));
    setIsOpen(false);
  };

  const removeWidget = (categoryId: number, widgetId: number) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) };
      }
      return category;
    }));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredCategories = categories.map(category => {
    const filteredWidgets = category.widgets.filter(widget =>
      widget.title.toLowerCase().includes(searchQuery) ||
      widget.text.toLowerCase().includes(searchQuery)
    );
    return { ...category, widgets: filteredWidgets };
  }).filter(category => category.widgets.length > 0);

  const getWidgetsView = () => (
    filteredCategories.map(category => (
      <div key={category.id}>
        <h2>{category.name}</h2>
        <div className={styles.widget.container}>
          {category.widgets.map(widget => (
            <Widget
              key={widget.id}
              widget={widget}
              onRemove={() => removeWidget(category.id, widget.id)}
            />
          ))}
          <div className={styles.widget.cta}>
            <button onClick={() => {
              setIsOpen(true);
              setSelectedCategoryId(category.id)
            }}>+ Add Widget
            </button>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className={styles.container}>
      <TopBar onSearch={handleSearch} onAddClick={onAddClick}/>
      <h2>CNAPP Dashboard</h2>
      {filteredCategories.length !== 0 ? getWidgetsView() : "Nothing here"}
      {isOpen && selectedCategoryId !== null && <AddWidgetForm categoryId={selectedCategoryId!} onAddWidget={addWidget} onCloseForm={onCloseForm}/>}
    </div>
  );
};

export default Dashboard;
