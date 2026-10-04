"use client"
import Form from 'next/form'
import React from 'react'
import { upadateStatus } from '../actions/contact'

export const StatusButton = ({id}) => {
    const action = upadateStatus.bind(null, id)
  return (
    <Form action={action}>
        <button className='bg-green-500 text-white px-3 py-1 mt-2'>
            Mark Resolved
        </button>
    </Form>
  )
}
