declare module 'hanzi-writer' {
  export interface HanziWriterOptions {
    width?: number;
    height?: number;
    padding?: number;
    showOutline?: boolean;
    strokeAnimationSpeed?: number;
    delayBetweenStrokes?: number;
    strokeColor?: string;
    radicalColor?: string;
    outlineColor?: string;
    drawingColor?: string;
    showHintAfterMisses?: number;
    onComplete?: () => void;
  }

  export default class HanziWriter {
    static create(element: string | HTMLElement, character: string, options?: HanziWriterOptions): HanziWriter;
    animateCharacter(): void;
    quiz(options?: HanziWriterOptions): void;
    setCharacter(character: string): void;
    hideCharacter(): void;
    showCharacter(): void;
    hideOutline(): void;
    showOutline(): void;
  }
}
