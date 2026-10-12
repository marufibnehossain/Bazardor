"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { toast } from "react-toastify";


const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const [showForm, setShowForm] = useState(false);

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        const { error } = await updateUser({
            name,
        });

        if (error) {
            toast.error("নাম আপডেট করা যায়নি");
            return;
        }

        toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে");
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (!session?.user) {
        return null;
    }
    
    return (
        <div className="w-full px-[5vw]">
            <div className="max-w-3xl mx-auto flex flex-col py-10 px-4 gap-6">
                <div>
                    <h1 className="text-2xl font-bold mb-1">আমার প্রোফাইল</h1>
                    <p className='text-sm text-text'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>
                <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex max-[500px]:flex-col sm:justify-between sm:items-center gap-4">
                    <div className="flex max-[360px]:flex-col items-center justify-start gap-4">
                        <Image
                            width={80}
                            height={80}
                            src={session.user.image || "/default-avatar.png"}
                            alt={session.user.name}
                            className="w-14 h-14 sm:w-20 sm:h-20 object-cover sm:rounded-2xl rounded-lg"
                        />
                        <div className="text-wrap">
                            <h3 className="sm:text-xl text-lg font-semibold text-heading max-[360px]:text-center">
                                {session.user.name}
                            </h3>
                            <p className="mt-1 text-sm leading-tight text-text max-[360px]:text-center">{session.user.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setShowForm(!showForm)}
                            className="text-sm font-semibold text-primary cursor-pointer"
                        >
                            {showForm ? "বন্ধ করুন" : "তথ্য আপডেট"}
                        </button>
                        <button onClick={() => signOut()} className="py-2.5 px-4 text-sm font-semibold text-danger border border-danger rounded-lg hover:bg-danger hover:text-white transition-colors duration-300 cursor-pointer" >↩ সাইন আউট</button>
                    </div>
                </div>

                {showForm && (
                    <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex flex-col justify-between gap-4">
                        <h2 className="text-lg font-semibold text-heading">তথ্য</h2>
                        <Form className="flex flex-col gap-5 p-4" onSubmit={handleUpdateProfile}>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                                }}
                            >
                                <Label>নাম</Label>
                                <Input placeholder="যেমন: রহিম উদ্দিন" />
                                <FieldError />
                            </TextField>
                            <div className="flex flex-col">
                                <Button className="btn-global w-full py-2.5!" type="submit">
                                {/* <Check /> */}
                                আপডেট
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;