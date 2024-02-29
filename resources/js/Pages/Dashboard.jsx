import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} header={<div>
            <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Dashboard</h3>
        </div>}>
            <Head title="Dashboard" />
            <div>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    
                </dl>
            </div>
        </AuthenticatedLayout>
    );
}
