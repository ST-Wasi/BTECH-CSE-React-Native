"use client"
import React, { use } from 'react'
import { useParams } from 'next/navigation'

function page() {
    const params = useParams()
    console.log('✌️params --->', params);
    return (
        <div>
            <h1>Product details page</h1>
        </div>
    )
}

export default page
