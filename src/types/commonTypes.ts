export interface WidgetType {
  id: number;
  title: string;
  text: string;
}

export interface Category {
  id: number;
  name: string;
  widgets: WidgetType[];
}
