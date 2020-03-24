import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function readdata(data) {
	return {
		type: types.READDATA,
		data: data,
	};
}

// # 0:6 FSR
// # 6   Force Sensor
// # 7   Encoder(from motor driver)
// # 8   Arduino extra pin
// # 10:12 Angle L / Angle R
// # 12:14 GED L / GED R
// # 17:32 MOTOR [vel, acc, dec, maxerror, targetposition, actualposition, demandposition, mode(manual, auto), error, META1th
// 	#, HEELth, DELAY, FESfreq, FESpulsewidth, FESthreshold]
export function parsedata(data) {

	console.log(data);

	return {
		type: types.PARSEDATA,
		data: data,
	};
}