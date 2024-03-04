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
                <h2 className="font-semibold text-sm leading-tight flex items-center">
                    <IdentificationIcon className="w-5 h-5 mr-2" />
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="h-[calc(100dvh-120px)] overflow-y-auto -mr-5">
                <div className="max-w-7xl mx-auto space-y-20 pl-1 pb-10 ">
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
