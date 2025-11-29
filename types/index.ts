export interface HoldData {
  id: string;
  position: [number, number, number];
  color: string;
  shape: "sphere" | "box";
  size?: number;
}
