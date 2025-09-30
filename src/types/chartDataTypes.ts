export interface ChartEntry {
  name: string;
  value: number;
}

export interface ChartData {
  title: string;
  data: ChartEntry[];
  colors?: string[];
}
