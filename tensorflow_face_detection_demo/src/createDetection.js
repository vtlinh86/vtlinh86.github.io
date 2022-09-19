import { createDetector } from "./shared/params";

console.log('CreateDetection - v1');

let detector;
async function CreateDetection() {
    try {
        detector = await createDetector();
    } catch (error) {
        detector = null;
        alert(error);
    }
    console.log('detector', detector);
    if(detector){
        window.FACE_DETECTOR = detector;
    }
};
CreateDetection();