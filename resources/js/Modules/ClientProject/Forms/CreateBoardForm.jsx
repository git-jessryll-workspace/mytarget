import {memo} from "react";
import {useForm} from "@inertiajs/react";


export default memo(function CreateBoardForm() {
    const {} = useForm({
        name: "",
        sort: ""
    });
    const handleSubmit = async (event) =>{
        event.preventDefault()

    }
    return <div>

        <form>

        </form>
    </div>
})
