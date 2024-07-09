import { Separator } from "@/components/ui/separator";
import React from "react";

export default function ListPage() {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="bg-gray-400 text-6xl text-center">
                    <h2>Supplier overall</h2>
                </div>
                <div className="flex flex-row gap-4 bg-gray-400 text-4xl text-center">
                    <h3>Supplier waterfootprint</h3>
                </div>
            </div>
        </div>
    );
}
