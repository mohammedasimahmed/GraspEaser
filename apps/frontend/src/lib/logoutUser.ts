import env from "@/config/env";
import React from "react";

type logoutType = {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const logoutUser = async ({ setUsername }: logoutType) => {
    setUsername("");
    sessionStorage.removeItem("accessToken");
    try {
        const response = await fetch(`${env.BACKEND_URL}/api/v1/auth/logout`, {
            method: "GET",
            credentials: "include",
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong while logging out');
        }
    } catch (error) {
        console.error("Error logging out:", error);
    }
}