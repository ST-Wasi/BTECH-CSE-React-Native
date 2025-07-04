"use client"
import React from 'react'
import { useParams } from 'next/navigation'

function page() {
    const params = useParams()
    console.log('✌️params --->', params);
    return (
        <div>
            <h1>Product Detail PAge</h1>
        </div>
    )
}

export default page
