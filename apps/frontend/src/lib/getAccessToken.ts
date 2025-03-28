import env from "@/config/env";
import React from "react";

type getTokenType = {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export async function getAccessToken({ setUsername }: getTokenType) {
  try {
    const response = await fetch(`${env.BACKEND_URL}/api/v1/auth/refresh`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      const { username, accessToken } = result;
      sessionStorage.setItem("accessToken", accessToken);
      setUsername(username);
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
}
