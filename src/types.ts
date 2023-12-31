// Some color types I found to be a little more specific about point color
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type CubePoint = {
    uuid: string
    x: number
    y: number
    z: number
    blurb: string
    color: Color
}

