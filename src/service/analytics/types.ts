export interface AnalyticsItem {
    label: string
    value: number | string
    help: string
}
  
// Альтернативный вариант, если API возвращает массив напрямую
export type AnalyticsData = AnalyticsItem[]
  