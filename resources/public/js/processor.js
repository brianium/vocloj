/**
 * https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process
 */
class StreamProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, params) {
    const sourceLength = Math.min(inputs.length, outputs.length);

    for (let n = 0; n < sourceLength; n++) {
      const input = inputs[n];
      const output = outputs[n];
      const channelsLength = Math.min(input.length, output.length);

      for (let m = 0; m < channelsLength; m++) {
        this.port.postMessage({ samples: input[m] });
      }
    }

    return true;
  }
}

registerProcessor('stream-processor', StreamProcessor);
