
export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface OrnamentData {
  id: number;
  type: 'gift' | 'ball' | 'star' | 'light';
  weight: number;
  scatterPos: [number, number, number];
  treePos: [number, number, number];
  rotation: [number, number, number];
  color: string;
}
