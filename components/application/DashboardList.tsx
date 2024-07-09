"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function DashboardList() {
    const router = useRouter();
    const goTo = function (path: string) {
        router.push(`/dashboard/${path}`);
    };
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="bg-gray-400 text-6xl text-center">
                    <h3>Company overall</h3>
                </div>
                <div className="flex flex-row gap-4">
                    <div
                        className="w-1/2 bg-gray-400 text-4xl text-center cursor-pointer"
                        onClick={() => goTo("sites")}
                    >
                        <h3>Sites</h3>
                    </div>
                    <div
                        className="w-1/2 bg-gray-400 text-4xl text-center cursor-pointer"
                        onClick={() => goTo("providers")}
                    >
                        <h3>Suppliers</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
