import React from 'react'
import { connectDB } from '../../../lib/db'
import contact from '../../../lib/models/contact';
import { StatusButton } from '../../../components/StatusButton'; 

const page = async() => {
    await connectDB();
    const contacts = await contact.find()
  return (
    <div className='p-10'>
        <h1 className='text-2xl mb-6'> 
            Contact Messges
        </h1>
        {
            contacts.map((contact)=>(
                <div key={contact.id} className='border p-4 mb-4'>
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.message}</p>
                    {
                      contact.status === "resolved"? <p className='text-green-400'>{contact.status}</p> : <StatusButton 
                     id={contact._id.toString()}
                    />
                    }
                </div>
                
            ))
        }
    </div>
  )
}

export default page