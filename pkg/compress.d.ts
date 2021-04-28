/* tslint:disable */
/* eslint-disable */
/**
* @param {string} text
* @returns {Uint8Array}
*/
export function compress_by_brotli(text: string): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly compress_by_brotli: (a: number, b: number) => number;
  readonly BrotliDecoderCreateInstance: (a: number, b: number, c: number) => number;
  readonly BrotliDecoderSetParameter: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderDecompress: (a: number, b: number, c: number, d: number) => number;
  readonly BrotliDecoderDecompressStream: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly BrotliDecoderDecompressStreaming: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly BrotliDecoderDecompressWithReturnInfo: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly BrotliDecoderDecompressPrealloc: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly BrotliDecoderMallocU8: (a: number, b: number) => number;
  readonly BrotliDecoderFreeU8: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderMallocUsize: (a: number, b: number) => number;
  readonly BrotliDecoderFreeUsize: (a: number, b: number, c: number) => void;
  readonly BrotliDecoderDestroyInstance: (a: number) => void;
  readonly BrotliDecoderVersion: () => number;
  readonly CBrotliDecoderErrorString: (a: number) => number;
  readonly BrotliDecoderErrorString: (a: number) => number;
  readonly CBrotliDecoderHasMoreOutput: (a: number) => number;
  readonly BrotliDecoderHasMoreOutput: (a: number) => number;
  readonly CBrotliDecoderTakeOutput: (a: number, b: number) => number;
  readonly BrotliDecoderTakeOutput: (a: number, b: number) => number;
  readonly CBrotliDecoderIsUsed: (a: number) => number;
  readonly BrotliDecoderIsUsed: (a: number) => number;
  readonly CBrotliDecoderIsFinished: (a: number) => number;
  readonly BrotliDecoderIsFinished: (a: number) => number;
  readonly CBrotliDecoderGetErrorCode: (a: number) => number;
  readonly BrotliDecoderGetErrorCode: (a: number) => number;
  readonly CBrotliDecoderGetErrorString: (a: number) => number;
  readonly BrotliDecoderGetErrorString: (a: number) => number;
  readonly BroccoliCreateInstance: (a: number) => void;
  readonly BroccoliCreateInstanceWithWindowSize: (a: number, b: number) => void;
  readonly BroccoliDestroyInstance: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number, z: number, {: number, |: number, }: number, ~: number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number, : number,  : number, ¡: number, ¢: number, £: number, ¤: number, ¥: number, ¦: number, §: number, ¨: number, ©: number, ª: number, «: number, ¬: number, ­: number, ®: number, ¯: number, °: number, ±: number, ²: number, ³: number, ´: number, µ: number, ¶: number, ·: number, ¸: number, ¹: number, º: number, »: number, ¼: number, ½: number, ¾: number, ¿: number, À: number, Á: number, Â: number, Ã: number, Ä: number, Å: number, Æ: number, Ç: number, È: number, É: number, Ê: number, Ë: number, Ì: number, Í: number, Î: number, Ï: number, Ð: number, Ñ: number, Ò: number, Ó: number, Ô: number, Õ: number, Ö: number, ×: number, Ø: number, Ù: number) => void;
  readonly BroccoliNewBrotliFile: (a: number) => void;
  readonly BroccoliConcatStream: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly BroccoliConcatStreaming: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly BroccoliConcatFinish: (a: number, b: number, c: number) => number;
  readonly BroccoliConcatFinished: (a: number, b: number, c: number) => number;
  readonly BrotliEncoderMaxCompressedSizeMulti: (a: number, b: number) => number;
  readonly BrotliEncoderCompressMulti: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly BrotliEncoderCreateWorkPool: (a: number, b: number, c: number, d: number) => number;
  readonly BrotliEncoderDestroyWorkPool: (a: number) => void;
  readonly BrotliEncoderCompressWorkPool: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => number;
  readonly BrotliEncoderCreateInstance: (a: number, b: number, c: number) => number;
  readonly BrotliEncoderSetParameter: (a: number, b: number, c: number) => number;
  readonly BrotliEncoderDestroyInstance: (a: number) => void;
  readonly BrotliEncoderIsFinished: (a: number) => number;
  readonly BrotliEncoderHasMoreOutput: (a: number) => number;
  readonly BrotliEncoderSetCustomDictionary: (a: number, b: number, c: number) => void;
  readonly BrotliEncoderTakeOutput: (a: number, b: number) => number;
  readonly BrotliEncoderVersion: () => number;
  readonly BrotliEncoderMaxCompressedSize: (a: number) => number;
  readonly BrotliEncoderCompress: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly BrotliEncoderCompressStreaming: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly BrotliEncoderCompressStream: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly BrotliEncoderMallocU8: (a: number, b: number) => number;
  readonly BrotliEncoderFreeU8: (a: number, b: number, c: number) => void;
  readonly BrotliEncoderMallocUsize: (a: number, b: number) => number;
  readonly BrotliEncoderFreeUsize: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
