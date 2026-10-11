"use client";
import { signIn } from "@/lib/auth-client";
import {Eye, EyeSlash} from "@gravity-ui/icons";
// import {Check} from "@gravity-ui/icons";
import {Button, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import { useState } from "react";

const SignInPage = () => {

    const [isVisible, setIsVisible] = useState(false);

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
    } 

    return (
        <div>
            <h2>Sign In Page</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField className="w-full max-w-70" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                        className="w-full max-w-70"
                        type={isVisible ? "text" : "password"}
                        value={isVisible ? "87$2h.3diua" : "••••••••"}
                        />
                        <InputGroup.Suffix className="pe-0">
                        <Button
                            isIconOnly
                            aria-label={isVisible ? "Hide password" : "Show password"}
                            size="sm"
                            variant="ghost"
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                        </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                    {/* <Check /> */}
                    Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                    Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignInPage;