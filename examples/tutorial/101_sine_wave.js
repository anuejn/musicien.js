// Generates a sine wave, which is a simple, soft sound.
//
// See https://en.wikipedia.org/wiki/Sine

// This code is called 44100 times a second.
// 44100 Hz is a common sampling frequency for high-quality audio.
//
// See https://en.wikipedia.org/wiki/44,100_Hz

// Each time this code is called, the fraction 1 / 44100 is added
// to the variable t. Since this code is called 44100 times per second,
// the variable t always contains the total time passed in seconds.
//
// All variables of the form "this.X = ..." are remembered permanently.
// By contrast, variables that use the "const X = ..." are only available
// for generating a single sample, and are thrown away afterwards.
this.t += 1 / 44100

// The sine function generates a wave curve that sounds soft and is gentle
// to the loud speaker. (There are other, more aggressive functions
// out there, to be introduced later.)
//
// In school, the sine function is often introduced as sin(degree), where
// degree varies from 0 degrees to 360 degrees for generating one full wave.
// In computing, a different range is used. It goes from 0 to 2 * π.
// Finally, when generating music, it is most convenient to use the range
// from 0 to 1, because these numbers are so simple and universal.
//
// See https://en.wikipedia.org/wiki/Sine
//
// Therefore, the sin function defined here uses the convenient range,
// converting it to the range that the classical sine function expects.
function sin(phi) {
  return Math.sin(2 * Math.PI * phi)
}

// To generate a sine wave, the time that has passed until now is multiplied
// by the frequency of the tone. The higher the frequency, the higher the
// tone sounds.
//
// See the table in https://en.wikipedia.org/wiki/Pitch_(music)#Labeling_pitches
//
// To control the volume, replace the 1 with a 0 (off) or 0.2 (quiet).
return 1 * sin(440 * this.t)