"use client";
import { signIn } from "@/lib/auth-client";
// import {Check} from "@gravity-ui/icons";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { handleGithubSignIn, handleGoogleSignIn } from "../sign-up/page";
import Link from "next/link";
import { toast } from "react-toastify";

const SignInPage = () => {

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        const {data: resData, error} = await signIn.email({
            email: data.email as string,
            password: data.password as string,
            rememberMe: true,
            callbackURL: "/",
        })
        console.log("Sign in response:", resData, error);

        if (error) {
            toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়");
            return;
        }

        toast.success("সফলভাবে সাইন ইন হয়েছে!");
    } 

    return (
        <div>
            <div className="flex flex-col items-center py-10 px-4 gap-6">
                <div>
                    <h1 className="text-2xl font-bold mb-1 text-center">অ্যাকাউন্ট তৈরি করুন</h1>
                    <p className='text-sm text-text text-center'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>
                <Form className="flex max-w-104 w-full flex-col gap-5 bg-surface border border-stroke rounded-2xl p-6" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                        }}
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        {/* <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description> */}
                        <FieldError />
                    </TextField>
                    <div className="flex flex-col">
                        <Button className="btn-global w-full py-2.5!" type="submit">
                        {/* <Check /> */}
                        সাইন ইন
                        </Button>
                        <div className="divider after:bg-stroke before:bg-stroke">অথবা</div>
                        <div className="flex gap-2">
                            <Button onPress={handleGoogleSignIn} className={'text-sm font-semibold px-3 py-2.5 border border-stroke bg-transparent rounded-lg text-heading w-1/2'}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.69993 2.65208C7.68818 2.65208 8.57314 2.99267 9.27106 3.65708L11.1833 1.74479C10.022 0.664417 8.50614 0 6.69993 0C4.08135 0 1.81731 1.50192 0.7146 3.69058L2.94235 5.41862C3.46997 3.83017 4.95235 2.65208 6.69993 2.65208Z" fill="#EA4335"/>
                                <path d="M13.1152 6.85352C13.1152 6.41523 13.0733 5.9909 13.0091 5.58331H6.69995V8.1014H10.3124C10.1505 8.92773 9.68145 9.63123 8.97795 10.1058L11.1359 11.7808C12.395 10.6139 13.1152 8.88865 13.1152 6.85352Z" fill="#4285F4"/>
                                <path d="M2.93965 7.9814C2.79804 7.56892 2.7245 7.13614 2.7219 6.70003C2.7219 6.25615 2.79728 5.82624 2.93407 5.41865L0.706319 3.69061C0.238946 4.62477 -0.00295455 5.65548 2.7235e-05 6.70003C2.7235e-05 7.7804 0.259652 8.80215 0.714694 9.70945L2.93965 7.9814Z" fill="#FBBC05"/>
                                <path d="M6.70004 13.4C8.50904 13.4 10.0305 12.8054 11.1388 11.7808L8.98083 10.1058C8.38062 10.5106 7.60733 10.7479 6.70004 10.7479C4.95246 10.7479 3.47008 9.56984 2.93966 7.98138L0.711914 9.70943C1.81741 11.8981 4.08146 13.4 6.70004 13.4Z" fill="#34A853"/>
                                </svg>
                                Google <span className="max-[460px]:hidden inline-block">দিয়ে চালিয়ে যান</span>
                            </Button>
                            <Button onPress={handleGithubSignIn} className={'text-sm font-semibold px-3 py-2.5 border border-stroke bg-transparent rounded-lg text-heading w-1/2'}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_99_1653)">
                                <path d="M6.7 0C2.99825 0 0 2.99825 0 6.7C0 9.66475 1.91787 12.1689 4.58112 13.0566C4.91612 13.1152 5.04175 12.9142 5.04175 12.7384C5.04175 12.5792 5.03338 12.0516 5.03338 11.4905C3.35 11.8004 2.9145 11.0801 2.7805 10.7032C2.70512 10.5106 2.3785 9.916 2.09375 9.75687C1.85925 9.63125 1.52425 9.32137 2.08537 9.313C2.613 9.30462 2.98987 9.79875 3.1155 9.99975C3.7185 11.0131 4.68163 10.7284 5.06688 10.5525C5.1255 10.117 5.30137 9.82387 5.494 9.65637C4.00325 9.48887 2.4455 8.911 2.4455 6.34825C2.4455 5.61962 2.70512 5.01662 3.13225 4.54762C3.06525 4.38012 2.83075 3.69337 3.19925 2.77212C3.19925 2.77212 3.76037 2.59625 5.04175 3.45887C5.57775 3.30812 6.14725 3.23275 6.71675 3.23275C7.28625 3.23275 7.85575 3.30812 8.39175 3.45887C9.67313 2.58788 10.2342 2.77212 10.2342 2.77212C10.6027 3.69337 10.3682 4.38012 10.3012 4.54762C10.7284 5.01662 10.988 5.61125 10.988 6.34825C10.988 8.91937 9.42187 9.48887 7.93112 9.65637C8.174 9.86575 8.38337 10.2677 8.38337 10.8959C8.38337 11.792 8.375 12.5122 8.375 12.7384C8.375 12.9142 8.50062 13.1236 8.83562 13.0566C10.1659 12.6079 11.3219 11.7532 12.1407 10.6128C12.9596 9.47245 13.4 8.10391 13.4 6.7C13.4 2.99825 10.4017 0 6.7 0Z" fill="#1D271F"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_99_1653">
                                <rect width="13.4" height="13.4" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                GitHub <span className="max-[460px]:hidden inline-block">দিয়ে চালিয়ে যান</span>
                            </Button>
                        </div>
                        <p className="text-sm text-center mt-4">অ্যাকাউন্ট নেই? <Link className="text-primary" href="/sign-up">সাইন আপ করুন</Link></p>
                    </div>
                </Form>
                <p className="text-sm"><Link href="/">← হোম পেজে ফিরে যান</Link></p>
            </div>
        </div>
    );
};

export default SignInPage;