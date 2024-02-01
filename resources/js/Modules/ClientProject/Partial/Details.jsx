import { usePage } from "@inertiajs/react";


const Details = () => {
    const {project_client} = usePage().props;
    return <>
        <div>
            <h3 className="font-bold text-xl">{project_client.project_name}</h3>
        </div>
        <div className="pt-4">
            <p>{project_client.description}</p>
        </div>
    </>
}

export default Details;