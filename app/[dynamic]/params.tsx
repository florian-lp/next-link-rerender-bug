'use client';

import { useParams } from "next/navigation";

export default function Params() {
    const params = useParams() as any;

    console.log(params);

    return <div>
        {JSON.stringify(params)}
    </div>;
}