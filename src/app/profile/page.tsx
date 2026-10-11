"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";


const ProfilePage = () => {
    const { data: session, isPending } = useSession();

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
                <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex max-[400px]:flex-col justify-between max-[400px]:justify-center sm:items-center gap-4">
                    <div className="flex sm:items-center justify-start items-start gap-4">
                        <div className="flex items-center justify-center sm:rounded-2xl rounded-lg bg-background sm:text-4xl text-3xl overflow-hidden">
                            <Image
                                width={80}
                                height={70}
                                src={session.user.image || "/default-avatar.png"}
                                alt={session.user.name}
                            />
                        </div>
                        <div>
                            <h3 className="sm:text-xl text-lg font-semibold text-heading">
                                {session.user.name}
                            </h3>
                            <p className="mt-1 text-sm leading-tight text-text">{session.user.email}</p>
                        </div>
                    </div>
                    <button onClick={() => signOut()} className="py-2.5 px-4 text-sm font-semibold text-danger border border-danger rounded-lg hover:bg-danger hover:text-white transition-colors duration-300 cursor-pointer" >↩ সাইন আউট</button>
                </div>
                <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex flex-col justify-between max-[400px]:justify-center sm:items-center gap-4">
                    <h2 className="text-lg font-semibold text-heading">তথ্য</h2>
                    <Form className="flex min-w-104 flex-col gap-5 p-6">
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
                            সাইন ইন
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;