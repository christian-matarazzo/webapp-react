
import { RotateLoader } from "react-spinners";


export default function Loader() {
    return (

        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
            <RotateLoader
                cssOverride={{}}
                loading
                margin={2}
                size={15}
                speedMultiplier={1}
            />
        </div>

    )
}