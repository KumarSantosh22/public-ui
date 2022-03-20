export interface Menu{
  id: number,
  guid?: string,
  key: string,
  label: string,
  sortOrder: number,
  parentId?: number,
  icon: string
  isTitle: boolean,
  isActive: boolean
}
