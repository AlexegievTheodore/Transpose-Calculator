export type TuningType = "standard" | "drop";

export interface Tuning {
  id: string;
  name: string;
  pitches: number[];
  type: TuningType;
}

export const tunings = [
  {
    id: "e-standard",
    name: "E Standard",
    pitches: [40, 45, 50, 55, 59, 64],
    type: "standard",
  },
  {
    id: "e-flat-standard",
    name: "Eb Standard",
    pitches: [39, 44, 49, 54, 58, 63],
    type: "standard",
  },
  {
    id: "d-standard",
    name: "D Standard",
    pitches: [38, 43, 48, 53, 57, 62],
    type: "standard",
  },
  {
    id: "d-flat-standard",
    name: "Db Standard",
    pitches: [37, 42, 47, 52, 56, 61],
    type: "standard",
  },
  {
    id: "c-standard",
    name: "C Standard",
    pitches: [36, 41, 46, 51, 55, 60],
    type: "standard",
  },
  {
    id: "b-standard",
    name: "B Standard",
    pitches: [35, 40, 45, 50, 54, 59],
    type: "standard",
  },
  {
    id: "b-flat-standard",
    name: "Bb Standard",
    pitches: [34, 39, 44, 49, 53, 58],
    type: "standard",
  },
  {
    id: "a-standard",
    name: "A Standard",
    pitches: [33, 38, 43, 48, 52, 57],
    type: "standard",
  },
  {
    id: "a-flat-standard",
    name: "Ab Standard",
    pitches: [32, 37, 42, 47, 51, 56],
    type: "standard",
  },
  {
    id: "g-standard",
    name: "G Standard",
    pitches: [31, 36, 41, 46, 50, 55],
    type: "standard",
  },
  {
    id: "drop-d",
    name: "Drop D",
    pitches: [38, 45, 50, 55, 59, 64],
    type: "drop",
  },
  {
    id: "drop-d-flat",
    name: "Drop Db",
    pitches: [37, 44, 49, 54, 58, 63],
    type: "drop",
  },
  {
    id: "drop-c",
    name: "Drop C",
    pitches: [36, 43, 48, 53, 57, 62],
    type: "drop",
  },
  {
    id: "drop-b",
    name: "Drop B",
    pitches: [35, 42, 47, 52, 56, 61],
    type: "drop",
  },
  {
    id: "drop-b-flat",
    name: "Drop Bb",
    pitches: [34, 41, 46, 51, 55, 60],
    type: "drop",
  },
  {
    id: "drop-a",
    name: "Drop A",
    pitches: [33, 40, 45, 50, 54, 59],
    type: "drop",
  },
  {
    id: "drop-a-flat",
    name: "Drop Ab",
    pitches: [32, 39, 44, 49, 53, 58],
    type: "drop",
  },
  {
    id: "drop-g",
    name: "Drop G",
    pitches: [31, 38, 43, 48, 52, 57],
    type: "drop",
  },
];