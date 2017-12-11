# mode-s-decoder

A library to decode a binary Mode S message to an easy to use JavaScript
object.

Mode S is an aviation transponder interrogation mode used by Secondary
Surveillance Radar (SSR) and Automatic Dependent Surveillance-Broadcast
(ADS-B) systems.

For an example of this module in use, see
[AirplaneJS](https://github.com/watson/airplanejs).

[![Build status](https://travis-ci.org/watson/mode-s-decoder.svg?branch=master)](https://travis-ci.org/watson/mode-s-decoder)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install mode-s-decoder --save
```

## Usage

```js
const Decoder = require('mode-s-decoder')
const decoder = new Decoder()

const data = new Uint8Array([0x8f, 0x46, 0x1f, 0x36, 0x60, 0x4d, 0x74, 0x82, 0xe4, 0x4d, 0x97, 0xbc, 0xd6, 0x4e])
const message = decoder.parse(data)

console.log(message)
```

## API

### `Decoder.UNIT_FEET`

A constant indicating that the unit used is feet. Used to check the unit
of the message using the `message.unit` property.

### `Decoder.UNIT_METERS`

A constant indicating that the unit used is meters. Used to check the
unit of the message using the `message.unit` property.

### `decoder = new Decoder([options])`

Initialize a new decoder object.

Arguments:

- `options` - An optional options object

The available options are:

- `fixErrors` - Set to `false` to disable automatic error correction
  (default: `true`)
- `aggressive` - Set to `true` to enable aggressive error correction
  algorithm. Only used if `fixErrors` is `true` (default: `false`)

### `message = decoder.parse(data[, crcOnly])`

Parse a binary Mode S message into an easy to use JavaScript object.

Arguments:

- `data` - A binary Mode S message (e.g. a Buffer or Uint8Array object)
- `crcOnly` - Optional boolean indicating if the decoder should only
  validate the checksum. If `true`, the returned `message` object will
  only contain the properties `msg`, `msgtype`, `msgbits`, `crc`, and
  `crcOk` (default: `false`)

Returns a `message` object containing the decoded message.

It's recommended to use this module together with the
[mode-s-aircraft-store](https://github.com/watson/mode-s-aircraft-store)
module. This allows you easy access to the decoded latitude and
longitude as this information cannot be read from a single Mode S
message, but needs multiple concurrent messages in order to be properly
decoded:

```js
const message = decoder.parse(data)

// store is an instance of AircraftStore from the mode-s-aircraft-store module
store.addMessage(message)

// ...

// later after storing multiple messages, output list of aircrafts:
store.getAircrafts().forEach(function (aircraft) {
  const unit = aircraft.unit === Decoder.UNIT_FEET ? 'feet' : 'meters'
  console.log('Aircraft:\n' +
    `  ID: ${aircraft.icao}\n` +
    `  Altitude: ${aircraft.altitude} ${unit}\n` +
    `  Speed: ${aircraft.speed}\n` +
    `  Heading: ${aircraft.heading}\n` +
    `  Latitude: ${aircraft.lat}\n` +
    `  Longitude: ${aircraft.lng}\n`)
})
```

## License

MIT
