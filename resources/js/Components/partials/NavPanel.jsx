import { memo, useState } from "react";
import Modal from "../Modal";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import XCircleIcon from "@/icons/XCircleIcon";
import { Link, useForm } from "@inertiajs/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icons";

export default memo(function NavPanel({
    keyProps,
    updateClientList,
    data,
    CreateForm,
    search_query
}) {
    const [search, setSearch] = useState(search_query);
    const [showCreateClient, setShowCreateClient] = useState(false);
    const {get: getFn} = useForm({})

    return (
        <>
            <Modal show={showCreateClient} maxWidth="md">
                <CreateForm
                    updateClientList={updateClientList}
                    setShowCreate={setShowCreateClient}
                />
            </Modal>
            <div className="flex justify-end lg:justify-between items-center">
                <div className="w-full lg:w-[60%] hidden lg:flex space-x-3 items-center">
                    <div className="w-full relative flex items-center">
                        <TextInput
                            placeholder="Search client name"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    getFn(
                                        route(`${keyProps}.index`, {
                                            search_query: search,
                                        }),
                                        {
                                            onSuccess: (res) => {
                                                setSearch(search);
                                                updateClientList(
                                                    res.props[keyProps]
                                                );
                                            },
                                        }
                                    );
                                }
                            }}
                        />
                        {search !== "" && (
                            <div
                                className="absolute right-2 cursor-pointer"
                                onClick={() => {
                                    console.log("asd");
                                    getFn(
                                        route(`${keyProps}.index`, {
                                            search_query: "",
                                        }),
                                        {
                                            onSuccess: (res) => {
                                                updateClientList(
                                                    res.props[keyProps]
                                                );
                                                setSearch("");
                                            },
                                        }
                                    );
                                }}
                            >
                                <XCircleIcon className="w-5 h-5 text-gray-600/100 hover:text-gray-700 dark:hover:text-white" />
                            </div>
                        )}
                    </div>
                    <div className="w-auto lg:w-[30%]">
                        <PrimaryButton
                            onClick={() => setShowCreateClient(true)}
                        >
                            <span>Create New</span>
                        </PrimaryButton>
                    </div>
                </div>
                <div className="flex space-x-3 items-center justify-end">
                    <div className="font-bold text-sm">
                        {data.from} - {data.to} of {data.total}
                    </div>
                    <div className="join space-x-1">
                        <div>
                            <Link
                                href={data.prev_page_url}
                                className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                disabled={!data.prev_page_url}
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={data.next_page_url}
                                className="btn btn-sm bg-teal-600 hover:bg-teal-600/90 text-white"
                                disabled={!data.next_page_url}
                            >
                                <ChevronRightIcon className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
