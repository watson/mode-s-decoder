'use strict'

const test = require('tape')
const Decoder = require('./')

const shortRawStr = '5d3c65c92ada79'
const shortRawBuf = Buffer.from(shortRawStr, 'hex')
const shortRawArr = new Uint8Array(shortRawBuf)
const longRawStr = 'c2106f9030e7a0001690957a2932'
const longRawBuf = Buffer.from(longRawStr, 'hex')
const longRawArr = new Uint8Array(longRawBuf)

test('short message, Buffer, complete', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(shortRawBuf)
  t.deepEqual(msg, {
    msg: shortRawBuf,
    msgbits: 56,
    msgtype: 11,
    crcOk: true,
    crc: 2808441,
    errorbit: -1,
    icao: 3958217,
    phaseCorrected: false,
    ca: 5,
    metype: 5,
    mesub: 2,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: 5,
    dr: 7,
    um: 35,
    identity: 4264,
    altitude: null,
    unit: null
  })
  t.end()
})

test('short message, Uint8Array, complete', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(shortRawArr)
  t.deepEqual(msg, {
    msg: shortRawArr,
    msgbits: 56,
    msgtype: 11,
    crcOk: true,
    crc: 2808441,
    errorbit: -1,
    icao: 3958217,
    phaseCorrected: false,
    ca: 5,
    metype: 5,
    mesub: 2,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: 5,
    dr: 7,
    um: 35,
    identity: 4264,
    altitude: null,
    unit: null
  })
  t.end()
})

test('short message, Buffer, crcOnly', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(shortRawBuf, true)
  t.deepEqual(msg, {
    msg: shortRawBuf,
    msgbits: 56,
    msgtype: 11,
    crcOk: true,
    crc: 2808441,
    errorbit: -1,
    icao: 0,
    phaseCorrected: false,
    ca: null,
    metype: null,
    mesub: null,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: null,
    dr: null,
    um: null,
    identity: null,
    altitude: null,
    unit: null
  })
  t.end()
})

test('short message, Uint8Array, crcOnly', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(shortRawArr, true)
  t.deepEqual(msg, {
    msg: shortRawArr,
    msgbits: 56,
    msgtype: 11,
    crcOk: true,
    crc: 2808441,
    errorbit: -1,
    icao: 0,
    phaseCorrected: false,
    ca: null,
    metype: null,
    mesub: null,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: null,
    dr: null,
    um: null,
    identity: null,
    altitude: null,
    unit: null
  })
  t.end()
})

test('long message, Buffer, complete', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(longRawBuf)
  t.deepEqual(msg, {
    msg: longRawBuf,
    msgbits: 56,
    msgtype: 24,
    crcOk: false,
    crc: 3205024,
    errorbit: -1,
    icao: 1077136,
    phaseCorrected: false,
    ca: 2,
    metype: 6,
    mesub: 0,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: 2,
    dr: 2,
    um: 3,
    identity: 7061,
    altitude: null,
    unit: null
  })
  t.end()
})

test('long message, Uint8Array, complete', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(longRawArr)
  t.deepEqual(msg, {
    msg: longRawArr,
    msgbits: 56,
    msgtype: 24,
    crcOk: false,
    crc: 3205024,
    errorbit: -1,
    icao: 1077136,
    phaseCorrected: false,
    ca: 2,
    metype: 6,
    mesub: 0,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: 2,
    dr: 2,
    um: 3,
    identity: 7061,
    altitude: null,
    unit: null
  })
  t.end()
})

test('long message, Buffer, crcOnly', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(longRawBuf, true)
  t.deepEqual(msg, {
    msg: longRawBuf,
    msgbits: 56,
    msgtype: 24,
    crcOk: false,
    crc: 3205024,
    errorbit: -1,
    icao: 0,
    phaseCorrected: false,
    ca: null,
    metype: null,
    mesub: null,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: null,
    dr: null,
    um: null,
    identity: null,
    altitude: null,
    unit: null
  })
  t.end()
})

test('long message, Uint8Array, crcOnly', function (t) {
  const decoder = new Decoder()
  const msg = decoder.parse(longRawArr, true)
  t.deepEqual(msg, {
    msg: longRawArr,
    msgbits: 56,
    msgtype: 24,
    crcOk: false,
    crc: 3205024,
    errorbit: -1,
    icao: 0,
    phaseCorrected: false,
    ca: null,
    metype: null,
    mesub: null,
    headingIsValid: null,
    heading: null,
    aircraftType: null,
    fflag: null,
    tflag: null,
    rawLatitude: null,
    rawLongitude: null,
    callsign: '',
    ewDir: null,
    ewVelocity: null,
    nsDir: null,
    nsVelocity: null,
    vertRateSource: null,
    vertRateSign: null,
    vertRate: null,
    speed: null,
    fs: null,
    dr: null,
    um: null,
    identity: null,
    altitude: null,
    unit: null
  })
  t.end()
})
