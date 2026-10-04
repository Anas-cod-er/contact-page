"use server";


import { redirect } from "next/navigation";
import { connectDB } from "../lib/db";
import contact from "../lib/models/contact";
import { revalidatePath } from "next/cache";


export async function createContact(formData){
    await connectDB();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await contact.create({
        name,
        email,
        message
    })
    redirect("/dashboard")
}


export async function upadateStatus(id) {
    await connectDB();

    await contact.findByIdAndUpdate(id,{
        status:"resolved"
    })

    revalidatePath("/dashboard")
}