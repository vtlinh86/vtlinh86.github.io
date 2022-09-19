import { createDetector } from "./shared/params";

console.log('face_detection_helper - v1');

function FaceDetetionHelper() {
    this.createDetector = async function () {
        let detector;
        try {
            detector = await createDetector();
        } catch (error) {
            detector = null;
            alert(error);
        }
        console.log('detector', detector);
        return detector;
    }
}

window.FACE_DETECTION_HELPER = new FaceDetetionHelper();