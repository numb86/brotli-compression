use brotli::CompressorReader;
use js_sys::Uint8Array;
use std::io::Read;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub extern "C" fn compress_by_brotli(text: &str) -> Uint8Array {
    let bytes = text.as_bytes();

    let mut compressor = CompressorReader::new(bytes, 4096, 6, 20);
    let mut compressed = Vec::new();
    compressor.read_to_end(&mut compressed).unwrap();

    js_sys::Uint8Array::from(&compressed[..])
}
