const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const aGesture = new GestureDescription('a'); // A
const bGesture = new GestureDescription('b'); //B
const cGesture = new GestureDescription('c'); //C
const dGesture = new GestureDescription('d'); //D
const eGesture = new GestureDescription('e'); //E

// thumb: half curled
// accept no curl with a bit lower confidence
aGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    aGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    aGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

bGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
bGesture.addCurl(Finger.Thumb, FingerCurl.VerficalUp, 0.5);
bGesture.addCurl(Finger.all, FingerCurl.VerficalUp, 1.0);
bGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
bGesture.addDirection(Finger.all, FingerDirection.VerficalUp, 1.0)

cGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
cGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
cGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0)
cGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
cGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0)
cGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0)
cGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0)

dGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
dGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
dGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.5);
dGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
dGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
dGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
dGesture.addDirection(Finger.Index, FingerDirection.VerficalUp, 1.0);
dGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
dGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
dGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

const gestures = [
    aGesture, bGesture, cGesture, dGesture
]
export { gestures }