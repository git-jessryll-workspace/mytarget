import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import IdentificationIcon from "@/icons/IdentificationIcon";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight flex">
                    <IdentificationIcon className="w-6 h-6 mr-2"/>
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="h-[80dvh] overflow-y-auto">
                <div className="max-w-7xl mx-auto space-y-20 px-1">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                    <UpdatePasswordForm className="max-w-xl" />

                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
